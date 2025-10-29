# Galaxy UI CLI - Architecture Overview

## Project Setup Summary

### Technology Stack

- **Monorepo Manager**: Nx 22.0.2
- **Package Manager**: Bun 1.3.0
- **Framework**: Angular 20.3.7 (with plans for React & Vue)
- **Styling**: Tailwind CSS (to be configured)
- **Build Tool**: SWC (for TypeScript packages), esbuild (for Angular)
- **Language**: TypeScript 5.9.3

### Workspace Structure

```
galaxy-ui-cli/
├── packages/
│   ├── core/                    # @galaxy-ui-cli/core
│   │   ├── src/
│   │   │   ├── index.ts
│   │   │   └── lib/
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── .swcrc
│   │
│   ├── angular/                 # angular (no prefix)
│   │   ├── src/
│   │   │   ├── index.ts
│   │   │   └── lib/
│   │   ├── project.json
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   ├── cli/                     # @galaxy-ui-cli/cli
│   │   ├── src/
│   │   │   ├── index.ts
│   │   │   └── lib/
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   └── tailwind-preset/         # @galaxy-ui-cli/tailwind-preset
│       ├── src/
│       │   ├── index.ts
│       │   └── lib/
│       ├── package.json
│       └── tsconfig.json
│
├── apps/                        # Future: documentation sites, examples
│
├── tools/                       # Future: custom Nx generators
│
├── nx.json                      # Nx workspace configuration
├── package.json                 # Root package.json with workspaces
├── tsconfig.base.json           # Base TypeScript config
└── bun.lock                     # Bun lockfile
```

## Package Details

### 1. `@galaxy-ui-cli/core`

**Purpose**: Shared utilities, design tokens, types, and helper functions used across all frameworks.

**Key Features**:
- Design tokens (colors, spacing, typography)
- Utility functions (e.g., `cn` for class name merging)
- TypeScript types and interfaces
- Framework-agnostic logic

**Dependencies**: None (pure TypeScript)

**Future Contents**:
```typescript
// packages/core/src/lib/
├── utils/
│   ├── cn.ts              // classnames utility
│   └── colors.ts          // color utilities
├── tokens/
│   ├── colors.ts          // design token: colors
│   ├── spacing.ts         // design token: spacing
│   └── typography.ts      // design token: typography
└── types/
    └── component-config.ts
```

### 2. `angular`

**Purpose**: Angular component implementations with Tailwind CSS.

**Key Features**:
- Standalone Angular components
- SCSS styling with Tailwind classes
- Fully typed with TypeScript
- Copy-paste ready components

**Dependencies**:
- `@angular/core`: ^20.3.7
- `@angular/common`: ^20.3.7
- `@galaxy-ui-cli/core`: workspace:*

**Future Structure**:
```typescript
// packages/angular/src/lib/
├── button/
│   ├── button.component.ts
│   ├── button.component.html
│   ├── button.component.scss
│   └── index.ts
├── card/
├── input/
└── ...
```

### 3. `@galaxy-ui-cli/cli`

**Purpose**: Command-line tool for adding components to user projects.

**Key Features**:
- Framework detection (Angular, React, Vue)
- Interactive prompts
- Component registry management
- File transformation and copying

**Dependencies**:
- `commander`: ^14.0.2 - CLI framework
- `prompts`: ^2.4.2 - Interactive prompts
- `chalk`: ^5.6.2 - Terminal colors
- `ora`: ^9.0.0 - Loading spinners
- `cosmiconfig`: ^9.0.0 - Config file management
- `zod`: ^4.1.12 - Schema validation
- `execa`: ^9.6.0 - Shell command execution
- `tsx`: ^4.20.6 - TypeScript execution

**Commands** (to be implemented):
```bash
galaxy-ui init           # Initialize project configuration
galaxy-ui add <component> # Add component to project
galaxy-ui diff           # Check for component updates (future)
```

**Future Structure**:
```typescript
// packages/cli/src/
├── index.ts                    # CLI entry point (#!/usr/bin/env node)
├── commands/
│   ├── init.ts                 # init command
│   ├── add.ts                  # add command
│   └── diff.ts                 # diff command (future)
├── utils/
│   ├── get-config.ts           # Read components.json
│   ├── detect-framework.ts     # Detect Angular/React/Vue
│   ├── registry.ts             # Fetch component metadata
│   ├── transformers.ts         # Transform code (imports, paths)
│   └── prompts.ts              # Reusable prompts
└── schemas/
    └── config-schema.ts        # Zod schema for components.json
```

