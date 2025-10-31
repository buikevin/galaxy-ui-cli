# 🌌 Galaxy UI CLI

> Beautiful, accessible components for Vue, React, and Angular with Radix primitives + Tailwind CSS

[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue.svg)](https://www.typescriptlang.org/)
[![Vue](https://img.shields.io/badge/Vue-3.5-42b883.svg)](https://vuejs.org/)
[![React](https://img.shields.io/badge/React-18+-61dafb.svg)](https://reactjs.org/)
[![Angular](https://img.shields.io/badge/Angular-20-red.svg)](https://angular.io/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8.svg)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## ✨ Features

- 🎨 **23 Production-Ready Components** - Complete component library across 3 frameworks
- 🎯 **Multi-Framework** - Vue 3, React 18+, and Angular 20 support
- 📋 **Copy-Paste Philosophy** - Own your code, no npm dependencies for components
- ♿ **Accessible** - Built on Radix primitives (WAI-ARIA compliant, keyboard navigation)
- 🌙 **Dark Mode** - First-class dark theme support with CSS variables
- ⚡ **Modern Stack** - Latest versions with TypeScript strict mode
- 🎨 **Tailwind CSS** - Utility-first styling with customization
- 📱 **Responsive** - Mobile-first responsive design
- 🚀 **CLI Tool** - Simple init and add commands with auto-detection

## 🚀 Quick Start

### Prerequisites

Before you begin, make sure you have:

- **Node.js 18+** installed
- A **Vue 3**, **React 18+**, or **Angular 20** project
- **Tailwind CSS** configured in your project

### Installation

You don't need to install Galaxy UI CLI globally. You can use it directly with your preferred package manager:

```bash
# npm
npx galaxy-ui@latest init

# pnpm
pnpm dlx galaxy-ui@latest init

# yarn
yarn dlx galaxy-ui@latest init

# bun
bunx galaxy-ui@latest init
```

### Add Components

After initialization, add components to your project:

```bash
# npm
npx galaxy-ui@latest add button

# pnpm
pnpm dlx galaxy-ui@latest add button

# yarn
yarn dlx galaxy-ui@latest add button

# bun
bunx galaxy-ui@latest add button
```

### Add Multiple Components

```bash
# Add multiple components at once
npx galaxy-ui@latest add button input dialog

# Or use the shorthand with global installation
npm install -g @galaxy-ui-cli/cli
galaxy-ui add button input select
```

### Tailwind CSS Setup

Galaxy UI requires Tailwind CSS. If you haven't set it up yet:

```bash
# npm
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# pnpm
pnpm add -D tailwindcss postcss autoprefixer
pnpm dlx tailwindcss init -p

# yarn
yarn add -D tailwindcss postcss autoprefixer
yarn dlx tailwindcss init -p

# bun
bun add -D tailwindcss postcss autoprefixer
bunx tailwindcss init -p
```

### What the Init Command Does

The `galaxy-ui init` command will:

1. ✅ Detect your framework (Vue, React, or Angular)
2. ✅ Create `components.json` configuration file
3. ✅ Set up the `components/ui` directory
4. ✅ Configure path aliases (`@/components`, `@/lib/utils`)
5. ✅ Install required dependencies (@radix-ng/primitives for Angular)
6. ✅ Set up Tailwind CSS integration with design tokens

## 📦 Components (23)

All components work identically across **Vue 3**, **React 18+**, and **Angular 20** with full Radix primitives integration:

### 📝 Form Components (9)

| Component | Description | Radix Primitive |
|-----------|-------------|-----------------|
| **Button** | Versatile button with 6 variants and 5 sizes | ✅ RdxPrimitive |
| **Label** | Accessible form labels with proper associations | ✅ RdxLabel |
| **Input** | Text input with ControlValueAccessor (Angular) | Native HTML |
| **Checkbox** | Checkbox with indeterminate state | ✅ RdxCheckbox |
| **Radio Group** | Radio button groups with keyboard navigation | ✅ RdxRadioGroup |
| **Switch** | Toggle switch with smooth animation | ✅ RdxSwitch |
| **Select** | Dropdown select with full accessibility | ✅ RdxSelect |
| **Slider** | Range slider with min/max/step | ✅ RdxSlider |
| **Textarea** | Multi-line text input | Native HTML |

### 📐 Layout Components (4)

| Component | Description | Radix Primitive |
|-----------|-------------|-----------------|
| **Separator** | Horizontal/vertical visual divider | ✅ RdxSeparator |
| **Tabs** | Tabbed interface with data-[state] styling | ✅ RdxTabs |
| **Accordion** | Collapsible sections with animations | ✅ RdxAccordion |
| **Collapsible** | Single collapsible section | ✅ RdxCollapsible |

### 🧭 Navigation Components (7)

| Component | Description | Radix Primitive |
|-----------|-------------|-----------------|
| **Context Menu** | Right-click contextual menu | ✅ RdxContextMenu |
| **Dropdown Menu** | Click-triggered dropdown menu | ✅ RdxDropdownMenu |
| **Hover Card** | Preview card on hover with delay | ✅ RdxHoverCard |
| **Menubar** | Application menu bar (File, Edit, etc.) | ✅ RdxMenubar |
| **Navigation Menu** | Complex site navigation with indicators | ✅ RdxNavigationMenu |
| **Popover** | Floating content with positioning | ✅ RdxPopover |
| **Tooltip** | Hover tooltip with portal support | ✅ RdxTooltip |

### 🔲 Modal & Overlay Components (2)

| Component | Description | Radix Primitive |
|-----------|-------------|-----------------|
| **Alert Dialog** | Confirmation dialog with focus trap | ✅ RdxAlertDialog |
| **Dialog** | Modal dialog with overlay and portal | ✅ RdxDialog |

### 🎨 Other Components (1)

| Component | Description | Radix Primitive |
|-----------|-------------|-----------------|
| **Avatar** | User avatar with automatic fallback | ✅ RdxAvatar |

> **Note**: All 21 components using Radix primitives have full WAI-ARIA support, keyboard navigation, and screen reader compatibility. Input and Textarea are native HTML controls with proper form integration.

## 💡 Philosophy

Galaxy UI CLI follows the **copy-paste component** approach:

- ✅ Components are **copied directly** into your project
- ✅ You have **full ownership** of the code
- ✅ **Complete control** to customize as needed
- ✅ **No version conflicts** or dependency issues
- ✅ Built with **Tailwind CSS** + **Radix primitives**

## 🎨 Design System

Built on industry-standard accessible design systems:

- **Radix UI** (React) - Unstyled, accessible components for React
- **Radix Vue** (Vue 3) - Vue port of Radix UI primitives
- **Radix NG** (Angular) - Angular primitives with full WAI-ARIA support
- **shadcn/ui** inspired - Copy-paste philosophy and beautiful design
- **Tailwind CSS 3.4** - Utility-first styling with CSS variables

### Angular Radix NG Integration

All 21 Angular components using Radix primitives include:

- ✅ **Full WAI-ARIA compliance** - Automatic ARIA attributes
- ✅ **Keyboard navigation** - Tab, Arrow keys, Enter, Escape support
- ✅ **Screen reader support** - Live regions and announcements
- ✅ **Focus management** - Automatic focus trap for modals
- ✅ **Portal support** - Floating elements render in document body
- ✅ **Collision detection** - Smart positioning for overlays
- ✅ **OnPush strategy** - Optimized change detection

## 📚 Documentation

Full documentation available at: *[Coming Soon]*

- [Getting Started](docs/guide/introduction.md)
- [Installation](docs/guide/installation.md)
- [Components](docs/components/)

## 📖 Usage Examples

### Vue 3

```vue
<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ref } from 'vue'

const email = ref('')
</script>

<template>
  <div>
    <Input v-model="email" placeholder="Email" />
    <Button variant="default">Submit</Button>
  </div>
</template>
```

### React

```tsx
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'

export default function Example() {
  const [email, setEmail] = useState('')

  return (
    <div>
      <Input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <Button variant="default">Submit</Button>
    </div>
  )
}
```

### Angular

```typescript
import { Component } from '@angular/core';
import { ButtonComponent } from '@/components/ui/button';
import { InputComponent } from '@/components/ui/input';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [ButtonComponent, InputComponent],
  template: `
    <div>
      <ui-input [(ngModel)]="email" placeholder="Email" />
      <ui-button variant="default">Submit</ui-button>
    </div>
  `
})
export class ExampleComponent {
  email = '';
}
```

## 🛠️ Development

This is an Nx monorepo managed with Bun.

### Development Prerequisites

- Node.js 18+
- Bun (recommended) or npm/pnpm/yarn

### Development Setup

```bash
# Clone repository
git clone https://github.com/buikevin/galaxy-ui-cli
cd galaxy-ui-cli

# Install dependencies
bun install

# Build all packages
bun nx run-many -t build

# Build specific package
bun nx build cli
bun nx build vue
bun nx build react
bun nx build angular

# Run documentation site
cd docs
bun run dev
```

## 📦 Packages

| Package | Description | Status |
|---------|-------------|--------|
| `@galaxy-ui/vue` | 23 Vue 3 components | ✅ Complete |
| `@galaxy-ui/react` | 23 React components | ✅ Complete |
| `@galaxy-ui/angular` | 23 Angular components | ✅ Complete |
| `@galaxy-ui/cli` | CLI tool (init, add commands) | ✅ Complete |
| `@galaxy-ui/core` | Shared utilities | ✅ Complete |
| `@galaxy-ui/tailwind-preset` | Tailwind configuration | ✅ Complete |

## 🗺️ Roadmap

### ✅ Phase 1: Foundation (Complete)
- ✅ Nx monorepo setup
- ✅ Package structure
- ✅ Multi-framework architecture

### ✅ Phase 2: CLI Tool (Complete)
- ✅ `galaxy-ui init` command
- ✅ `galaxy-ui add` command
- ✅ Framework auto-detection
- ✅ Package manager detection

### ✅ Phase 3: Components (Complete)
- ✅ 23 Tier-1 components
- ✅ Vue 3 implementations
- ✅ React 18+ implementations
- ✅ Angular 20 implementations
- ✅ Full TypeScript support
- ✅ Radix primitives integration

### ✅ Phase 4: Documentation (Complete)
- ✅ VitePress documentation site
- ✅ Bilingual support (English/Vietnamese)
- ✅ Component documentation
- ✅ Usage examples

### 🚧 Phase 5: Testing (In Progress)
- ⏸️ Unit tests for all components
- ⏸️ Integration tests
- ⏸️ E2E tests

### 🔮 Phase 6: Publishing (Future)
- ⏸️ npm package publishing
- ⏸️ Documentation site deployment
- ⏸️ CI/CD setup

## 📊 Project Stats

- **Components**: 23 production-ready components
- **Frameworks**: 3 (Vue 3, React 18+, Angular 20)
- **Total Implementations**: 69 (23 × 3 frameworks)
- **Radix Integration**: 21/23 components (91% coverage)
  - Vue: Radix Vue primitives
  - React: Radix UI primitives
  - Angular: Radix NG primitives (@radix-ng/primitives@0.50.0)
- **Lines of Code**: ~11,000+ across all packages
- **Documentation**: 46 pages (23 EN + 23 VI) in VitePress
- **CLI**: ✅ Fully functional (init & add commands)
- **Build Status**: ✅ All examples compile successfully
- **Status**: Production-ready

## 🤝 Contributing

Contributions are welcome!

### How to Contribute

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 💡 Inspiration

- **[shadcn/ui](https://ui.shadcn.com/)** - Copy-paste philosophy and design
- **[shadcn-vue](https://www.shadcn-vue.com/)** - Vue implementation
- **[Radix UI](https://www.radix-ui.com/)** - Accessible primitives
- **[Radix Vue](https://www.radix-vue.com/)** - Vue primitives
- **[Radix NG](https://github.com/radix-ng/primitives)** - Angular primitives

## 📄 License

MIT © 2025 Bùi Trọng Hiếu (kevinbui)

## 👤 Author

**Bùi Trọng Hiếu (kevinbui)**
- GitHub: [@buikevin](https://github.com/buikevin)
- Email: kevinbui210191@gmail.com

## 🔗 Links

- **Repository**: https://github.com/buikevin/galaxy-ui-cli
- **Documentation**: [Coming Soon]
- **npm Package**: [Coming Soon]
- **Changelog**: See [CHANGELOG.md](CHANGELOG.md)

---

**Built with ❤️ using Vue, React, Angular, TypeScript, and Tailwind CSS**
