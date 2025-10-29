# Phase 2 Progress: CLI Enhancement

**Status**: 🚧 In Progress (40% Complete)
**Started**: 2025-10-30

## ✅ Completed Tasks

### 1. Components.json Schema
- [x] Created JSON schema (`packages/cli/src/schemas/components-schema.json`)
- [x] TypeScript interfaces and validation (`packages/cli/src/utils/config-schema.ts`)
- [x] Zod validation schema
- [x] Default configs for Vue, React, Angular

### 2. Config Management Utilities
- [x] Created `components-config.ts` with helpers:
  - `loadComponentsConfig()` - Load and validate components.json
  - `saveComponentsConfig()` - Save configuration
  - `hasComponentsConfig()` - Check if config exists
  - `createComponentsConfig()` - Create default config
  - `getFrameworkFromConfig()` - Get framework from config
  - `updateComponentsConfig()` - Update existing config

### 3. Enhanced Init Command
- [x] Created `init-v2.ts` with multi-framework support
- [x] Framework detection (Vue, React, Angular)
- [x] Interactive configuration prompts
- [x] Framework-specific dependency installation
- [x] Auto-generates components.json
- [x] Creates utility functions (cn helper)

## 🚧 In Progress

### 4. Framework-Specific Registries
Next task: Create separate registries for each framework

**Files to create**:
```
packages/cli/src/registries/
├── registry-vue.json
├── registry-react.json
└── registry-angular.json
```

**Structure for each registry**:
```json
{
  "components": {
    "button": {
      "name": "Button",
      "description": "...",
      "dependencies": ["@radix-ui/react-slot"], // or radix-vue, radix-ng
      "files": ["button.tsx"], // or .vue, .component.ts
      "registryDependencies": []
    }
  }
}
```

## ⏸️ Pending Tasks

### 5. Update Add Command
- [ ] Load framework from components.json
- [ ] Use framework-specific registry
- [ ] Copy framework-appropriate component files
- [ ] Install framework-specific dependencies
- [ ] Handle import path aliases

### 6. Registry Loader Enhancement
- [ ] Update `registry.ts` to load framework-specific registry
- [ ] Add registry validation
- [ ] Error handling for missing registries

### 7. Testing
- [ ] Test init command with Vue project
- [ ] Test init command with React project
- [ ] Test init command with Angular project
- [ ] Test add command with components.json
- [ ] Test --yes flag for CI/CD

## 📊 Progress Breakdown

- **Schema & Types**: ✅ 100%
- **Config Utilities**: ✅ 100%
- **Init Command**: ✅ 100%
- **Registries**: 🚧 0%
- **Add Command**: ⏸️ 0%
- **Testing**: ⏸️ 0%

**Overall Phase 2**: 40% Complete

## 📁 Files Created/Modified

### New Files:
1. `packages/cli/src/schemas/components-schema.json` - JSON schema
2. `packages/cli/src/utils/config-schema.ts` - TypeScript types
3. `packages/cli/src/utils/components-config.ts` - Config utilities
4. `packages/cli/src/commands/init-v2.ts` - New init command

### Next Files to Create:
1. `packages/cli/src/registries/registry-vue.json`
2. `packages/cli/src/registries/registry-react.json`
3. `packages/cli/src/registries/registry-angular.json`
4. Update `packages/cli/src/commands/add.ts`
5. Update `packages/cli/src/utils/registry.ts`

## 🎯 Next Steps

1. **Create Vue Registry**
   - List 25 priority components
   - Define dependencies (Radix Vue packages)
   - File paths for .vue components

2. **Create React Registry**
   - List 25 priority components
   - Define dependencies (Radix UI packages)
   - File paths for .tsx components

3. **Create Angular Registry**
   - Update existing registry
   - Add Radix NG dependencies
   - File paths for .component.ts files

4. **Update Add Command**
   - Read components.json
   - Load appropriate registry
   - Copy framework-specific files

5. **Replace Old Init**
   - Rename `init.ts` to `init-old.ts`
   - Rename `init-v2.ts` to `init.ts`
   - Update imports in `bin.ts`

## 💡 Design Decisions

### Why components.json?
- **Framework detection**: Auto-detects from package.json
- **User preferences**: Base color, icon library, CSS variables
- **Path aliases**: Customizable import paths
- **Future-proof**: Easy to extend with new options

### Why separate registries?
- **Framework-specific dependencies**: Each framework has different Radix packages
- **File extensions**: .vue vs .tsx vs .component.ts
- **Component APIs**: Different prop patterns per framework
- **Maintainability**: Easier to update framework-specific components

### Default Configurations:

**Vue**:
```json
{
  "framework": "vue",
  "tailwind": {
    "css": "src/assets/styles/global.css"
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}
```

**React**:
```json
{
  "framework": "react",
  "tailwind": {
    "css": "src/app/globals.css"
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}
```

**Angular**:
```json
{
  "framework": "angular",
  "tailwind": {
    "css": "src/styles.css"
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}
```

## 📚 References

- **shadcn/ui components.json**: https://ui.shadcn.com/docs/components-json
- **shadcn-vue components.json**: https://www.shadcn-vue.com/docs/components-json.html
- **Radix UI**: https://www.radix-ui.com/
- **Radix Vue**: https://www.radix-vue.com/
- **Radix NG**: https://www.radix-ng.com/

---

**Last Updated**: 2025-10-30
**Next Session**: Create framework-specific registries
