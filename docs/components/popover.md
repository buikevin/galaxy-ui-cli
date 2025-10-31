# Popover

Displays rich content in a portal, triggered by a button.

<ComponentPreview name="PopoverDemo">
  <template #preview>
    <DemoContainer>
      <PopoverDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover'
</script>

<template>
  <Popover>
    <PopoverTrigger>Open</PopoverTrigger>
    <PopoverContent>
      <div class="space-y-2">
        <h4 class="font-medium">Dimensions</h4>
        <p class="text-sm">Set the dimensions for the layer.</p>
      </div>
    </PopoverContent>
  </Popover>
</template>
```

```tsx [React]
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"

export default function App() {
  return (
    <Popover>
      <PopoverTrigger>Open</PopoverTrigger>
      <PopoverContent>
        <div className="space-y-2">
          <h4 className="font-medium">Dimensions</h4>
          <p className="text-sm">Set the dimensions for the layer.</p>
        </div>
      </PopoverContent>
    </Popover>
  )
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { PopoverComponent } from '@/components/ui/popover';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PopoverComponent],
  template: `
    <ui-popover>
      <button trigger>Open</button>
      <div content>
        <h4>Dimensions</h4>
        <p>Set the dimensions for the layer.</p>
      </div>
    </ui-popover>
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
npx galaxy-ui-cli@latest add popover
```

```bash [pnpm]
pnpm dlx galaxy-ui-cli@latest add popover
```

```bash [yarn]
yarn dlx galaxy-ui-cli@latest add popover
```

```bash [bun]
bunx galaxy-ui-cli@latest add popover
```

:::

## Usage

### Vue

```vue
<script setup lang="ts">
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui'
</script>

<template>
  <Popover>
    <PopoverTrigger>Open</PopoverTrigger>
    <PopoverContent>
      <div class="space-y-2">
        <h4 class="font-medium">Dimensions</h4>
        <p class="text-sm">Set the dimensions for the layer.</p>
      </div>
    </PopoverContent>
  </Popover>
</template>
```

### React

```tsx
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui'

export default function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger>Open</PopoverTrigger>
      <PopoverContent>
        <div className="space-y-2">
          <h4 className="font-medium">Dimensions</h4>
          <p className="text-sm">Set the dimensions for the layer.</p>
        </div>
      </PopoverContent>
    </Popover>
  )
}
```

### Angular

```typescript
import { Component } from '@angular/core';
import { PopoverComponent } from '@/components/ui';

@Component({
  selector: 'app-popover-demo',
  standalone: true,
  imports: [PopoverComponent],
  template: `
    <ui-popover>
      <button trigger>Open</button>
      <div content>
        <h4>Dimensions</h4>
        <p>Set the dimensions for the layer.</p>
      </div>
    </ui-popover>
  `
})
export class PopoverDemoComponent {}
```
