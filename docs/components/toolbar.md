# Toolbar

A container for grouping a set of controls, such as buttons, toggle groups, or dropdown menus.


<ComponentPreview name="ToolbarDemo">
  <template #preview>
    <DemoContainer>
      <ToolbarDemo />
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
```bash [React]
npx galaxy-ui add toolbar
```

```bash [Vue]
npx galaxy-ui add toolbar
```

```bash [Angular]
npx galaxy-ui add toolbar
```
:::

## Usage

::: code-group
```tsx [React]
import {
  Toolbar,
  ToolbarButton,
  ToolbarSeparator,
  ToolbarLink,
  ToolbarToggleGroup,
  ToolbarToggleItem,
} from '@/components/toolbar'

export default function ToolbarDemo() {
  return (
    <Toolbar>
      <ToolbarButton>Undo</ToolbarButton>
      <ToolbarButton>Redo</ToolbarButton>
      <ToolbarSeparator />
      <ToolbarToggleGroup type="single">
        <ToolbarToggleItem value="bold">Bold</ToolbarToggleItem>
        <ToolbarToggleItem value="italic">Italic</ToolbarToggleItem>
      </ToolbarToggleGroup>
    </Toolbar>
  )
}
```
:::

## Components

- `Toolbar` - Main toolbar container
- `ToolbarButton` - Clickable button
- `ToolbarSeparator` - Visual separator
- `ToolbarLink` - Link button
- `ToolbarToggleGroup` - Group of toggle items
- `ToolbarToggleItem` - Individual toggle button
