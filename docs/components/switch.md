# Switch

A control that allows users to toggle between checked and unchecked.

<ComponentPreview name="SwitchDemo">
  <template #preview>
    <DemoContainer>
      <SwitchDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Switch } from '@/components/ui/switch'
</script>

<template>
  <Switch />
</template>
```

```tsx [React]
import { Switch } from "@/components/ui/switch"

export default function App() {
  return <Switch />
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { SwitchComponent } from '@/components/ui/switch';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SwitchComponent],
  template: `<ui-switch></ui-switch>`
})
export class AppComponent {}
```

:::

  </template>
</ComponentPreview>

## Installation

::: code-group

```bash [npm]
npx galaxy-ui@latest add switch
```

```bash [pnpm]
pnpm dlx galaxy-ui@latest add switch
```

```bash [yarn]
yarn dlx galaxy-ui@latest add switch
```

```bash [bun]
bunx galaxy-ui@latest add switch
```

:::

## Usage

```vue
<Switch v-model:checked="enabled" />
```

```tsx
<Switch checked={enabled} onCheckedChange={setEnabled} />
```

```html
<ui-switch [(checked)]="enabled" />
```

**Bùi Trọng Hiếu (kevinbui)** - MIT © 2025
