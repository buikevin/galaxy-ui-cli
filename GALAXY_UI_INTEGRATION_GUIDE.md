# 🎯 Galaxy UI Integration Guide for Galaxy CLI

**Date:** October 31, 2025
**Purpose:** Integrate Galaxy UI component library into Galaxy CLI as native tools
**Approach:** Simple 3-step tool addition (NO core changes to Galaxy CLI)

---

## 📋 Overview

Based on your correct analysis, we only need to **add Galaxy UI tools to existing registry** instead of creating a separate MCP server. This leverages Galaxy CLI's existing tool infrastructure.

### Your 3-Step Plan (100% Correct ✅)

1. **Viết galaxy-ui-operator và add vào registry.ts**
2. **Add thêm các name tools vào toolsContext**
3. **Sửa lại system prompts để ưu tiên Galaxy UI** (nhớ là chỉ ưu tiên thôi chứ vẫn phải theo nhu cầu của user)

---

## 🔧 Step 1: Viết galaxy-ui-operator.ts

### Location
```
galaxy_cli/source/tools/galaxy-ui-operator.ts
```

### 3 Tools cần implement:

#### Tool 1: `galaxy_ui_search`
**Purpose:** Tìm kiếm components từ Galaxy UI registry

**Input:**
```typescript
{
  query: string          // e.g., "button", "calendar", "form"
  framework?: string     // 'react' | 'vue' | 'angular'
  workingDirectory?: string
}
```

**Output:**
```typescript
{
  success: boolean
  components: Array<{name, description, framework}>
  message: string
}
```

**Implementation Strategy:**
1. Fetch registry từ GitHub: `https://raw.githubusercontent.com/.../registry-{framework}.json`
2. Search trong registry based on query
3. Return matching components

**Tool Declaration:**
```typescript
{
  name: 'galaxy_ui_search',
  description: 'Search for available Galaxy UI components. Use this when user wants to find UI components.',
  inputSchema: {
    type: 'object',
    properties: {
      query: {type: 'string', description: 'Search query'},
      framework: {type: 'string', enum: ['react', 'vue', 'angular']},
      workingDirectory: {type: 'string'}
    },
    required: ['query']
  },
  execute: async (input, context) => {
    // Implementation here
  }
}
```

---

#### Tool 2: `galaxy_ui_add`
**Purpose:** Add component vào project với AI-driven generation

**Input:**
```typescript
{
  component: string      // e.g., "button", "calendar"
  framework?: string     // auto-detect if not specified
  workingDirectory?: string
  customization?: {
    variant?: string
    size?: string
    color?: string
  }
}
```

**Output:**
```typescript
{
  success: boolean
  message: string
  filesCreated: string[]
  dependencies: string[]
  nextSteps?: string[]
}
```

**Implementation Strategy (AI-Driven):**
1. **Analyze project context:**
   - Read package.json to detect framework, TypeScript, paths
   - Detect Tailwind config
   - Determine import style

