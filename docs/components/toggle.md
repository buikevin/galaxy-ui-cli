# Toggle

A two-state button that can be either on or off.


<ComponentPreview name="ToggleDemo">
  <template #preview>
    <DemoContainer>
      <ToggleDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group
```vue [Vue]
<template><div>Demo</div></template>
```

```tsx [React]
export default function App() { return <div>Demo</div> }
```

```typescript [Angular]
@Component({ template: `<div>Demo</div>` })
export class DemoComponent {}
```
:::

  </template>
</ComponentPreview>
## Installation

::: code-group

```bash [npm]
npx galaxy-ui@latest add toggle
```

```bash [pnpm]
pnpm dlx galaxy-ui@latest add toggle
```

```bash [yarn]
yarn dlx galaxy-ui@latest add toggle
```

```bash [bun]
bunx galaxy-ui@latest add toggle
```

:::

## Usage

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Toggle } from '@/components/ui/toggle'
import { Bold } from 'lucide-vue-next'
</script>

<template>
  <Toggle aria-label="Toggle bold">
    <Bold class="h-4 w-4" />
  </Toggle>
</template>
```

```tsx [React]
import { Toggle } from "@/components/ui/toggle"
import { Bold } from "lucide-react"

export default function App() {
  return (
    <Toggle aria-label="Toggle bold">
      <Bold className="h-4 w-4" />
    </Toggle>
  )
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { ToggleComponent } from '@/components/ui/toggle';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ToggleComponent],
  template: `
    <ui-toggle aria-label="Toggle bold">
      <lucide-icon name="bold" class="h-4 w-4"></lucide-icon>
    </ui-toggle>
  `
})
export class AppComponent {}
```

:::

## Examples

### Default

::: code-group

```vue [Vue]
<Toggle>
  <Bold class="h-4 w-4" />
</Toggle>
```

```tsx [React]
<Toggle>
  <Bold className="h-4 w-4" />
</Toggle>
```

```html [Angular]
<ui-toggle>
  <lucide-icon name="bold" class="h-4 w-4"></lucide-icon>
</ui-toggle>
```

:::

### Outline

::: code-group

```vue [Vue]
<Toggle variant="outline">
  <Italic class="h-4 w-4" />
</Toggle>
```

```tsx [React]
<Toggle variant="outline">
  <Italic className="h-4 w-4" />
</Toggle>
```

```html [Angular]
<ui-toggle variant="outline">
  <lucide-icon name="italic" class="h-4 w-4"></lucide-icon>
</ui-toggle>
```

:::

### With Text

::: code-group

```vue [Vue]
<Toggle>
  <Italic class="mr-2 h-4 w-4" />
  Italic
</Toggle>
```

```tsx [React]
<Toggle>
  <Italic className="mr-2 h-4 w-4" />
  Italic
</Toggle>
```

```html [Angular]
<ui-toggle>
  <lucide-icon name="italic" class="mr-2 h-4 w-4"></lucide-icon>
  Italic
</ui-toggle>
```

:::

### Small

::: code-group

```vue [Vue]
<Toggle size="sm">
  <Italic class="h-4 w-4" />
</Toggle>
```

```tsx [React]
<Toggle size="sm">
  <Italic className="h-4 w-4" />
</Toggle>
```

```html [Angular]
<ui-toggle size="sm">
  <lucide-icon name="italic" class="h-4 w-4"></lucide-icon>
</ui-toggle>
```

:::

### Large

::: code-group

```vue [Vue]
<Toggle size="lg">
  <Italic class="h-4 w-4" />
</Toggle>
```

```tsx [React]
<Toggle size="lg">
  <Italic className="h-4 w-4" />
</Toggle>
```

```html [Angular]
<ui-toggle size="lg">
  <lucide-icon name="italic" class="h-4 w-4"></lucide-icon>
</ui-toggle>
```

:::

### Disabled

::: code-group

```vue [Vue]
<Toggle disabled>
  <Underline class="h-4 w-4" />
</Toggle>
```

```tsx [React]
<Toggle disabled>
  <Underline className="h-4 w-4" />
</Toggle>
```

```html [Angular]
<ui-toggle [disabled]="true">
  <lucide-icon name="underline" class="h-4 w-4"></lucide-icon>
</ui-toggle>
```

:::

## API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'outline'` | `'default'` | The visual style of the toggle |
| `size` | `'default' \| 'sm' \| 'lg'` | `'default'` | The size of the toggle |
| `pressed` | `boolean` | `false` | The controlled pressed state of the toggle |
| `defaultPressed` | `boolean` | - | The pressed state of the toggle when initially rendered (uncontrolled) |
| `disabled` | `boolean` | `false` | Whether the toggle is disabled |

### Events

| Event | Type | Description |
|-------|------|-------------|
| `pressedChange` | `(pressed: boolean) => void` | Event handler called when the pressed state changes |

## Accessibility

### Keyboard Interactions

| Key | Description |
|-----|-------------|
| `Space` | Toggles the component on and off |
| `Enter` | Toggles the component on and off |
