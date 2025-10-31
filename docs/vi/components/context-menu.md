# Context Menu

Hiển thị menu cho người dùng—chẳng hạn như một tập hợp các hành động hoặc chức năng—được kích hoạt bằng cách nhấp chuột phải.

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

## Cài đặt

::: code-group

```bash [npm]
npx galaxy-ui@latest add context-menu
```

```bash [pnpm]
pnpm dlx galaxy-ui@latest add context-menu
```

```bash [yarn]
yarn dlx galaxy-ui@latest add context-menu
```

```bash [bun]
bunx galaxy-ui@latest add context-menu
```

:::

## Sử dụng

### Vue

```vue
<script setup lang="ts">
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem
} from '@galaxy-ui/vue'
</script>

<template>
  <ContextMenu>
    <ContextMenuTrigger>Nhấp chuột phải vào đây</ContextMenuTrigger>
    <ContextMenuContent>
      <ContextMenuItem>Hồ sơ</ContextMenuItem>
      <ContextMenuItem>Cài đặt</ContextMenuItem>
      <ContextMenuItem>Đăng xuất</ContextMenuItem>
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
} from '@galaxy-ui/react'

export default function ContextMenuDemo() {
  return (
    <ContextMenu>
      <ContextMenuTrigger>Nhấp chuột phải vào đây</ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Hồ sơ</ContextMenuItem>
        <ContextMenuItem>Cài đặt</ContextMenuItem>
        <ContextMenuItem>Đăng xuất</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}
```
