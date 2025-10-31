# Avatar

Phần tử hình ảnh với fallback để đại diện cho người dùng.

<ComponentPreview name="AvatarDemo">
  <template #preview>
    <DemoContainer>
      <AvatarDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
</script>

<template>
  <Avatar>
    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
</template>
```

```tsx [React]
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function App() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { AvatarComponent } from '@/components/ui/avatar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AvatarComponent],
  template: `
    <ui-avatar src="https://github.com/shadcn.png" alt="@shadcn">
      CN
    </ui-avatar>
  `
})
export class AppComponent {}
```

:::

  </template>
</ComponentPreview>

## Cài đặt

::: code-group

```bash [npm]
npx galaxy-ui@latest add avatar
```

```bash [pnpm]
pnpm dlx galaxy-ui@latest add avatar
```

```bash [yarn]
yarn dlx galaxy-ui@latest add avatar
```

```bash [bun]
bunx galaxy-ui@latest add avatar
```

:::

## Sử dụng

### Vue

```vue
<script setup lang="ts">
import { Avatar, AvatarImage, AvatarFallback } from '@galaxy-ui/vue'
</script>

<template>
  <Avatar>
    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
</template>
```

### React

```tsx
import { Avatar, AvatarImage, AvatarFallback } from '@galaxy-ui/react'

export default function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}
```

### Angular

```typescript
import { Component } from '@angular/core';
import { AvatarComponent } from '@galaxy-ui/angular';

@Component({
  selector: 'app-avatar-demo',
  standalone: true,
  imports: [AvatarComponent],
  template: `
    <ui-avatar src="https://github.com/shadcn.png" alt="@shadcn">
      CN
    </ui-avatar>
  `
})
export class AvatarDemoComponent {}
```
