# Button

A clickable button component with multiple variants and sizes.

<ComponentPreview name="ButtonDemo">
  <template #preview>
    <DemoContainer>
      <ButtonDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Button } from '@/components/ui/button'
</script>

<template>
  <Button>Click me</Button>
</template>
```

```tsx [React]
import { Button } from "@/components/ui/button"

export default function App() {
  return <Button>Click me</Button>
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { ButtonComponent } from '@/components/ui/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonComponent],
  template: `<ui-button>Click me</ui-button>`
})
export class AppComponent {}
```

:::

  </template>
</ComponentPreview>

## Installation

::: code-group

```bash [npm]
npx galaxy-ui-cli@latest add button
```

```bash [pnpm]
pnpm dlx galaxy-ui-cli@latest add button
```

```bash [yarn]
yarn dlx galaxy-ui-cli@latest add button
```

```bash [bun]
bunx galaxy-ui-cli@latest add button
```

:::

::: tip Dependencies
This component automatically installs the following dependencies:
- **React**: `@radix-ui/react-slot`, `class-variance-authority`
- **Vue**: `radix-vue`, `class-variance-authority`
- **Angular**: `@radix-ng/primitives`, `class-variance-authority`

No manual installation needed!
:::

## Examples

### Variants

Button supports 6 variants: `default`, `destructive`, `outline`, `secondary`, `ghost`, and `link`.

<ComponentPreview name="ButtonVariants">
  <template #preview>
    <DemoContainer>
      <ButtonVariantsDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<template>
  <div class="flex gap-2">
    <Button variant="default">Default</Button>
    <Button variant="destructive">Destructive</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="ghost">Ghost</Button>
    <Button variant="link">Link</Button>
  </div>
</template>
```

```tsx [React]
<div className="flex gap-2">
  <Button variant="default">Default</Button>
  <Button variant="destructive">Destructive</Button>
  <Button variant="outline">Outline</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="ghost">Ghost</Button>
  <Button variant="link">Link</Button>
</div>
```

```html [Angular]
<div class="flex gap-2">
  <ui-button variant="default">Default</ui-button>
  <ui-button variant="destructive">Destructive</ui-button>
  <ui-button variant="outline">Outline</ui-button>
  <ui-button variant="secondary">Secondary</ui-button>
  <ui-button variant="ghost">Ghost</ui-button>
  <ui-button variant="link">Link</ui-button>
</div>
```

:::

  </template>
</ComponentPreview>

### Sizes

Button comes in 4 sizes: `default`, `sm`, `lg`, and `icon`.

::: code-group

```vue [Vue]
<template>
  <div class="flex items-center gap-2">
    <Button size="sm">Small</Button>
    <Button size="default">Default</Button>
    <Button size="lg">Large</Button>
    <Button size="icon">
      <ChevronRight class="h-4 w-4" />
    </Button>
  </div>
</template>
```

```tsx [React]
<div className="flex items-center gap-2">
  <Button size="sm">Small</Button>
  <Button size="default">Default</Button>
  <Button size="lg">Large</Button>
  <Button size="icon">
    <ChevronRight className="h-4 w-4" />
  </Button>
</div>
```

```html [Angular]
<div class="flex items-center gap-2">
  <ui-button size="sm">Small</ui-button>
  <ui-button size="default">Default</ui-button>
  <ui-button size="lg">Large</ui-button>
  <ui-button size="icon">
    <lucide-icon name="chevron-right" class="h-4 w-4"></lucide-icon>
  </ui-button>
</div>
```

:::

### With Icon

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Mail } from 'lucide-vue-next'
</script>

<template>
  <Button>
    <Mail class="mr-2 h-4 w-4" />
    Login with Email
  </Button>
</template>
```

```tsx [React]
import { Mail } from "lucide-react"

<Button>
  <Mail className="mr-2 h-4 w-4" />
  Login with Email
</Button>
```

```html [Angular]
<ui-button>
  <lucide-icon name="mail" class="mr-2 h-4 w-4"></lucide-icon>
  Login with Email
</ui-button>
```

:::

### Loading State

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Loader2 } from 'lucide-vue-next'
import { ref } from 'vue'

const isLoading = ref(false)
</script>

<template>
  <Button :disabled="isLoading">
    <Loader2 v-if="isLoading" class="mr-2 h-4 w-4 animate-spin" />
    {{ isLoading ? 'Loading...' : 'Submit' }}
  </Button>
</template>
```

```tsx [React]
import { Loader2 } from "lucide-react"
import { useState } from "react"

export default function LoadingButton() {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <Button disabled={isLoading}>
      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {isLoading ? 'Loading...' : 'Submit'}
    </Button>
  )
}
```

```typescript [Angular]
import { Component, signal } from '@angular/core';

@Component({
  template: `
    <ui-button [disabled]="isLoading()">
      @if (isLoading()) {
        <lucide-icon name="loader-2" class="mr-2 h-4 w-4 animate-spin"></lucide-icon>
      }
      {{ isLoading() ? 'Loading...' : 'Submit' }}
    </ui-button>
  `
})
export class LoadingButtonComponent {
  isLoading = signal(false);
}
```

:::

## API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'destructive' \| 'outline' \| 'secondary' \| 'ghost' \| 'link'` | `'default'` | The visual style of the button |
| `size` | `'default' \| 'sm' \| 'lg' \| 'icon'` | `'default'` | The size of the button |
| `asChild` | `boolean` | `false` | (React/Vue only) Render as child element using Radix Slot |
| `disabled` | `boolean` | `false` | Whether the button is disabled |

### Framework-Specific Props

#### Vue
- Inherits all props from Radix Vue `Primitive` component
- Can use `as` prop to change the underlying element

#### React
- Extends `React.ButtonHTMLAttributes<HTMLButtonElement>`
- Use `asChild` to render as a different element

#### Angular
- Use `class` input to add custom classes
- All standard button attributes supported

## Accessibility

- Uses semantic `<button>` element
- Keyboard accessible (Space/Enter to activate)
- Supports `disabled` state with proper ARIA attributes
- Focus visible with ring styles

## Styling

The Button component uses Tailwind CSS classes and CSS variables for theming. You can customize the appearance by modifying the CSS variables in your global CSS file:

```css
:root {
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 210 40% 98%;
  /* ... more variables */
}
```

## Author

**Bùi Trọng Hiếu (kevinbui)**
- GitHub: [@buikevin](https://github.com/buikevin)
- Email: kevinbui210191@gmail.com

## License

MIT © 2025 Bùi Trọng Hiếu (kevinbui)
