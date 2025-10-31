---
layout: home

hero:
  name: "Galaxy UI"
  text: "Thư Viện Component Đa Framework"
  tagline: Component đẹp, dễ tiếp cận cho Vue, React và Angular với Radix primitives + Tailwind CSS
  image:
    src: /galaxy-logo.png
    alt: Galaxy UI
  actions:
    - theme: brand
      text: Bắt đầu
      link: /vi/guide/introduction
    - theme: alt
      text: Xem Components
      link: /vi/components/overview
    - theme: alt
      text: GitHub
      link: https://github.com/buikevin/galaxy-ui-cli

features:
  - icon: 🎨
    title: Hỗ trợ Đa Framework
    details: Xây dựng với Vue 3, React hoặc Angular. Component đẹp giống nhau, framework khác nhau.

  - icon: ♿
    title: Khả năng Tiếp cận Mặc định
    details: Xây dựng trên Radix primitives với hỗ trợ ARIA, điều hướng bàn phím và quản lý focus.

  - icon: 🎭
    title: Tùy chỉnh Hoàn toàn
    details: Styled với Tailwind CSS. Dễ dàng tùy chỉnh và mở rộng để phù hợp với thương hiệu của bạn.

  - icon: 📦
    title: Copy-Paste Components
    details: Sở hữu code của bạn. Không phụ thuộc npm. Copy component trực tiếp vào dự án.

  - icon: 🌙
    title: Dark Mode
    details: Hỗ trợ dark mode hạng nhất với tùy chỉnh theme dễ dàng.

  - icon: 🚀
    title: Trải nghiệm Developer
    details: CLI tool để cài đặt dễ dàng. Hỗ trợ TypeScript. Công cụ hiện đại.

  - icon: 🔧
    title: Radix Primitives
    details: Xây dựng trên Radix Vue, Radix UI và Radix NG cho khả năng tiếp cận vững chắc.

  - icon: 📱
    title: Responsive
    details: Thiết kế mobile-first hoạt động tuyệt vời trên mọi kích thước màn hình.

  - icon: 🌐
    title: Sẵn sàng i18n
    details: Tài liệu song ngữ (English/Vietnamese) và hỗ trợ quốc tế hóa.
---

## Bắt Đầu Nhanh

::: code-group

```bash [npm]
# Khởi tạo dự án
npx galaxy-ui-cli@latest init

# Thêm components
npx galaxy-ui-cli@latest add button input dialog
```

```bash [pnpm]
# Khởi tạo dự án
pnpm dlx galaxy-ui-cli@latest init

# Thêm components
pnpm dlx galaxy-ui-cli@latest add button input dialog
```

```bash [yarn]
# Khởi tạo dự án
yarn dlx galaxy-ui-cli@latest init

# Thêm components
yarn dlx galaxy-ui-cli@latest add button input dialog
```

```bash [bun]
# Khởi tạo dự án
bunx galaxy-ui-cli@latest init

# Thêm components
bunx galaxy-ui-cli@latest add button input dialog
```

:::

## Hỗ Trợ Framework

::: code-group

```vue [Vue 3]
<script setup lang="ts">
import { Button } from '@/components/ui/button'
</script>

<template>
  <Button variant="default">Click me</Button>
</template>
```

```tsx [React]
import { Button } from "@/components/ui/button"

export default function App() {
  return <Button variant="default">Click me</Button>
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { ButtonComponent } from '@/components/ui/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonComponent],
  template: `<ui-button variant="default">Click me</ui-button>`
})
export class AppComponent {}
```

:::

## Tại Sao Chọn Galaxy UI?

### 🎯 Độc Lập Framework
Chọn framework yêu thích của bạn. Chúng tôi hỗ trợ Vue 3, React và Angular với component đẹp giống nhau.

### 🔓 Bạn Sở Hữu Code
Không giống như npm packages, bạn copy code component trực tiếp vào dự án. Sửa đổi theo nhu cầu. Không xung đột phiên bản.

### ♿ Ưu Tiên Accessibility
Xây dựng trên Radix primitives đã được kiểm nghiệm. Tuân thủ WCAG ngay từ đầu.

### 🎨 Tùy Chỉnh Hoàn Toàn
Mọi component sử dụng Tailwind CSS. Dễ dàng tùy chỉnh màu sắc, khoảng cách và style để phù hợp với thương hiệu của bạn.

## Lấy Cảm Hứng Từ Những Thứ Tốt Nhất

Galaxy UI đứng trên vai những người khổng lồ:

- **[Radix UI](https://www.radix-ui.com/)** - React components không style, accessible
- **[Radix Vue](https://www.radix-vue.com/)** - Radix primitives cho Vue
- **[Radix NG](https://www.radix-ng.com/)** - Radix primitives cho Angular
- **[shadcn/ui](https://ui.shadcn.com/)** - Copy-paste React components
- **[shadcn-vue](https://www.shadcn-vue.com/)** - Copy-paste Vue components
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework

## Tác Giả

Được tạo bởi **Bùi Trọng Hiếu (kevinbui)**

- GitHub: [@buikevin](https://github.com/buikevin)
- Email: kevinbui210191@gmail.com
- Repository: [buikevin/galaxy-ui-cli](https://github.com/buikevin/galaxy-ui-cli)

## Giấy Phép

MIT © 2025 Bùi Trọng Hiếu (kevinbui)
