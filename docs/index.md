---
layout: home

hero:
  name: Galaxy UI
  text: Universal Component Library
  tagline: Beautiful, accessible components for Vue, React, and Angular with Radix primitives + Tailwind CSS
  image:
    src: /logo.svg
    alt: Galaxy UI
  actions:
    - theme: brand
      text: Get Started
      link: /guide/introduction
    - theme: alt
      text: View Components
      link: /components/overview
    - theme: alt
      text: GitHub
      link: https://github.com/buikevin/galaxy-ui-cli

features:
  - icon: 🎨
    title: Multi-Framework Support
    details: Build with Vue 3, React, or Angular. Same beautiful components, different frameworks.

  - icon: ♿
    title: Accessible by Default
    details: Built on Radix primitives with ARIA support, keyboard navigation, and focus management.

  - icon: 🎭
    title: Customizable
    details: Styled with Tailwind CSS. Easy to customize and extend to match your brand.

  - icon: 📦
    title: Copy-Paste Components
    details: Own your code. No npm dependencies. Copy components directly into your project.

  - icon: 🌙
    title: Dark Mode
    details: First-class dark mode support with easy theme customization.

  - icon: 🚀
    title: Developer Experience
    details: CLI tool for easy installation. TypeScript support. Modern tooling.

  - icon: 🔧
    title: Radix Primitives
    details: Built on Radix Vue, Radix UI, and Radix NG for rock-solid accessibility.

  - icon: 📱
    title: Responsive
    details: Mobile-first design that works beautifully on all screen sizes.

  - icon: 🌐
    title: i18n Ready
    details: Bilingual documentation (English/Vietnamese) and internationalization support.
---

## Quick Start

<div class="language-bash"><pre><code><span class="line"><span style="color:#676E95;"># Install the CLI</span></span>
<span class="line"><span style="color:#A6ACCD;">npm install -g @galaxy-ui/cli</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Initialize in your project</span></span>
<span class="line"><span style="color:#A6ACCD;">galaxy-ui init</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Add components</span></span>
<span class="line"><span style="color:#A6ACCD;">galaxy-ui add button input card</span></span>
</code></pre></div>

## Framework Support

::: code-group

```vue [Vue 3]
<script setup lang="ts">
import { Button } from '@/components/ui/button'
</script>

<template>
  <Button variant="default">Click me</Button>
</template>
```

```tsx [React]
import { Button } from "@/components/ui/button"

export default function App() {
  return <Button variant="default">Click me</Button>
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { ButtonComponent } from '@/components/ui/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonComponent],
  template: `<ui-button variant="default">Click me</ui-button>`
})
export class AppComponent {}
```

:::

## Why Galaxy UI?

### 🎯 Framework Agnostic
Choose your favorite framework. We support Vue 3, React, and Angular with the same beautiful components.

### 🔓 You Own The Code
Unlike npm packages, you copy the component code directly into your project. Modify it as you need. No version conflicts.

### ♿ Accessibility First
Built on battle-tested Radix primitives. WCAG compliant out of the box.

### 🎨 Fully Customizable
Every component uses Tailwind CSS. Easy to customize colors, spacing, and styles to match your brand.

## Inspired By The Best

Galaxy UI stands on the shoulders of giants:

- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible React components
- **[Radix Vue](https://www.radix-vue.com/)** - Radix primitives for Vue
- **[Radix NG](https://www.radix-ng.com/)** - Radix primitives for Angular
- **[shadcn/ui](https://ui.shadcn.com/)** - Copy-paste React components
- **[shadcn-vue](https://www.shadcn-vue.com/)** - Copy-paste Vue components
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework

## Ready to get started?

<div style="margin-top: 2rem;">
  <a href="/guide/introduction" style="display: inline-block; padding: 0.75rem 1.5rem; background: #3b82f6; color: white; border-radius: 0.5rem; text-decoration: none; font-weight: 600; margin-right: 1rem;">
    Get Started →
  </a>
  <a href="/components/overview" style="display: inline-block; padding: 0.75rem 1.5rem; border: 1px solid #e5e7eb; border-radius: 0.5rem; text-decoration: none; font-weight: 600;">
    Browse Components
  </a>
</div>
