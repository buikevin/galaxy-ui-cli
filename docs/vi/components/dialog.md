# Dialog

Cửa sổ phủ lên cửa sổ chính hoặc hộp thoại khác.

<ComponentPreview name="DialogDemo">
  <template #preview>
    <DemoContainer>
      <DialogDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog'
</script>

<template>
  <Dialog>
    <DialogTrigger>Open Dialog</DialogTrigger>
    <DialogContent>
      <DialogTitle>Edit Profile</DialogTitle>
      <DialogDescription>
        Make changes to your profile here.
      </DialogDescription>
    </DialogContent>
  </Dialog>
</template>
```

```tsx [React]
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog"

export default function App() {
  return (
    <Dialog>
      <DialogTrigger>Open Dialog</DialogTrigger>
      <DialogContent>
        <DialogTitle>Edit Profile</DialogTitle>
        <DialogDescription>
          Make changes to your profile here.
        </DialogDescription>
      </DialogContent>
    </Dialog>
  )
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { DialogComponent } from '@/components/ui/dialog';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DialogComponent],
  template: `
    <button (click)="isOpen = true">Open Dialog</button>
    <ui-dialog [isOpen]="isOpen" (openChange)="isOpen = $event">
      <h2>Edit Profile</h2>
      <p>Make changes to your profile here.</p>
    </ui-dialog>
  `
})
export class AppComponent {
  isOpen = false;
}
```

:::

  </template>
</ComponentPreview>

## Cài đặt

::: code-group

```bash [npm]
npx galaxy-ui@latest add dialog
```

```bash [pnpm]
pnpm dlx galaxy-ui@latest add dialog
```

```bash [yarn]
yarn dlx galaxy-ui@latest add dialog
```

```bash [bun]
bunx galaxy-ui@latest add dialog
```

:::

## Sử dụng

### Vue

```vue
<script setup lang="ts">
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription
} from '@galaxy-ui/vue'
</script>

<template>
  <Dialog>
    <DialogTrigger>Mở Dialog</DialogTrigger>
    <DialogContent>
      <DialogTitle>Chỉnh Sửa Hồ Sơ</DialogTitle>
      <DialogDescription>
        Thực hiện thay đổi hồ sơ của bạn tại đây.
      </DialogDescription>
    </DialogContent>
  </Dialog>
</template>
```

### React

```tsx
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription
} from '@galaxy-ui/react'

export default function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger>Mở Dialog</DialogTrigger>
      <DialogContent>
        <DialogTitle>Chỉnh Sửa Hồ Sơ</DialogTitle>
        <DialogDescription>
          Thực hiện thay đổi hồ sơ của bạn tại đây.
        </DialogDescription>
      </DialogContent>
    </Dialog>
  )
}
```

### Angular

```typescript
import { Component } from '@angular/core';
import { DialogComponent } from '@galaxy-ui/angular';

@Component({
  selector: 'app-dialog-demo',
  standalone: true,
  imports: [DialogComponent],
  template: `
    <button (click)="isOpen = true">Mở Dialog</button>
    <ui-dialog [isOpen]="isOpen" (openChange)="isOpen = $event">
      <h2>Chỉnh Sửa Hồ Sơ</h2>
      <p>Thực hiện thay đổi hồ sơ của bạn tại đây.</p>
    </ui-dialog>
  `
})
export class DialogDemoComponent {
  isOpen = false;
}
```
