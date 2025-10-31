# Aspect Ratio

Displays content within a desired ratio.


<ComponentPreview name="AspectRatioDemo">
  <template #preview>
    <DemoContainer>
      <AspectRatioDemo />
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
npx galaxy-ui-cli@latest add aspect-ratio
```

```bash [pnpm]
pnpm dlx galaxy-ui-cli@latest add aspect-ratio
```

```bash [yarn]
yarn dlx galaxy-ui-cli@latest add aspect-ratio
```

```bash [bun]
bunx galaxy-ui-cli@latest add aspect-ratio
```

:::

## Usage

::: code-group

```vue [Vue]
<script setup lang="ts">
import { AspectRatio } from '@/components/ui/aspect-ratio'
</script>

<template>
  <AspectRatio :ratio="16 / 9" class="bg-muted">
    <img
      src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd"
      alt="Photo by Drew Beamer"
      class="rounded-md object-cover"
    />
  </AspectRatio>
</template>
```

```tsx [React]
import { AspectRatio } from "@/components/ui/aspect-ratio"

export default function App() {
  return (
    <AspectRatio ratio={16 / 9} className="bg-muted">
      <img
        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd"
        alt="Photo by Drew Beamer"
        className="rounded-md object-cover"
      />
    </AspectRatio>
  )
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { AspectRatioComponent } from '@/components/ui/aspect-ratio';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AspectRatioComponent],
  template: `
    <ui-aspect-ratio [ratio]="16 / 9" class="bg-muted">
      <img
        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd"
        alt="Photo by Drew Beamer"
        class="rounded-md object-cover"
      />
    </ui-aspect-ratio>
  `
})
export class AppComponent {}
```

:::

## API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `ratio` | `number` | `1 / 1` | The desired aspect ratio |

## Accessibility

Adheres to the `img` [role requirements](https://www.w3.org/WAI/ARIA/apg/patterns/img/).