2. **Fetch reference code from GitHub:**
   ```typescript
   const url = `https://raw.githubusercontent.com/.../packages/${framework}/src/components/${component}/...`
   ```

3. **Generate adapted code using Qwen3-Coder:**
   ```typescript
   const ollama = new OllamaConnection({model: 'qwen3-coder:480b-cloud'});

   const prompt = `
   # Task: Adapt Component Code to Project Style

   ## Reference Code:
   ${referenceCode}

   ## Target Project:
   - Framework: ${framework}
   - TypeScript: ${typescript}
   - Component Path: ${componentPath}
   - Import Style: ${importStyle}

   ## Requirements:
   1. Adapt code to match project structure
   2. Use correct import paths
   3. Maintain TypeScript types if enabled
   4. Keep same functionality

   Provide ONLY the adapted code.
   `;

   const response = await ollama.generate({
     model: 'qwen3-coder:480b-cloud',
     prompt,
     system: 'You are an expert frontend developer.'
   });
   ```

4. **Write files:**
   - Create component directory
   - Write adapted code files
   - Return list of created files

5. **Return dependencies:**
   - List from registry metadata
   - User can install with `npm install ...`

**Tool Declaration:**
```typescript
{
  name: 'galaxy_ui_add',
  description: 'Add a Galaxy UI component to the project. Fetches code, adapts it using AI, and creates files. Use when user wants to add/install UI components.',
  inputSchema: {
    type: 'object',
    properties: {
      component: {type: 'string', description: 'Component name'},
      framework: {type: 'string', enum: ['react', 'vue', 'angular']},
      workingDirectory: {type: 'string'},
      customization: {
        type: 'object',
        properties: {
          variant: {type: 'string'},
          size: {type: 'string'},
          color: {type: 'string'}
        }
      }
    },
    required: ['component']
  },
  execute: async (input, context) => {
    // Implementation here
  }
}
```

---

#### Tool 3: `galaxy_ui_init`
**Purpose:** Initialize Galaxy UI trong project (first-time setup)

**Input:**
```typescript
{
  framework?: string     // auto-detect if not specified
  workingDirectory?: string
}
```

**Output:**
```typescript
{
  success: boolean
  message: string
  filesCreated: string[]
  nextSteps?: string[]
}
```

**Implementation Strategy:**
1. Analyze project to detect framework
2. Create `lib/utils.ts` with cn() helper
3. Create `components/ui/` directory
4. Create `components.json` config file
5. Return installation instructions

**Tool Declaration:**
```typescript
{
  name: 'galaxy_ui_init',
  description: 'Initialize Galaxy UI in a project. Creates config files, utils, and base structure. Use before adding components.',
  inputSchema: {
    type: 'object',
    properties: {
      framework: {type: 'string', enum: ['react', 'vue', 'angular']},
      workingDirectory: {type: 'string'}
    },
    required: []
  },
  execute: async (input, context) => {
    // Implementation here
  }
}
```

---

## 🔧 Step 2: Register Tools trong registry.ts

### Location
```
galaxy_cli/source/tools/registry.ts
```

### Changes needed:

**1. Import galaxy-ui-operator:**
```typescript
// Add this import at top of file
import { galaxyUITools } from './galaxy-ui-operator.js';
```

**2. Register tools in `registerAllTools()` method:**
```typescript
private registerAllTools(): void {
  // ... existing tools registration (lines 33-571)

  // Register Galaxy UI tools
  for (const tool of galaxyUITools) {
    this.register(tool);
  }
}
```

**That's it!** Tools are now available in Galaxy CLI's tool registry.

---

## 🔧 Step 3: Update System Prompts

### Location
```
galaxy_cli/source/prompts/universal-agent.ts
```

### Changes needed:

Add Galaxy UI guidance section to the system prompt. Insert after line 19 (where `${toolsContext}` is inserted):

```typescript
export function buildUniversalAgentPrompt(toolsContext: string): string {
  return `You are Galaxy AI - software development expert developed by kevinbui.

# Response Language
**CRITICAL: Always respond in the SAME language as the user's input**

# Available Tools
${toolsContext}

# 🎨 Galaxy UI Components (PRIORITIZE for UI tasks)

When user mentions UI components, forms, or interface elements, **PRIORITIZE using Galaxy UI tools**:

## When to Use Galaxy UI:
✅ User asks for: button, form, input, dialog, calendar, table, etc.
✅ User wants to: "add a component", "create a form", "build UI"
✅ User mentions: "UI library", "component library", "design system"

## Galaxy UI Workflow:
1. **Search first**: Use \`galaxy_ui_search\` to find matching components
   - Example: User says "I need a date picker" → Search "calendar"

2. **Init if needed**: If first time using Galaxy UI → Use \`galaxy_ui_init\`
   - Creates utils, config, directory structure

3. **Add components**: Use \`galaxy_ui_add\` to install components
   - AI adapts code to user's project style
   - Handles React, Vue, Angular automatically

## Important Notes:
- **ALWAYS follow user's actual needs** - Galaxy UI is a priority, not a requirement
- If user explicitly asks for different library (MUI, Ant Design, etc.), use that instead
- Galaxy UI tools work with React, Vue, and Angular
- Components are production-ready and accessible by default

# Planning Workflow (For Complex Projects)
// ... rest of existing prompt
`;
}
```

### Key Points:
- ✅ Prioritizes Galaxy UI for UI-related tasks
- ✅ Still flexible - follows user's actual requests
- ✅ Provides clear guidance on when and how to use tools
- ✅ Explains the workflow (search → init → add)

---

## 📊 Architecture Diagram

```
User Request
    ↓
