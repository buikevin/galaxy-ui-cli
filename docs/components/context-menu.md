# Context Menu

Displays a menu to the user—such as a set of actions or functions—triggered by right click.

<ComponentPreview name="ContextMenuDemo">
  <template #preview>
    <DemoContainer>
      <ContextMenuDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem } from '@/components/ui/context-menu'
</script>

<template>
  <ContextMenu>
    <ContextMenuTrigger>Right click here</ContextMenuTrigger>
    <ContextMenuContent>
      <ContextMenuItem>Profile</ContextMenuItem>
      <ContextMenuItem>Settings</ContextMenuItem>
      <ContextMenuItem>Logout</ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
</template>
```

```tsx [React]
import { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem } from "@/components/ui/context-menu"

export default function App() {
  return (
    <ContextMenu>
      <ContextMenuTrigger>Right click here</ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Profile</ContextMenuItem>
        <ContextMenuItem>Settings</ContextMenuItem>
        <ContextMenuItem>Logout</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { ContextMenuComponent } from '@/components/ui/context-menu';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ContextMenuComponent],
  template: `
    <ui-context-menu>
      <div trigger>Right click here</div>
      <div content>
        <ui-context-menu-item>Profile</ui-context-menu-item>
        <ui-context-menu-item>Settings</ui-context-menu-item>
        <ui-context-menu-item>Logout</ui-context-menu-item>
      </div>
    </ui-context-menu>
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
npx galaxy-ui-cli@latest add context-menu
```

```bash [pnpm]
pnpm dlx galaxy-ui-cli@latest add context-menu
```

```bash [yarn]
yarn dlx galaxy-ui-cli@latest add context-menu
```

```bash [bun]
bunx galaxy-ui-cli@latest add context-menu
```

:::

## Usage

### Vue

```vue
<script setup lang="ts">
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem
} from '@/components/ui'
</script>

<template>
  <ContextMenu>
    <ContextMenuTrigger>Right click here</ContextMenuTrigger>
    <ContextMenuContent>
      <ContextMenuItem>Profile</ContextMenuItem>
      <ContextMenuItem>Settings</ContextMenuItem>
      <ContextMenuItem>Logout</ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
</template>
```

### React

```tsx
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem
} from '@/components/ui'

export default function ContextMenuDemo() {
  return (
    <ContextMenu>
      <ContextMenuTrigger>Right click here</ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Profile</ContextMenuItem>
        <ContextMenuItem>Settings</ContextMenuItem>
        <ContextMenuItem>Logout</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}
```

### Angular

```typescript
import { Component } from '@angular/core';
import { ContextMenuComponent, ContextMenuItemComponent } from '@/components/ui';

@Component({
  selector: 'app-context-menu-demo',
  standalone: true,
  imports: [ContextMenuComponent, ContextMenuItemComponent],
  template: `
    <ui-context-menu>
      <div trigger>Right click here</div>
      <div content>
        <ui-context-menu-item>Profile</ui-context-menu-item>
        <ui-context-menu-item>Settings</ui-context-menu-item>
        <ui-context-menu-item>Logout</ui-context-menu-item>
      </div>
    </ui-context-menu>
  `
})
export class ContextMenuDemoComponent {}
```