### 4. `@galaxy-ui-cli/tailwind-preset`

**Purpose**: Shared Tailwind CSS configuration preset.

**Key Features**:
- Base theme configuration
- Custom color palettes
- Plugin configurations
- Reusable across all frameworks

**Dependencies**:
- `tailwindcss`: (peer dependency)

**Future Structure**:
```typescript
// packages/tailwind-preset/src/
├── index.ts                    # Main preset export
├── colors.ts                   # Color palette
├── animations.ts               # Custom animations
└── plugins.ts                  # Custom plugins
```

## TypeScript Configuration Notes

**Important**: Angular doesn't support TypeScript project references, so we've configured:

1. Root `tsconfig.json`: No `references` field
2. Package `tsconfig.json`: `"composite": false` and direct `include` arrays
3. `tsconfig.lib.json`: Empty `references: []`

This allows Angular and non-Angular packages to coexist in the same monorepo.

## CLI Workflow Design

### User Experience Flow

1. **Initialization**:
   ```bash
   npx galaxy-ui-cli@latest init
   ```
   - Detects framework (Angular/React/Vue)
   - Creates `components.json` config file
   - Optionally installs Tailwind CSS
   - Copies utility functions

2. **Adding Components**:
   ```bash
   npx galaxy-ui-cli@latest add button
   ```
   - Reads `components.json`
   - Fetches component from registry
   - Resolves dependencies
   - Copies files to user's project
   - Transforms imports/paths

3. **Component Registry**:
   - Static JSON files (Phase 1)
   - API endpoint (Phase 2)
   - Component metadata includes:
     - Files to copy
     - Dependencies
     - Framework-specific variations

### Configuration File (`components.json`)

```json
{
  "$schema": "https://galaxy-ui.dev/schema.json",
  "framework": "angular",
  "style": "default",
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "src/styles.css",
    "baseColor": "slate"
  },
  "aliases": {
    "components": "src/components",
    "utils": "src/lib/utils"
  }
}
```

## Multi-Framework Strategy

### Phase 1: Angular (Current)
- Full Angular implementation
- Standalone components
- Tailwind CSS styling

### Phase 2: React Support
- Add `packages/react/`
- CLI auto-detects React projects
- Shares `core` utilities

### Phase 3: Vue Support
- Add `packages/vue/`
- CLI auto-detects Vue projects
- Complete multi-framework support

### Shared Assets
- `@galaxy-ui-cli/core`: Design tokens, utilities
- `@galaxy-ui-cli/tailwind-preset`: Tailwind config
- `@galaxy-ui-cli/cli`: Single CLI for all frameworks

## Development Commands

```bash
# Install dependencies
bun install

# Build all packages
bun nx run-many -t build

# Build specific package
bun nx build @galaxy-ui-cli/core
bun nx build angular
bun nx build @galaxy-ui-cli/cli

# Run CLI locally
cd packages/cli
bun run src/index.ts

# Lint all projects
bun nx run-many -t lint

# View project graph
bun nx graph

# Affected commands (after changes)
bun nx affected -t build
bun nx affected -t lint
```

## Next Steps

### Immediate (Phase 1)
1. ✅ Setup workspace structure
2. ⏳ Implement CLI `init` command
3. ⏳ Implement CLI `add` command
4. ⏳ Create first component (Button)
5. ⏳ Setup static component registry
6. ⏳ Add Tailwind CSS to Angular package

### Short-term (Phase 2)
1. Build 5-10 essential components
2. Create documentation site (possibly Angular app)
3. Add theming system
4. Publish to npm as scoped packages

### Long-term (Phase 3)
1. Add React support
2. Add Vue support
3. Create unified documentation
4. Community contributions

## Publishing Strategy

### NPM Packages

- `@galaxy-ui-cli/core` - Core utilities
- `@galaxy-ui-cli/angular` - Angular components (source code)
- `@galaxy-ui-cli/cli` - CLI tool (main package)
- `@galaxy-ui-cli/tailwind-preset` - Tailwind preset

### Versioning

Using [Nx Release](https://nx.dev/features/manage-releases):
```bash
bun nx release --dry-run
bun nx release
```

## Notes

- Bun is used for speed, but project is compatible with npm/pnpm/yarn
- Nx provides caching and task orchestration
- Angular support is first because you requested it
- Architecture supports easy addition of React/Vue later
