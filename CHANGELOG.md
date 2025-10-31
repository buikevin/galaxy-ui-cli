# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

### ✨ Features

**Angular Components - Complete Radix NG Integration** (21/21 components refactored)

*All Angular components have been refactored to use `@radix-ng/primitives` for proper accessibility and state management.*

**Form Components (8):**
1. **Button** - RdxPrimitiveDirective for flexible rendering with asChild pattern
2. **Label** - RdxLabelDirective for proper form associations and accessibility
3. **Checkbox** - RdxCheckboxRootDirective + RdxCheckboxIndicatorDirective with indeterminate state
4. **Select** - Complete integration with 9 Radix directives (Root, Trigger, Value, Content, Viewport, Item, etc.)
5. **Switch** - RdxSwitchRootDirective + RdxSwitchThumbDirective with smooth animations
6. **Slider** - RdxSliderRootDirective + Track, Range, Thumb directives
7. **Radio Group** - RdxRadioGroupRootDirective + RdxRadioGroupItemDirective
8. **Separator** - RdxSeparatorDirective for horizontal/vertical dividers

**Layout Components (3):**
9. **Tabs** - RdxTabsRootDirective + List, Trigger, Content directives with data-[state] styling
10. **Accordion** - RdxAccordionRootDirective + Item, Trigger, Content directives
11. **Collapsible** - RdxCollapsibleRootDirective + Trigger, Content directives

**Navigation Components (4):**
12. **Dropdown Menu** - 5 sub-components with Root, Trigger, Content, Item, Separator directives
13. **Hover Card** - RdxHoverCardRootDirective with openDelay/closeDelay support
14. **Menubar** - 5 sub-components with Root, Trigger, Content, Item, Separator directives
15. **Navigation Menu** - 8 sub-components including Root, List, Item, Trigger, Content, Link, Viewport, Indicator

**Modal & Overlay Components (5):**
16. **Tooltip** - RdxTooltipRootDirective + Trigger, Content, Arrow with portal support
17. **Dialog** - 5 sub-components with Portal, Overlay, Content, Title, Description directives
18. **Popover** - RdxPopoverRootDirective + Trigger, Content, Arrow with positioning
19. **Alert Dialog** - 8 sub-components with full accessibility support
20. **Context Menu** - 4 sub-components with Root, Trigger, Content, Item directives

**Other Components (1):**
21. **Avatar** - RdxAvatarRootDirective + Image, Fallback with automatic fallback handling

**Key Improvements:**
- Automatic WAI-ARIA attributes for all interactive components
- Proper keyboard navigation (Tab, Arrow keys, Enter, Escape)
- Enhanced screen reader support with live regions
- data-[state] and data-[disabled] CSS selectors for dynamic styling
- Automatic focus management and focus trap for modals
- Portal support for overlays (tooltips, popovers, dialogs)
- Collision detection and positioning for floating elements
- OnPush change detection strategy for performance

**Note:** Input and Textarea components don't use Radix primitives as they're native HTML form controls with proper ControlValueAccessor implementation.

### 🐛 Bug Fixes

**CLI Tool Improvements**
- Fixed `files.ts` not being compiled during build
- Fixed package manager detection to properly use full bun path (`~/.bun/bin/bun`)
- Fixed `installDependencies` function signature in init.ts and add.ts
- Fixed component file copying to read from actual source packages instead of placeholders
- Fixed registry configurations to include all component files (main component, variants.ts, index.ts)
- Fixed case-sensitive file name detection (Button.vue vs button.vue)
- Added `@radix-ng/primitives` as dependency for Angular init command

**Package Manager Support**
- Enhanced bun detection to check multiple possible paths
- Proper bun path resolution in `package-manager.ts`
- Fixed command execution to use full executable paths

**Component Registry**
- Updated Vue registry to include Button.vue, variants.ts, and index.ts
- Updated React registry to include Button.tsx, variants.ts, and index.ts
- Updated Angular registry to include button.component.ts, variants.ts, and index.ts
- Added Label component to Angular registry
- Updated all Angular components to declare `@radix-ng/primitives` dependency

### ✅ Testing Completed

**Vue Example**
- ✅ CLI init command working
- ✅ CLI add command successfully copies components
- ✅ Button component with all 3 files (Button.vue, variants.ts, index.ts)
- ✅ Input component copied successfully
- ✅ Dependencies installed automatically

**React Example**
- ✅ CLI init command working
- ✅ CLI add command successfully copies components
- ✅ Button component with all 3 files (Button.tsx, variants.ts, index.ts)
- ✅ Input component copied successfully
- ✅ Dependencies installed automatically

