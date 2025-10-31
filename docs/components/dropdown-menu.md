# Dropdown Menu

Displays a menu to the user—such as a set of actions or functions—triggered by a button.

<ComponentPreview name="DropdownMenuDemo">
  <template #preview>
    <DemoContainer>
      <DropdownMenuDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="outline">Open</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem>Profile</DropdownMenuItem>
      <DropdownMenuItem>Settings</DropdownMenuItem>
      <DropdownMenuItem>Logout</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
```

```tsx [React]
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

export default function App() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { DropdownMenuComponent } from '@/components/ui/dropdown-menu';
import { ButtonComponent } from '@/components/ui/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DropdownMenuComponent, ButtonComponent],
  template: `
    <ui-dropdown-menu>
      <ui-button trigger variant="outline">Open</ui-button>
      <div content>
        <ui-dropdown-menu-item>Profile</ui-dropdown-menu-item>
        <ui-dropdown-menu-item>Settings</ui-dropdown-menu-item>
        <ui-dropdown-menu-item>Logout</ui-dropdown-menu-item>
      </div>
    </ui-dropdown-menu>
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
npx galaxy-ui@latest add dropdown-menu
```

```bash [pnpm]
pnpm dlx galaxy-ui@latest add dropdown-menu
```

```bash [yarn]
yarn dlx galaxy-ui@latest add dropdown-menu
```

```bash [bun]
bunx galaxy-ui@latest add dropdown-menu
```

:::

## Usage

### Vue

```vue
<script setup lang="ts">
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from '@galaxy-ui/vue'
import { Button } from '@galaxy-ui/vue'
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="outline">Open</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem>Profile</DropdownMenuItem>
      <DropdownMenuItem>Settings</DropdownMenuItem>
      <DropdownMenuItem>Logout</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
```

### React

```tsx
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from '@galaxy-ui/react'
import { Button } from '@galaxy-ui/react'

export default function DropdownMenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
```

### Angular

```typescript
import { Component } from '@angular/core';
import { DropdownMenuComponent, DropdownMenuItemComponent } from '@galaxy-ui/angular';
import { ButtonComponent } from '@galaxy-ui/angular';

@Component({
  selector: 'app-dropdown-menu-demo',
  standalone: true,
  imports: [DropdownMenuComponent, DropdownMenuItemComponent, ButtonComponent],
  template: `
    <ui-dropdown-menu [isOpen]="isOpen" (openChange)="isOpen = $event">
      <ui-button trigger variant="outline" (click)="isOpen = !isOpen">Open</ui-button>
      <div content>
        <ui-dropdown-menu-item>Profile</ui-dropdown-menu-item>
        <ui-dropdown-menu-item>Settings</ui-dropdown-menu-item>
        <ui-dropdown-menu-item>Logout</ui-dropdown-menu-item>
      </div>
    </ui-dropdown-menu>
  `
})
export class DropdownMenuDemoComponent {
  isOpen = false;
}
```