Galaxy CLI (universal-agent)
    ↓
Checks Available Tools (including Galaxy UI tools)
    ↓
[Galaxy UI Task Detected]
    ↓
1. galaxy_ui_search → Find components from GitHub registry
2. galaxy_ui_init   → Setup project structure (if first time)
3. galaxy_ui_add    → Fetch code + AI adapt + Write files
    ↓
Qwen3-Coder (480b-cloud) ← Adapts code to project style
    ↓
Files Created in User's Project
```

---

## 🎯 Key Advantages of This Approach

### 1. **Zero Core Changes**
- No changes to Galaxy CLI architecture
- Just adding new tools to existing registry
- Uses existing OllamaConnection and tool system

### 2. **Scalable**
- Add more components → Just update registry JSON on GitHub
- No CLI rebuild needed
- Always fetches latest from GitHub

### 3. **AI-Driven**
- Uses Qwen3-Coder for intelligent code adaptation
- Adapts to user's project style automatically
- No rigid templates needed

### 4. **Framework Agnostic**
- Works with React, Vue, Angular
- Auto-detects framework from project
- Same tool interface for all frameworks

### 5. **Lightweight**
- Registry JSON ~50KB per framework
- No package duplication
- Fetches code on-demand

---

## 🧪 Testing the Integration

### Test Case 1: Search Components
```typescript
// User asks: "What calendar components are available?"
// Galaxy AI calls:
{
  tool: 'galaxy_ui_search',
  input: {query: 'calendar', framework: 'react'}
}

// Returns:
{
  success: true,
  components: [
    {name: 'calendar', description: 'Single date picker', framework: 'react'},
    {name: 'calendar-range', description: 'Date range picker', framework: 'react'}
  ]
}
```

### Test Case 2: Add Component
```typescript
// User asks: "Add a button component to my project"
// Galaxy AI calls:
{
  tool: 'galaxy_ui_add',
  input: {component: 'button', workingDirectory: '/path/to/project'}
}

// Process:
// 1. Detects React + TypeScript from package.json
// 2. Fetches button code from GitHub
// 3. Uses Qwen3-Coder to adapt to project style
// 4. Creates: src/components/ui/button/Button.tsx
// 5. Returns: dependencies to install
```

### Test Case 3: Initialize First Time
```typescript
// User asks: "I want to use Galaxy UI in my project"
// Galaxy AI calls:
{
  tool: 'galaxy_ui_init',
  input: {workingDirectory: '/path/to/project'}
}

// Process:
// 1. Creates src/lib/utils.ts
// 2. Creates src/components/ui/ directory
// 3. Creates components.json config
// 4. Returns installation instructions
```

---

## 📝 Implementation Checklist

### Phase 1: Core Implementation
- [ ] Create `galaxy_cli/source/tools/galaxy-ui-operator.ts`
  - [ ] Implement `galaxy_ui_search` tool
  - [ ] Implement `galaxy_ui_add` tool with AI generation
  - [ ] Implement `galaxy_ui_init` tool
  - [ ] Export `galaxyUITools` array

### Phase 2: Registry Integration
- [ ] Update `galaxy_cli/source/tools/registry.ts`
  - [ ] Import `galaxyUITools`
  - [ ] Register tools in `registerAllTools()`

### Phase 3: Prompt Enhancement
- [ ] Update `galaxy_cli/source/prompts/universal-agent.ts`
  - [ ] Add Galaxy UI guidance section
  - [ ] Add workflow instructions
  - [ ] Add prioritization rules

### Phase 4: Testing
- [ ] Test `galaxy_ui_search` with various queries
- [ ] Test `galaxy_ui_init` on React/Vue/Angular projects
- [ ] Test `galaxy_ui_add` with code adaptation
- [ ] Test AI prompt prioritizes Galaxy UI correctly
- [ ] Test flexibility (user can still request other libraries)

---

## 🚀 Example User Interactions

### Example 1: Complete Workflow
```
User: "I want to add a calendar component to my React project"

