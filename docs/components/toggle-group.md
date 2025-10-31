# Toggle Group

A set of two-state buttons that can be toggled on or off.


<ComponentPreview name="ToggleGroupDemo">
  <template #preview>
    <DemoContainer>
      <ToggleGroupDemo />
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
npx galaxy-ui-cli@latest add toggle-group
```

```bash [pnpm]
pnpm dlx galaxy-ui-cli@latest add toggle-group
```

```bash [yarn]
yarn dlx galaxy-ui-cli@latest add toggle-group
```

```bash [bun]
bunx galaxy-ui-cli@latest add toggle-group
```

:::

## Usage

::: code-group

```vue [Vue]
<script setup lang="ts">
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { Bold, Italic, Underline } from 'lucide-vue-next'
</script>

<template>
  <ToggleGroup type="multiple">
    <ToggleGroupItem value="bold" aria-label="Toggle bold">
      <Bold class="h-4 w-4" />
    </ToggleGroupItem>
    <ToggleGroupItem value="italic" aria-label="Toggle italic">
      <Italic class="h-4 w-4" />
    </ToggleGroupItem>
    <ToggleGroupItem value="underline" aria-label="Toggle underline">
      <Underline class="h-4 w-4" />
    </ToggleGroupItem>
  </ToggleGroup>
</template>
```

```tsx [React]
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Bold, Italic, Underline } from "lucide-react"

export default function App() {
  return (
    <ToggleGroup type="multiple">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <Underline className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { ToggleGroupComponent, ToggleGroupItemComponent } from '@/components/ui/toggle-group';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ToggleGroupComponent, ToggleGroupItemComponent],
  template: `
    <ui-toggle-group type="multiple">
      <ui-toggle-group-item value="bold" aria-label="Toggle bold">
        <lucide-icon name="bold" class="h-4 w-4"></lucide-icon>
      </ui-toggle-group-item>
      <ui-toggle-group-item value="italic" aria-label="Toggle italic">
        <lucide-icon name="italic" class="h-4 w-4"></lucide-icon>
      </ui-toggle-group-item>
      <ui-toggle-group-item value="underline" aria-label="Toggle underline">
        <lucide-icon name="underline" class="h-4 w-4"></lucide-icon>
      </ui-toggle-group-item>
    </ui-toggle-group>
  `
})
export class AppComponent {}
```

:::

## Examples

### Default

::: code-group

```vue [Vue]
<ToggleGroup type="single">
  <ToggleGroupItem value="left">
    <AlignLeft class="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="center">
    <AlignCenter class="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="right">
    <AlignRight class="h-4 w-4" />
  </ToggleGroupItem>
</ToggleGroup>
```

```tsx [React]
<ToggleGroup type="single">
  <ToggleGroupItem value="left">
    <AlignLeft className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="center">
    <AlignCenter className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="right">
    <AlignRight className="h-4 w-4" />
  </ToggleGroupItem>
</ToggleGroup>
```

```html [Angular]
<ui-toggle-group type="single">
  <ui-toggle-group-item value="left">
    <lucide-icon name="align-left" class="h-4 w-4"></lucide-icon>
  </ui-toggle-group-item>
  <ui-toggle-group-item value="center">
    <lucide-icon name="align-center" class="h-4 w-4"></lucide-icon>
  </ui-toggle-group-item>
  <ui-toggle-group-item value="right">
    <lucide-icon name="align-right" class="h-4 w-4"></lucide-icon>
  </ui-toggle-group-item>
</ui-toggle-group>
```

:::

### Outline

::: code-group

```vue [Vue]
<ToggleGroup type="single" variant="outline">
  <ToggleGroupItem value="left">
    <AlignLeft class="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="center">
    <AlignCenter class="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="right">
    <AlignRight class="h-4 w-4" />
  </ToggleGroupItem>
</ToggleGroup>
```

```tsx [React]
<ToggleGroup type="single" variant="outline">
  <ToggleGroupItem value="left">
    <AlignLeft className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="center">
    <AlignCenter className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="right">
    <AlignRight className="h-4 w-4" />
  </ToggleGroupItem>
</ToggleGroup>
```

```html [Angular]
<ui-toggle-group type="single" variant="outline">
  <ui-toggle-group-item value="left">
    <lucide-icon name="align-left" class="h-4 w-4"></lucide-icon>
  </ui-toggle-group-item>
  <ui-toggle-group-item value="center">
    <lucide-icon name="align-center" class="h-4 w-4"></lucide-icon>
  </ui-toggle-group-item>
  <ui-toggle-group-item value="right">
    <lucide-icon name="align-right" class="h-4 w-4"></lucide-icon>
  </ui-toggle-group-item>
