# Input

Component trường nhập văn bản với hỗ trợ nhiều loại input.

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

## Cài Đặt

::: code-group

```bash [npm]
npx galaxy-ui@latest add input
```

```bash [pnpm]
pnpm dlx galaxy-ui@latest add input
```

```bash [yarn]
yarn dlx galaxy-ui@latest add input
```

```bash [bun]
bunx galaxy-ui@latest add input
```

:::

## Sử Dụng

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
import { InputComponent } from '@/components/ui/input';
@Component({
  template: `<ui-input [(ngModel)]="email" type="email" placeholder="Email" />`
})
export class AppComponent { email = ''; }
```

## Tham Chiếu API

| Prop | Kiểu | Mặc định | Mô tả |
|------|------|---------|-------|
| `type` | `string` | `'text'` | Loại input |
| `placeholder` | `string` | - | Placeholder text |
| `disabled` | `boolean` | `false` | Vô hiệu hóa input |

## Tác Giả

**Bùi Trọng Hiếu (kevinbui)**

MIT © 2025
