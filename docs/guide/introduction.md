# Introduction

Welcome to **Galaxy UI** - a universal component library that brings beautiful, accessible components to Vue, React, and Angular.

## What is Galaxy UI?

Galaxy UI is a collection of re-usable components built on top of **Radix primitives** and styled with **Tailwind CSS**. Unlike traditional component libraries, Galaxy UI follows the **copy-paste** philosophy pioneered by [shadcn/ui](https://ui.shadcn.com/).

### Key Features

- **🎨 Multi-Framework** - Support for Vue 3, React, and Angular
- **♿ Accessible** - Built on Radix primitives with ARIA support
- **🎭 Customizable** - Tailwind CSS for easy styling
- **📦 Copy-Paste** - Own your code, no npm dependencies
- **🌙 Dark Mode** - First-class dark theme support
- **🚀 CLI Tool** - Easy installation with `galaxy-ui` command
- **📱 Responsive** - Mobile-first design
- **🔧 TypeScript** - Full type safety

## Why Copy-Paste?

### Traditional Libraries

```bash
npm install some-ui-library
```

**Problems:**
- ❌ Version conflicts
- ❌ Bundle size bloat
- ❌ Limited customization
- ❌ Breaking changes in updates

### Galaxy UI Approach

```bash
galaxy-ui-cli add button
```

**Benefits:**
- ✅ Full code ownership
- ✅ Complete customization
- ✅ No version conflicts
- ✅ Tree-shaking friendly

## Framework Support

Galaxy UI provides the same beautiful components across three major frameworks:

### Vue 3

Built with **[Radix Vue](https://www.radix-vue.com/)** primitives.

```vue
<script setup lang="ts">
import { Button } from '@/components/ui/button'
</script>

<template>
  <Button>Click me</Button>
</template>
```

### React

Built with **[Radix UI](https://www.radix-ui.com/)** primitives.

```tsx
import { Button } from "@/components/ui/button"

export default function App() {
  return <Button>Click me</Button>
}
```

### Angular

Built with **[Radix NG](https://www.radix-ng.com/)** primitives.

```typescript
import { ButtonComponent } from '@/components/ui/button';

@Component({
  template: `<ui-button>Click me</ui-button>`
})
export class AppComponent {}
```

## How It Works

1. **Initialize** your project with `galaxy-ui-cli init`
2. **Add** components you need with `galaxy-ui-cli add [component]`
3. **Customize** the copied code as needed
4. **Ship** your application

```bash
# Step 1: Initialize
galaxy-ui-cli init

# Step 2: Add components
galaxy-ui-cli add button input card

# Step 3: Use in your app
# Components are now in your src/components/ui folder
```

## Architecture

Galaxy UI is built on three pillars:

### 1. Radix Primitives

Unstyled, accessible components that handle:
- ♿ Accessibility (ARIA attributes)
- ⌨️ Keyboard navigation
- 🎯 Focus management
- 📱 Touch/mouse interactions

### 2. Tailwind CSS

Utility-first CSS framework for:
- 🎨 Styling components
- 🌙 Dark mode
- 📱 Responsive design
- 🎭 Easy customization

### 3. Framework Wrappers

Thin wrappers around Radix primitives:
- Vue 3 composables
- React hooks
- Angular services

## Philosophy

### Own Your Code

When you use Galaxy UI, you're not installing a black-box package. You're copying well-tested, production-ready code into your project.

### Customize Without Limits

Every component is just TypeScript/JavaScript and Tailwind classes. Modify anything:
- Change colors, spacing, borders
- Add or remove features
- Integrate with your state management
- Adapt to your design system

### Learn By Reading

The best way to learn is by reading code. With Galaxy UI, every component's source is in your project. Learn how things work!

## What's Next?

Ready to get started? Follow our installation guide:

→ [Installation Guide](./installation)

## Credits

Galaxy UI is inspired by and built upon the work of:

- **[Radix UI](https://www.radix-ui.com/)** - Unstyled React primitives
- **[Radix Vue](https://www.radix-vue.com/)** - Vue port of Radix UI
- **[Radix NG](https://www.radix-ng.com/)** - Angular port of Radix UI
- **[shadcn/ui](https://ui.shadcn.com/)** - Copy-paste React components
- **[shadcn-vue](https://www.shadcn-vue.com/)** - Copy-paste Vue components
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS
