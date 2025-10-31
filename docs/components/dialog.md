# Dialog

A window overlaid on either the primary window or another dialog window.

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
import { ref } from 'vue'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const open = ref(false)
</script>

<template>
  <Dialog v-model:open="open">
    <DialogTrigger as-child>
      <Button variant="default">Open Dialog</Button>
    </DialogTrigger>
    <DialogContent class="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Edit profile</DialogTitle>
        <DialogDescription>
          Make changes to your profile here. Click save when you're done.
        </DialogDescription>
      </DialogHeader>
      <div class="grid gap-4 py-4">
        <div class="grid gap-2">
          <Label for="name">Name</Label>
          <Input id="name" />
        </div>
      </div>
      <DialogFooter>
        <Button type="submit">Save changes</Button>
      </DialogFooter>
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

## Installation

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

## Usage

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

### Angular

```typescript
import { Component } from '@angular/core';
import { DialogComponent } from '@galaxy-ui/angular';

@Component({
  selector: 'app-dialog-demo',
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
export class DialogDemoComponent {
  isOpen = false;
}
```
