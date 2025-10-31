# Button

Component nút bấm có thể click với nhiều biến thể và kích thước.

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

## Cài Đặt

::: code-group

```bash [npm]
npx galaxy-ui@latest add button
```

```bash [pnpm]
pnpm dlx galaxy-ui@latest add button
```

```bash [yarn]
yarn dlx galaxy-ui@latest add button
```

```bash [bun]
bunx galaxy-ui@latest add button
```

:::

::: tip Thư Viện Phụ Thuộc
Component này sẽ tự động cài đặt các thư viện phụ thuộc sau:
- **React**: `@radix-ui/react-slot`, `class-variance-authority`
- **Vue**: `radix-vue`, `class-variance-authority`
- **Angular**: `@radix-ng/primitives`, `class-variance-authority`

Không cần cài đặt thủ công!
:::

## Sử Dụng

### Vue

```vue
<script setup lang="ts">
import { Button } from '@/components/ui/button'
</script>

<template>
  <Button>Click me</Button>
</template>
```

### React

```tsx
import { Button } from "@/components/ui/button"

export default function App() {
  return <Button>Click me</Button>
}
```

### Angular

```typescript
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

## Ví Dụ

### Các Biến Thể

Button hỗ trợ 6 biến thể: `default`, `destructive`, `outline`, `secondary`, `ghost`, và `link`.

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
    <Button variant="default">Mặc định</Button>
    <Button variant="destructive">Phá hủy</Button>
    <Button variant="outline">Viền</Button>
    <Button variant="secondary">Phụ</Button>
    <Button variant="ghost">Mờ</Button>
    <Button variant="link">Liên kết</Button>
  </div>
</template>
```

```tsx [React]
<div className="flex gap-2">
  <Button variant="default">Mặc định</Button>
  <Button variant="destructive">Phá hủy</Button>
  <Button variant="outline">Viền</Button>
  <Button variant="secondary">Phụ</Button>
  <Button variant="ghost">Mờ</Button>
  <Button variant="link">Liên kết</Button>
</div>
```

```html [Angular]
<div class="flex gap-2">
  <ui-button variant="default">Mặc định</ui-button>
  <ui-button variant="destructive">Phá hủy</ui-button>
  <ui-button variant="outline">Viền</ui-button>
  <ui-button variant="secondary">Phụ</ui-button>
  <ui-button variant="ghost">Mờ</ui-button>
  <ui-button variant="link">Liên kết</ui-button>
</div>
```

:::

  </template>
</ComponentPreview>

### Kích Thước

Button có 4 kích thước: `default`, `sm`, `lg`, và `icon`.

::: code-group

```vue [Vue]
<template>
  <div class="flex items-center gap-2">
    <Button size="sm">Nhỏ</Button>
    <Button size="default">Mặc định</Button>
    <Button size="lg">Lớn</Button>
    <Button size="icon">
      <ChevronRight class="h-4 w-4" />
    </Button>
  </div>
</template>
```

```tsx [React]
<div className="flex items-center gap-2">
  <Button size="sm">Nhỏ</Button>
  <Button size="default">Mặc định</Button>
  <Button size="lg">Lớn</Button>
  <Button size="icon">
    <ChevronRight className="h-4 w-4" />
  </Button>
</div>
```

```html [Angular]
<div class="flex items-center gap-2">
  <ui-button size="sm">Nhỏ</ui-button>
  <ui-button size="default">Mặc định</ui-button>
  <ui-button size="lg">Lớn</ui-button>
  <ui-button size="icon">
    <lucide-icon name="chevron-right" class="h-4 w-4"></lucide-icon>
  </ui-button>
</div>
```

:::

### Với Icon

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Mail } from 'lucide-vue-next'
</script>

<template>
  <Button>
    <Mail class="mr-2 h-4 w-4" />
    Đăng nhập bằng Email
  </Button>
</template>
```

```tsx [React]
import { Mail } from "lucide-react"

<Button>
  <Mail className="mr-2 h-4 w-4" />
  Đăng nhập bằng Email
</Button>
```

```html [Angular]
<ui-button>
  <lucide-icon name="mail" class="mr-2 h-4 w-4"></lucide-icon>
  Đăng nhập bằng Email
</ui-button>
```

:::

### Trạng Thái Loading

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
    {{ isLoading ? 'Đang tải...' : 'Gửi' }}
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
      {isLoading ? 'Đang tải...' : 'Gửi'}
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
      {{ isLoading() ? 'Đang tải...' : 'Gửi' }}
    </ui-button>
  `
})
export class LoadingButtonComponent {
  isLoading = signal(false);
}
```

:::

## Tham Chiếu API

### Props

| Prop | Kiểu | Mặc định | Mô tả |
|------|------|---------|-------|
| `variant` | `'default' \| 'destructive' \| 'outline' \| 'secondary' \| 'ghost' \| 'link'` | `'default'` | Kiểu hiển thị của button |
| `size` | `'default' \| 'sm' \| 'lg' \| 'icon'` | `'default'` | Kích thước của button |
| `asChild` | `boolean` | `false` | (Chỉ React/Vue) Render như phần tử con sử dụng Radix Slot |
| `disabled` | `boolean` | `false` | Button có bị vô hiệu hóa không |

### Props Đặc Biệt Theo Framework

#### Vue
- Kế thừa tất cả props từ component `Primitive` của Radix Vue
- Có thể sử dụng prop `as` để thay đổi phần tử cơ bản

#### React
- Mở rộng `React.ButtonHTMLAttributes<HTMLButtonElement>`
- Sử dụng `asChild` để render như một phần tử khác

#### Angular
- Sử dụng input `class` để thêm class tùy chỉnh
- Hỗ trợ tất cả thuộc tính button tiêu chuẩn

## Khả Năng Tiếp Cận

- Sử dụng phần tử `<button>` semantic
- Có thể truy cập bằng bàn phím (Space/Enter để kích hoạt)
- Hỗ trợ trạng thái `disabled` với thuộc tính ARIA phù hợp
- Focus visible với ring styles

## Tạo Kiểu

Button component sử dụng Tailwind CSS classes và CSS variables cho theming. Bạn có thể tùy chỉnh giao diện bằng cách sửa đổi CSS variables trong file CSS global:

```css
:root {
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 210 40% 98%;
  /* ... thêm variables */
}
```

## Tác Giả

**Bùi Trọng Hiếu (kevinbui)**
- GitHub: [@buikevin](https://github.com/buikevin)
- Email: kevinbui210191@gmail.com

## Giấy Phép

MIT © 2025 Bùi Trọng Hiếu (kevinbui)