Galaxy AI thinks:
- UI component request → Check Galaxy UI first
- Calls: galaxy_ui_search({query: 'calendar', framework: 'react'})
- Finds: calendar, calendar-range components

Galaxy AI responds:
"I found 2 calendar components in Galaxy UI:
1. calendar - Single date picker
2. calendar-range - Date range picker

Which one would you like to add?"

User: "The single date picker"

Galaxy AI:
- Calls: galaxy_ui_add({component: 'calendar', framework: 'react'})
- Creates: src/components/ui/calendar/Calendar.tsx
- Adapts code using Qwen3-Coder

Galaxy AI responds:
"✅ Added calendar component to your project!

Files created:
- src/components/ui/calendar/Calendar.tsx

Install dependencies:
  npm install react-day-picker date-fns

Usage:
  import { Calendar } from '@/components/ui/calendar'
"
```

### Example 2: Respects User Choice
```
User: "I want to use Material-UI for this project"

Galaxy AI:
- Recognizes explicit library choice
- Does NOT force Galaxy UI
- Uses appropriate tools for MUI installation

Galaxy AI responds:
"I'll help you set up Material-UI for your project.
Let me install the dependencies..."
```

---

## 🎨 Code Style and Conventions

### Follow Existing Galaxy CLI Patterns:

1. **Tool Structure:**
   ```typescript
   export const toolName: Tool<InputType, OutputType> = {
     name: 'tool_name',
     description: '...',
     inputSchema: { /* ... */ },
     execute: async (input, context) => { /* ... */ }
   }
   ```

2. **Error Handling:**
   ```typescript
   try {
     // Implementation
     return {success: true, ...}
   } catch (error) {
     return {success: false, message: `Error: ${error}`, ...}
   }
   ```

3. **Console Logging:**
   ```typescript
   console.log('📦 Adding button component...');
   console.log('  ✓ Created Button.tsx');
   ```

4. **Use Existing Utilities:**
   ```typescript
   import {OllamaConnection} from '../connections/ollama.js';
   const ollama = new OllamaConnection({model: 'qwen3-coder:480b-cloud'});
   ```

---

## 🔒 Security Considerations

1. **GitHub URL Validation:**
   - Always use official Galaxy UI GitHub repo
   - Validate registry JSON structure before use

2. **File Path Safety:**
   - Use `path.join()` for all path operations
   - Validate working directory exists
   - Use `recursive: true` for `mkdir`

3. **Code Generation Safety:**
   - Sanitize AI-generated code
   - Validate syntax before writing files
   - Log all file operations

---

## 📚 Resources

### Galaxy UI Repository:
- Registry: `packages/cli/src/registries/registry-{framework}.json`
- Components: `packages/{framework}/src/components/`
- Docs: `docs/components/*.md`

### Galaxy CLI:
- Tool Registry: `galaxy_cli/source/tools/registry.ts`
- Prompts: `galaxy_cli/source/prompts/universal-agent.ts`
- Ollama Connection: `galaxy_cli/source/connections/ollama.ts`

---

## ✅ Summary

This integration approach:
- ✅ **Simple**: Only 3 clear steps
- ✅ **Non-invasive**: No core Galaxy CLI changes
- ✅ **Scalable**: Just update GitHub, no CLI rebuild
- ✅ **Intelligent**: AI adapts code to project style
- ✅ **Flexible**: Prioritizes but doesn't force Galaxy UI
- ✅ **Production-ready**: Uses proven Galaxy CLI patterns

**Next:** Implement theo 3 bước này trong Galaxy CLI của bạn! 🚀

---

**Generated:** October 31, 2025
**For:** Galaxy UI + Galaxy CLI Integration
**Approach:** Simple Tool Addition (Your Correct Analysis ✅)
