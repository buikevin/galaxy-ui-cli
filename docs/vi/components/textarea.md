# Textarea

Hiển thị form textarea cho nhập văn bản dài hơn.

<ComponentPreview name="TextareaDemo">
  <template #preview>
    <DemoContainer>
      <TextareaDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Textarea } from '@/components/ui/textarea'
</script>

<template>
  <Textarea placeholder="Type your message here." />
</template>
```

```tsx [React]
import { Textarea } from "@/components/ui/textarea"

export default function App() {
  return <Textarea placeholder="Type your message here." />
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { TextareaComponent } from '@/components/ui/textarea';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TextareaComponent],
  template: `<ui-textarea placeholder="Type your message here."></ui-textarea>`
})
export class AppComponent {}
```

:::

  </template>
</ComponentPreview>

## Cài đặt

::: code-group

```bash [npm]
npx galaxy-ui@latest add textarea
```

```bash [pnpm]
pnpm dlx galaxy-ui@latest add textarea
```

```bash [yarn]
yarn dlx galaxy-ui@latest add textarea
```

```bash [bun]
bunx galaxy-ui@latest add textarea
```

:::

## Sử dụng

### Vue

```vue
<script setup lang="ts">
import { Textarea } from '@galaxy-ui/vue'
import { ref } from 'vue'

const message = ref('')
</script>

<template>
  <Textarea v-model="message" placeholder="Nhập tin nhắn của bạn tại đây." />
</template>
```

### React

```tsx
import { Textarea } from '@galaxy-ui/react'

export default function TextareaDemo() {
  return <Textarea placeholder="Nhập tin nhắn của bạn tại đây." />
}
```

### Angular

```typescript
import { Component } from '@angular/core';
import { TextareaComponent } from '@galaxy-ui/angular';

@Component({
  selector: 'app-textarea-demo',
  standalone: true,
  imports: [TextareaComponent],
  template: `
    <ui-textarea
      [(ngModel)]="message"
      placeholder="Nhập tin nhắn của bạn tại đây."
    />
  `
})
export class TextareaDemoComponent {
  message = '';
}
```
