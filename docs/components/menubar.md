# Menubar

A visually persistent menu common in desktop applications that provides quick access to a consistent set of commands.

<ComponentPreview name="MenubarDemo">
  <template #preview>
    <DemoContainer>
      <MenubarDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem } from '@/components/ui/menubar'
</script>

<template>
  <Menubar>
    <MenubarMenu>
      <MenubarTrigger>File</MenubarTrigger>
      <MenubarContent>
        <MenubarItem>New</MenubarItem>
        <MenubarItem>Open</MenubarItem>
      </MenubarContent>
    </MenubarMenu>
  </Menubar>
</template>
```

```tsx [React]
import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem } from "@/components/ui/menubar"

export default function App() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>New</MenubarItem>
          <MenubarItem>Open</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { MenubarComponent } from '@/components/ui/menubar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MenubarComponent],
  template: `
    <ui-menubar>
      <ui-menubar-menu>
        <ui-menubar-trigger>File</ui-menubar-trigger>
        <ui-menubar-content>
          <ui-menubar-item>New</ui-menubar-item>
          <ui-menubar-item>Open</ui-menubar-item>
        </ui-menubar-content>
      </ui-menubar-menu>
    </ui-menubar>
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
npx galaxy-ui-cli@latest add menubar
```

```bash [pnpm]
pnpm dlx galaxy-ui-cli@latest add menubar
```

```bash [yarn]
yarn dlx galaxy-ui-cli@latest add menubar
```

```bash [bun]
bunx galaxy-ui-cli@latest add menubar
```

:::

## Usage

### Vue

```vue
<script setup lang="ts">
import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem } from '@/components/ui'
</script>

<template>
  <Menubar>
    <MenubarMenu>
      <MenubarTrigger>File</MenubarTrigger>
      <MenubarContent>
        <MenubarItem>New</MenubarItem>
        <MenubarItem>Open</MenubarItem>
      </MenubarContent>
    </MenubarMenu>
  </Menubar>
</template>
```

### React

```tsx
import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem } from '@/components/ui'

export default function MenubarDemo() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>New</MenubarItem>
          <MenubarItem>Open</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}
```