**Angular Example**
- ✅ CLI init command working (with @radix-ng/primitives)
- ✅ CLI add command successfully copies components
- ✅ Button component with all 3 files (button.component.ts, variants.ts, index.ts)
- ✅ Label, Checkbox components with Radix NG integration
- ✅ Select component with full Radix NG primitives
- ✅ Dependencies (@radix-ng/primitives) installed automatically

## [1.0.0] - 2025-10-30

### 🎉 Initial Release

Complete multi-framework component library with Vue, React, and Angular support.

### ✨ Features

#### Multi-Framework Support
- **23 Production-Ready Components** across all 3 frameworks
- **Vue 3** - Composition API with `<script setup>`
- **React 18+** - Hooks with forwardRef pattern
- **Angular 20** - Standalone components with Signals

#### Component Library
**Form Components (9)**
- Button, Label, Input, Checkbox, Radio Group, Switch, Select, Slider, Textarea

**Layout Components (4)**
- Separator, Tabs, Accordion, Collapsible

**Navigation Components (7)**
- Context Menu, Dropdown Menu, Hover Card, Menubar, Navigation Menu, Popover, Tooltip

**Modal & Overlay Components (2)**
- Alert Dialog, Dialog

**Other Components (1)**
- Avatar

#### CLI Tool
- **`galaxy-ui init`** - Framework auto-detection, dependency installation
- **`galaxy-ui add`** - Component installation with registry system
- **Framework Support** - Vue, React, Angular detection from package.json
- **Package Manager Support** - npm, pnpm, yarn, bun detection

#### Design System
- **Radix Primitives** - Accessible components for Vue and React
- **Radix NG** - Angular primitives integration
- **Tailwind CSS** - Utility-first styling with full customization
- **Dark Mode** - First-class dark theme support
- **TypeScript** - Full type safety across all frameworks

#### Documentation
- **VitePress** - Modern documentation site
- **Bilingual** - English and Vietnamese support
- **46 Pages** - Complete component documentation (23 EN + 23 VI)
- **Usage Examples** - Code samples for all 3 frameworks

### 📦 Packages

- `@galaxy-ui/vue` - 23 Vue 3 components
- `@galaxy-ui/react` - 23 React components
- `@galaxy-ui/angular` - 23 Angular components
- `@galaxy-ui/cli` - CLI tool (init, add commands)
- `@galaxy-ui/core` - Shared utilities
- `@galaxy-ui/tailwind-preset` - Tailwind configuration

### 🏗️ Architecture

**Monorepo Structure**
- Nx workspace with Bun package manager
- TypeScript strict mode
- ESLint + Prettier configuration
- Consistent build and test setup

**Component Patterns**
- Radix primitives for accessibility
- Class Variance Authority (CVA) for variants
- `cn()` utility for className merging
- Framework-specific registries

### 📊 Statistics

- **Components**: 23 Tier-1 components
- **Implementations**: 69 (23 × 3 frameworks)
- **Code**: ~11,000 lines
- **Documentation**: 46 pages
- **Files Created**: 210+

### 🎯 Philosophy

**Copy-Paste Components**
- Components copied directly into projects
- Full code ownership
- No npm dependencies for components
- Complete customization control

**Developer Experience**
- Framework auto-detection
- Type-safe with full TypeScript support
- Consistent API across frameworks
- Beautiful terminal UI

**Accessibility**
- WAI-ARIA compliant
- Keyboard navigation
- Screen reader support
- Built on Radix primitives

### 💡 Inspiration

- **[shadcn/ui](https://ui.shadcn.com/)** - Copy-paste philosophy
- **[shadcn-vue](https://www.shadcn-vue.com/)** - Vue implementation
- **[Radix UI](https://www.radix-ui.com/)** - Accessible primitives
- **[Radix Vue](https://www.radix-vue.com/)** - Vue primitives
- **[Radix NG](https://github.com/radix-ng/primitives)** - Angular primitives

### 🔧 Technical Stack

- **Vue 3.5** - Composition API, `<script setup>`
- **React 18** - Hooks, forwardRef
- **Angular 20** - Standalone components, Signals
- **TypeScript 5.9** - Strict mode
- **Tailwind CSS 3.4** - Utility-first styling
- **VitePress** - Documentation framework
- **Nx** - Monorepo tooling
- **Bun** - Package manager

### 📄 License

MIT © 2025 Bùi Trọng Hiếu (kevinbui)

### 👤 Author

**Bùi Trọng Hiếu (kevinbui)**
- GitHub: [@buikevin](https://github.com/buikevin)
- Email: kevinbui210191@gmail.com

### 🔗 Links

- **Repository**: https://github.com/buikevin/galaxy-ui-cli
- **Documentation**: [Coming Soon]
- **npm Package**: [Coming Soon]

---

**Built with ❤️ using Vue, React, Angular, TypeScript, and Tailwind CSS**
