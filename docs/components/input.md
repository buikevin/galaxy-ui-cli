# Input

A text input field component with various types support.

<ComponentPreview name="InputDemo">
  <template #preview>
    <DemoContainer>
      <InputDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Input } from '@/components/ui/input'
</script>

<template>
  <Input type="email" placeholder="Email" />
</template>
```

```tsx [React]
import { Input } from "@/components/ui/input"

export default function App() {
  return <Input type="email" placeholder="Email" />
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { InputComponent } from '@/components/ui/input';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InputComponent],
  template: `<ui-input type="email" placeholder="Email"></ui-input>`
})
export class AppComponent {}
```

:::

  </template>
</ComponentPreview>

## Installation

::: code-group

```bash [npm]
npx galaxy-ui-cli@latest add input
```

```bash [pnpm]
pnpm dlx galaxy-ui-cli@latest add input
```

```bash [yarn]
yarn dlx galaxy-ui-cli@latest add input
```

```bash [bun]
bunx galaxy-ui-cli@latest add input
```

:::

## Usage

### Vue

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Input } from '@/components/ui/input'

const email = ref('')
</script>

<template>
  <Input v-model="email" type="email" placeholder="Email" />
</template>
```

### React

```tsx
import { Input } from "@/components/ui/input"

export default function App() {
  return <Input type="email" placeholder="Email" />
}
```

### Angular

```typescript
import { Component } from '@angular/core';
import { InputComponent } from '@/components/ui/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InputComponent, FormsModule],
  template: `<ui-input [(ngModel)]="email" type="email" placeholder="Email" />`
})
export class AppComponent {
  email = '';
}
```

## Examples

### Form with Label

::: code-group

```vue [Vue]
<script setup lang="ts">
import { ref } from 'vue'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

const email = ref('')
</script>

<template>
  <div class="space-y-2">
    <Label for="email">Email</Label>
    <Input id="email" v-model="email" type="email" placeholder="m@example.com" />
  </div>
</template>
```

```tsx [React]
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="m@example.com" />
</div>
```

```html [Angular]
<div class="space-y-2">
  <ui-label for="email">Email</ui-label>
  <ui-input id="email" type="email" placeholder="m@example.com" />
</div>
```

:::

### Disabled State

::: code-group

```vue [Vue]
<template>
  <Input disabled type="email" placeholder="Email" />
</template>
```

```tsx [React]
<Input disabled type="email" placeholder="Email" />
```

```html [Angular]
<ui-input [disabled]="true" type="email" placeholder="Email" />
```

:::

### File Input

::: code-group

```vue [Vue]
<template>
  <Input id="picture" type="file" />
</template>
```

```tsx [React]
<Input id="picture" type="file" />
```

```html [Angular]
<ui-input id="picture" type="file" />
```

:::

### With Button

::: code-group

```vue [Vue]
<template>
  <div class="flex w-full max-w-sm items-center space-x-2">
    <Input type="email" placeholder="Email" />
    <Button type="submit">Subscribe</Button>
  </div>
</template>
```

```tsx [React]
<div className="flex w-full max-w-sm items-center space-x-2">
  <Input type="email" placeholder="Email" />
  <Button type="submit">Subscribe</Button>
</div>
```

```html [Angular]
<div class="flex w-full max-w-sm items-center space-x-2">
  <ui-input type="email" placeholder="Email" />
  <ui-button type="submit">Subscribe</ui-button>
</div>
```

:::

## API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `string` | `'text'` | The input type (text, email, password, etc.) |
| `placeholder` | `string` | - | Placeholder text |
| `disabled` | `boolean` | `false` | Whether the input is disabled |
| `class` / `className` | `string` | - | Additional CSS classes |

### Framework-Specific

#### Vue
- Uses `v-model` for two-way binding
- Supports all standard HTML input attributes
- Uses `@vueuse/core` for model handling

#### React
- Uses `React.forwardRef` for ref forwarding
- Extends `React.InputHTMLAttributes<HTMLInputElement>`
- Controlled component pattern

#### Angular
- Implements `ControlValueAccessor` for forms integration
- Works with `[(ngModel)]` and `FormControl`
- Supports reactive forms

## Accessibility

- Proper label association using `id` and `for`/`htmlFor`
- Keyboard accessible
- Screen reader compatible
- Focus visible styles
- Disabled state properly indicated

## Styling

Base styles include:
- Focus ring on focus-visible
- Disabled state styling
- File input specific styling
- Placeholder styling

## Related Components

- [Label](/components/label) - Form label
- [Button](/components/button) - Action button
- [Textarea](/components/textarea) - Multi-line text input

## Author

**Bùi Trọng Hiếu (kevinbui)**

## License

MIT © 2025 Bùi Trọng Hiếu (kevinbui)
