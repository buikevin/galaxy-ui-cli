# Navigation Menu

A collection of links for navigating websites.

<ComponentPreview name="NavigationMenuDemo">
  <template #preview>
    <DemoContainer>
      <NavigationMenuDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from '@/components/ui/navigation-menu'
</script>

<template>
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
        <NavigationMenuContent>
          <NavigationMenuLink href="/docs/installation">
            Installation
          </NavigationMenuLink>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
</template>
```

```tsx [React]
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from "@/components/ui/navigation-menu"

export default function App() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink href="/docs/installation">
              Installation
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { NavigationMenuComponent } from '@/components/ui/navigation-menu';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavigationMenuComponent],
  template: `
    <ui-navigation-menu>
      <a href="/docs">Documentation</a>
      <a href="/components">Components</a>
      <a href="/examples">Examples</a>
    </ui-navigation-menu>
  `
})
export class AppComponent {}
```

:::

  </template>
</ComponentPreview>

## Installation

::: code-group

```bash [npm]
npx galaxy-ui@latest add navigation-menu
```

```bash [pnpm]
pnpm dlx galaxy-ui@latest add navigation-menu
```

```bash [yarn]
yarn dlx galaxy-ui@latest add navigation-menu
```

```bash [bun]
bunx galaxy-ui@latest add navigation-menu
```

:::

## Usage

### Vue

```vue
<script setup lang="ts">
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink
} from '@galaxy-ui/vue'
</script>

<template>
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
        <NavigationMenuContent>
          <NavigationMenuLink href="/docs/installation">
            Installation
          </NavigationMenuLink>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
</template>
```

### React

```tsx
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink
} from '@galaxy-ui/react'

export default function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink href="/docs/installation">
              Installation
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
```

### Angular

```typescript
import { Component } from '@angular/core';
import { NavigationMenuComponent } from '@galaxy-ui/angular';

@Component({
  selector: 'app-navigation-menu-demo',
  standalone: true,
  imports: [NavigationMenuComponent],
  template: `
    <ui-navigation-menu>
      <a href="/docs">Documentation</a>
      <a href="/components">Components</a>
      <a href="/examples">Examples</a>
    </ui-navigation-menu>
  `
})
export class NavigationMenuDemoComponent {}
```
