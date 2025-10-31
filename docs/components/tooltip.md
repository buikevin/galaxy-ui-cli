# Tooltip

A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.

<ComponentPreview name="TooltipDemo">
  <template #preview>
    <DemoContainer>
      <TooltipDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@/components/ui/tooltip'
</script>

<template>
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger>Hover me</TooltipTrigger>
      <TooltipContent>
        <p>Add to library</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
```

```tsx [React]
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip"

export default function App() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>Hover me</TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { TooltipComponent } from '@/components/ui/tooltip';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TooltipComponent],
  template: `
    <ui-tooltip>
      <button trigger>Hover me</button>
      <div content>Add to library</div>
    </ui-tooltip>
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
npx galaxy-ui@latest add tooltip
```

```bash [pnpm]
pnpm dlx galaxy-ui@latest add tooltip
```

```bash [yarn]
yarn dlx galaxy-ui@latest add tooltip
```

```bash [bun]
bunx galaxy-ui@latest add tooltip
```

:::

## Usage

### Vue

```vue
<script setup lang="ts">
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@galaxy-ui/vue'
</script>

<template>
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger>Hover me</TooltipTrigger>
      <TooltipContent>
        <p>Add to library</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
```

### React

```tsx
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@galaxy-ui/react'

export default function TooltipDemo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>Hover me</TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
```

### Angular

```typescript
import { Component } from '@angular/core';
import { TooltipComponent } from '@galaxy-ui/angular';

@Component({
  selector: 'app-tooltip-demo',
  standalone: true,
  imports: [TooltipComponent],
  template: `
    <ui-tooltip>
      <button trigger>Hover me</button>
      <div content>Add to library</div>
    </ui-tooltip>
  `
})
export class TooltipDemoComponent {}
```
