# Galaxy UI CLI - Multi-Framework Migration Process

> **Major Upgrade**: Migrating from Angular-only to multi-framework support (Vue, React, Angular) with Radix primitives + Tailwind CSS

**Start Date**: 2025-10-30
**Status**: 🚧 In Progress
**Current Phase**: Planning & Research

---

## 🎯 Project Vision

Transform Galaxy UI CLI into a **universal component library** that supports:
- ✅ **Vue.js** (Radix Vue + Tailwind) - Reference: [shadcn-vue](https://www.shadcn-vue.com/)
- ✅ **React** (Radix UI + Tailwind) - Reference: [shadcn/ui](https://ui.shadcn.com/)
- ✅ **Angular** (Radix NG + Tailwind) - Custom implementation based on patterns

**Key Philosophy**: Copy-paste components with Radix primitives for accessibility + Tailwind for styling

---

## 📚 References & Resources

### Radix Primitives
- **Radix UI (React)**: https://www.radix-ui.com/themes/docs/overview/getting-started
- **Radix Vue**: https://www.radix-vue.com/overview/introduction.html
- **Radix NG (Angular)**: https://www.radix-ng.com/primitives/overview/introduction

### shadcn References
- **shadcn/ui (React)**: https://ui.shadcn.com/
- **shadcn-vue (Vue)**: https://www.shadcn-vue.com/docs/introduction.html
- **Angular**: Custom implementation mixing Radix NG + Tailwind patterns

### Documentation
- **VitePress**: https://vitepress.dev/ (for new docs)
- **Current Astro Docs**: Keep for reference, migrate to VitePress

---

## 🗺️ Migration Roadmap

### Phase 1: Foundation & Planning ✅ COMPLETED
**Status**: ✅ Done
**Duration**: -
**Completed**: 2025-10-30

#### Tasks Completed:
- [x] Create PROCESS.md for tracking
- [x] Research Radix primitives for all frameworks
- [x] Document architecture decisions
- [x] Plan component structure

**Deliverables**:
- ✅ PROCESS.md created
- ✅ Architecture documented below

---

### Phase 2: CLI Enhancement 🚧 IN PROGRESS
**Status**: 🚧 In Progress
**Start Date**: 2025-10-30
**Target**: TBD

#### 2.1 Framework Detection & Configuration
- [ ] Update CLI to detect framework from package.json
- [ ] Create `components.json` schema
- [ ] Implement `galaxy-ui init` to generate `components.json`
- [ ] Add framework field to config
- [ ] Support framework-specific component installation

#### 2.2 Registry System Update
- [ ] Separate registries for each framework:
  - `registry-vue.json`
  - `registry-react.json`
  - `registry-angular.json`
- [ ] Update registry loader to use framework-specific registry
- [ ] Add framework validation

#### 2.3 Component Installation Logic
- [ ] Framework-aware file copying
- [ ] Framework-specific dependency installation
- [ ] Path resolution per framework
- [ ] Import statement generation per framework

**Deliverables**:
- [ ] `components.json` schema and generator
- [ ] Updated CLI with framework detection
- [ ] Framework-specific registries
- [ ] Updated `add` command with framework support

---

### Phase 3: Documentation Setup 📝 PENDING
**Status**: ⏸️ Not Started
**Target**: TBD

#### 3.1 VitePress Setup
- [ ] Initialize VitePress in `/docs` folder
- [ ] Configure theme and layout
- [ ] Setup navigation structure
- [ ] Configure build and deployment

#### 3.2 Documentation Structure
```
docs/
├── .vitepress/
│   ├── config.ts
│   └── theme/
├── index.md
├── guide/
│   ├── introduction.md
│   ├── installation.md
│   └── cli-usage.md
├── components/
│   ├── vue/
│   │   ├── alert.md
│   │   ├── button.md
│   │   └── ...
│   ├── react/
│   │   ├── alert.md
│   │   ├── button.md
│   │   └── ...
│   └── angular/
│       ├── alert.md
│       ├── button.md
│       └── ...
└── examples/
```

#### 3.3 Migration from Astro
- [ ] Keep Astro docs for reference
- [ ] Migrate content to VitePress
- [ ] Update navigation
- [ ] Add framework switcher

**Deliverables**:
- [ ] VitePress documentation site
- [ ] Bilingual support (EN/VI)
- [ ] Framework-specific component docs

---

### Phase 4: Vue Components 🟢 PENDING
**Status**: ⏸️ Not Started
**Target**: TBD

Reference: [shadcn-vue](https://www.shadcn-vue.com/)

#### 4.1 Setup Vue Package
- [ ] Create `packages/vue/` structure
- [ ] Install Radix Vue dependencies
- [ ] Setup TypeScript config
- [ ] Setup Tailwind config

#### 4.2 Component Development (Priority Components)
Start with these essential components:

**Form Components** (10):
- [ ] Button
- [ ] Input
- [ ] Select
- [ ] Checkbox
- [ ] Radio Group
- [ ] Switch
- [ ] Slider
- [ ] Label
- [ ] Form
- [ ] Textarea

**Layout Components** (5):
- [ ] Card
- [ ] Separator (Divider)
- [ ] Accordion
- [ ] Tabs
- [ ] Dialog (Modal)

**Feedback Components** (5):
- [ ] Alert
- [ ] Toast
- [ ] Progress
- [ ] Skeleton
- [ ] Badge

**Navigation Components** (5):
- [ ] Dropdown Menu
- [ ] Navigation Menu
- [ ] Breadcrumb
- [ ] Popover
- [ ] Tooltip

**Total Priority**: 25 components

#### 4.3 Vue Registry
- [ ] Create `registry-vue.json`
- [ ] Document all Vue components
- [ ] Add dependencies and peer dependencies

**Deliverables**:
- [ ] `packages/vue/` with 25+ components
- [ ] Vue-specific registry
- [ ] Component documentation
- [ ] Usage examples

---

### Phase 5: React Components ⚛️ PENDING
**Status**: ⏸️ Not Started
**Target**: TBD

Reference: [shadcn/ui](https://ui.shadcn.com/)

#### 5.1 Setup React Package
- [ ] Create `packages/react/` structure
- [ ] Install Radix UI dependencies
- [ ] Setup TypeScript config
- [ ] Setup Tailwind config

#### 5.2 Component Development
Use same 25 priority components as Vue:
- [ ] Form Components (10)
- [ ] Layout Components (5)
- [ ] Feedback Components (5)
- [ ] Navigation Components (5)

#### 5.3 React Registry
- [ ] Create `registry-react.json`
- [ ] Document all React components
- [ ] Add dependencies and peer dependencies

**Deliverables**:
- [ ] `packages/react/` with 25+ components
- [ ] React-specific registry
- [ ] Component documentation
- [ ] Usage examples

---

### Phase 6: Angular Components (Refactor) 🅰️ PENDING
**Status**: ⏸️ Not Started
**Target**: TBD

Reference: [Radix NG](https://www.radix-ng.com/)

#### 6.1 Refactor Existing Components
- [ ] Integrate Radix NG primitives
- [ ] Update to use accessibility features from Radix NG
- [ ] Maintain Tailwind styling
- [ ] Keep Angular Signals pattern

#### 6.2 Component Priority (Refactor existing 43)
Focus on these first:
- [ ] Form Components (12) - Already exist, add Radix NG
- [ ] Layout Components (5) - Already exist, add Radix NG
- [ ] Navigation Components (6) - Already exist, add Radix NG
- [ ] Feedback/Other (10) - Already exist, add Radix NG

#### 6.3 Angular Registry Update
- [ ] Rename to `registry-angular.json`
- [ ] Update with Radix NG dependencies
- [ ] Document accessibility improvements

**Deliverables**:
- [ ] Refactored Angular components with Radix NG
- [ ] Updated registry
- [ ] Migration guide for existing users

---

### Phase 7: Testing & Quality Assurance 🧪 PENDING
**Status**: ⏸️ Not Started
**Target**: TBD

#### 7.1 Component Testing
- [ ] Unit tests for Vue components
- [ ] Unit tests for React components
- [ ] Unit tests for Angular components
- [ ] Accessibility testing (a11y)

#### 7.2 CLI Testing
- [ ] Test framework detection
- [ ] Test component installation (all frameworks)
- [ ] Test dependency installation
- [ ] Test error handling

#### 7.3 Documentation Testing
- [ ] Verify all examples work
- [ ] Test live demos
- [ ] Cross-browser testing

**Deliverables**:
- [ ] Test suites for all frameworks
- [ ] CI/CD pipeline
- [ ] Quality assurance report

---

### Phase 8: Publishing & Deployment 🚀 PENDING
**Status**: ⏸️ Not Started
**Target**: TBD

#### 8.1 NPM Publishing
- [ ] Publish `@galaxy-ui/cli`
- [ ] Publish `@galaxy-ui/vue`
- [ ] Publish `@galaxy-ui/react`
- [ ] Publish `@galaxy-ui/angular`
- [ ] Publish `@galaxy-ui/core`

#### 8.2 Documentation Deployment
- [ ] Deploy VitePress docs to Vercel/Netlify
- [ ] Setup custom domain
- [ ] Configure analytics

#### 8.3 Marketing & Community
- [ ] Create GitHub README with all frameworks
- [ ] Create demo videos
- [ ] Write blog post announcement
- [ ] Share on social media

**Deliverables**:
- [ ] Published npm packages
- [ ] Live documentation site
- [ ] Community engagement

---

## 📐 Architecture Decisions

### components.json Schema

```json
{
  "$schema": "https://galaxy-ui.com/schema.json",
  "framework": "vue" | "react" | "angular",
  "typescript": true,
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "src/assets/styles/global.css",
    "baseColor": "slate",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui"
  }
}
```

### Directory Structure (Multi-Framework)

```
galaxy-ui-cli/
├── packages/
│   ├── vue/              # Vue 3 + Radix Vue components
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── ui/
│   │   │   │   │   ├── button/
│   │   │   │   │   ├── input/
│   │   │   │   │   └── ...
│   │   │   └── lib/
│   │   │       └── utils.ts
│   │   └── package.json
│   ├── react/            # React + Radix UI components
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── ui/
│   │   │   │   │   ├── button/
│   │   │   │   │   ├── input/
│   │   │   │   │   └── ...
│   │   │   └── lib/
│   │   │       └── utils.ts
│   │   └── package.json
│   ├── angular/          # Angular + Radix NG components
│   │   ├── src/
│   │   │   ├── lib/
│   │   │   │   ├── button/
│   │   │   │   ├── input/
│   │   │   │   └── ...
│   │   └── package.json
│   ├── cli/              # CLI tool (framework-agnostic)
│   │   ├── src/
│   │   │   ├── commands/
│   │   │   │   ├── init.ts
│   │   │   │   └── add.ts
│   │   │   ├── utils/
│   │   │   │   ├── detect.ts
│   │   │   │   └── registry.ts
│   │   │   ├── registries/
│   │   │   │   ├── registry-vue.json
│   │   │   │   ├── registry-react.json
│   │   │   │   └── registry-angular.json
│   │   │   └── schemas/
│   │   │       └── components-schema.json
│   │   └── package.json
│   ├── core/             # Shared utilities
│   └── tailwind-preset/  # Shared Tailwind config
├── docs/                 # VitePress documentation (NEW)
│   ├── .vitepress/
│   ├── guide/
│   ├── components/
│   │   ├── vue/
│   │   ├── react/
│   │   └── angular/
│   └── examples/
├── apps/
│   └── docs/            # Old Astro docs (keep for reference)
└── PROCESS.md           # This file
```

### CLI Command Flow

```bash
# Initialize with framework detection
galaxy-ui init
# Detects: Vue 3 from package.json
# Creates: components.json with framework: "vue"
# Installs: Tailwind, Radix Vue, utils

# Add component (framework-aware)
galaxy-ui add button
# Reads: components.json to get framework
# Uses: registry-vue.json
# Copies: packages/vue/src/components/ui/button/*
# To: user's project with configured aliases
```

---

## 🎯 Priority Order

### Immediate (Phase 2): CLI Enhancement
1. Framework detection from package.json
2. components.json generation
3. Framework-specific registries
4. Updated add command

### Short-term (Phase 3-4): Vue + Docs
1. VitePress documentation
2. Vue components (25 priority)
3. Vue registry

### Medium-term (Phase 5-6): React + Angular
1. React components (25 priority)
2. Angular refactor with Radix NG

### Long-term (Phase 7-8): Quality & Launch
1. Testing & QA
2. Publishing & Marketing

---

## 📊 Progress Tracking

### Components Completed

#### Vue Components: 0/25
- [ ] Form: 0/10
- [ ] Layout: 0/5
- [ ] Feedback: 0/5
- [ ] Navigation: 0/5

#### React Components: 0/25
- [ ] Form: 0/10
- [ ] Layout: 0/5
- [ ] Feedback: 0/5
- [ ] Navigation: 0/5

#### Angular Components: 0/43 (Radix NG refactor)
- [ ] Form: 0/12
- [ ] Layout: 0/5
- [ ] Navigation: 0/6
- [ ] Data Display: 0/7
- [ ] Modal & Overlay: 0/9
- [ ] Other: 0/4

### Overall Progress: 0% Complete

---

## 📝 Session Log

### Session 1 - 2025-10-30
**Focus**: Planning & Documentation
- ✅ Created PROCESS.md
- ✅ Defined architecture
- ✅ Researched Radix primitives
- ✅ Planned roadmap

**Next Session**: Start Phase 2 - CLI Enhancement

---

## 🤔 Open Questions & Decisions

### To Decide:
1. **Package naming**: `@galaxy-ui/vue` vs `@galaxy-ui-vue/core`?
2. **Monorepo tool**: Keep Nx or switch to Turborepo?
3. **Component naming**: Keep `g-` prefix or use `ui-` for all frameworks?
4. **Versioning**: Separate versions per framework or unified?

### To Research:
1. Best practices for Radix Vue setup
2. SSR support for all frameworks
3. Tree-shaking optimization
4. Bundle size targets

---

## 💡 Notes & Ideas

- Consider creating a **playground** app for each framework
- Add **Storybook** for component development and testing
- Create **migration guides** for shadcn/shadcn-vue users
- Add **CodeSandbox/StackBlitz** templates
- Consider **Figma design system** for consistency
- Add **dark mode presets** for all frameworks

---

**Last Updated**: 2025-10-30
**Next Review**: TBD
**Maintained By**: Development Team