</ui-toggle-group>
```

:::

### Small

::: code-group

```vue [Vue]
<ToggleGroup type="single" size="sm">
  <ToggleGroupItem value="left">
    <AlignLeft class="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="center">
    <AlignCenter class="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="right">
    <AlignRight class="h-4 w-4" />
  </ToggleGroupItem>
</ToggleGroup>
```

```tsx [React]
<ToggleGroup type="single" size="sm">
  <ToggleGroupItem value="left">
    <AlignLeft className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="center">
    <AlignCenter className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="right">
    <AlignRight className="h-4 w-4" />
  </ToggleGroupItem>
</ToggleGroup>
```

```html [Angular]
<ui-toggle-group type="single" size="sm">
  <ui-toggle-group-item value="left">
    <lucide-icon name="align-left" class="h-4 w-4"></lucide-icon>
  </ui-toggle-group-item>
  <ui-toggle-group-item value="center">
    <lucide-icon name="align-center" class="h-4 w-4"></lucide-icon>
  </ui-toggle-group-item>
  <ui-toggle-group-item value="right">
    <lucide-icon name="align-right" class="h-4 w-4"></lucide-icon>
  </ui-toggle-group-item>
</ui-toggle-group>
```

:::

### Large

::: code-group

```vue [Vue]
<ToggleGroup type="single" size="lg">
  <ToggleGroupItem value="left">
    <AlignLeft class="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="center">
    <AlignCenter class="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="right">
    <AlignRight class="h-4 w-4" />
  </ToggleGroupItem>
</ToggleGroup>
```

```tsx [React]
<ToggleGroup type="single" size="lg">
  <ToggleGroupItem value="left">
    <AlignLeft className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="center">
    <AlignCenter className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="right">
    <AlignRight className="h-4 w-4" />
  </ToggleGroupItem>
</ToggleGroup>
```

```html [Angular]
<ui-toggle-group type="single" size="lg">
  <ui-toggle-group-item value="left">
    <lucide-icon name="align-left" class="h-4 w-4"></lucide-icon>
  </ui-toggle-group-item>
  <ui-toggle-group-item value="center">
    <lucide-icon name="align-center" class="h-4 w-4"></lucide-icon>
  </ui-toggle-group-item>
  <ui-toggle-group-item value="right">
    <lucide-icon name="align-right" class="h-4 w-4"></lucide-icon>
  </ui-toggle-group-item>
</ui-toggle-group>
```

:::

### Disabled

::: code-group

```vue [Vue]
<ToggleGroup type="single" disabled>
  <ToggleGroupItem value="left">
    <AlignLeft class="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="center">
    <AlignCenter class="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="right">
    <AlignRight class="h-4 w-4" />
  </ToggleGroupItem>
</ToggleGroup>
```

```tsx [React]
<ToggleGroup type="single" disabled>
  <ToggleGroupItem value="left">
    <AlignLeft className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="center">
    <AlignCenter className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="right">
    <AlignRight className="h-4 w-4" />
  </ToggleGroupItem>
</ToggleGroup>
```

```html [Angular]
<ui-toggle-group type="single" [disabled]="true">
  <ui-toggle-group-item value="left">
    <lucide-icon name="align-left" class="h-4 w-4"></lucide-icon>
  </ui-toggle-group-item>
  <ui-toggle-group-item value="center">
    <lucide-icon name="align-center" class="h-4 w-4"></lucide-icon>
  </ui-toggle-group-item>
  <ui-toggle-group-item value="right">
    <lucide-icon name="align-right" class="h-4 w-4"></lucide-icon>
  </ui-toggle-group-item>
</ui-toggle-group>
```

:::

## API Reference

### ToggleGroup

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `'single' \| 'multiple'` | - | Determines whether a single or multiple items can be pressed |
| `value` | `string \| string[]` | - | The controlled value of the pressed items |
| `defaultValue` | `string \| string[]` | - | The value of the items when initially rendered (uncontrolled) |
| `variant` | `'default' \| 'outline'` | `'default'` | The visual style of the toggle group |
| `size` | `'default' \| 'sm' \| 'lg'` | `'default'` | The size of the toggle group |
| `disabled` | `boolean` | `false` | Whether the toggle group is disabled |

### ToggleGroupItem

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | - | A unique value for the item |
| `disabled` | `boolean` | `false` | Whether the item is disabled |

## Accessibility

Uses roving tabindex to manage focus movement among items.

### Keyboard Interactions

| Key | Description |
|-----|-------------|
| `Tab` | Moves focus to either the pressed item or the first item in the group |
| `Space` | Activates/deactivates the item |
| `Enter` | Activates/deactivates the item |
| `ArrowDown` | Moves focus to the next item in the group |
| `ArrowRight` | Moves focus to the next item in the group |
| `ArrowUp` | Moves focus to the previous item in the group |
| `ArrowLeft` | Moves focus to the previous item in the group |
| `Home` | Moves focus to the first item |
| `End` | Moves focus to the last item |
