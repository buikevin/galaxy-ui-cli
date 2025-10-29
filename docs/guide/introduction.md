# Introduction | Giới Thiệu

Welcome to **Galaxy UI** - a universal component library that brings beautiful, accessible components to Vue, React, and Angular.

Chào mừng đến với **Galaxy UI** - thư viện component đa nền tảng mang đến các component đẹp mắt, dễ tiếp cận cho Vue, React và Angular.

## What is Galaxy UI? | Galaxy UI là gì?

Galaxy UI is a collection of re-usable components built on top of **Radix primitives** and styled with **Tailwind CSS**. Unlike traditional component libraries, Galaxy UI follows the **copy-paste** philosophy pioneered by [shadcn/ui](https://ui.shadcn.com/).

Galaxy UI là bộ sưu tập các component có thể tái sử dụng được xây dựng trên **Radix primitives** và tạo kiểu với **Tailwind CSS**. Khác với các thư viện component truyền thống, Galaxy UI theo triết lý **copy-paste** do [shadcn/ui](https://ui.shadcn.com/) khởi xướng.

### Key Features | Tính Năng Chính

- **🎨 Multi-Framework** - Support for Vue 3, React, and Angular
- **♿ Accessible** - Built on Radix primitives with ARIA support
- **🎭 Customizable** - Tailwind CSS for easy styling
- **📦 Copy-Paste** - Own your code, no npm dependencies
- **🌙 Dark Mode** - First-class dark theme support
- **🚀 CLI Tool** - Easy installation with `galaxy-ui` command
- **📱 Responsive** - Mobile-first design
- **🔧 TypeScript** - Full type safety

## Why Copy-Paste? | Tại Sao Copy-Paste?

### Traditional Libraries | Thư Viện Truyền Thống

```bash
npm install some-ui-library
```

**Problems | Vấn Đề:**
- ❌ Version conflicts | Xung đột phiên bản
- ❌ Bundle size bloat | Kích thước bundle phình to
- ❌ Limited customization | Tùy chỉnh hạn chế
- ❌ Breaking changes in updates | Thay đổi gây lỗi khi cập nhật

### Galaxy UI Approach | Cách Tiếp Cận của Galaxy UI

```bash
galaxy-ui add button
```

**Benefits | Lợi Ích:**
- ✅ Full code ownership | Sở hữu toàn bộ code
- ✅ Complete customization | Tùy chỉnh hoàn toàn
- ✅ No version conflicts | Không xung đột phiên bản
- ✅ Tree-shaking friendly | Tối ưu tree-shaking

## Framework Support | Hỗ Trợ Framework

Galaxy UI provides the same beautiful components across three major frameworks:

Galaxy UI cung cấp cùng các component đẹp mắt trên ba framework chính:

### Vue 3

Built with **[Radix Vue](https://www.radix-vue.com/)** primitives.

```vue
<script setup lang="ts">
import { Button } from '@/components/ui/button'
</script>

<template>
  <Button>Click me</Button>
</template>
```

### React

Built with **[Radix UI](https://www.radix-ui.com/)** primitives.

```tsx
import { Button } from "@/components/ui/button"

export default function App() {
  return <Button>Click me</Button>
}
```

### Angular

Built with **[Radix NG](https://www.radix-ng.com/)** primitives.

```typescript
import { ButtonComponent } from '@/components/ui/button';

@Component({
  template: `<ui-button>Click me</ui-button>`
})
export class AppComponent {}
```

## How It Works | Cách Hoạt Động

1. **Initialize** your project with `galaxy-ui init`
2. **Add** components you need with `galaxy-ui add [component]`
3. **Customize** the copied code as needed
4. **Ship** your application

```bash
# Step 1: Initialize | Khởi tạo
galaxy-ui init

# Step 2: Add components | Thêm components
galaxy-ui add button input card

# Step 3: Use in your app | Sử dụng trong ứng dụng
# Components are now in your src/components/ui folder
```

## Architecture | Kiến Trúc

Galaxy UI is built on three pillars:

Galaxy UI được xây dựng trên ba trụ cột:

### 1. Radix Primitives

Unstyled, accessible components that handle:
- ♿ Accessibility (ARIA attributes)
- ⌨️ Keyboard navigation
- 🎯 Focus management
- 📱 Touch/mouse interactions

### 2. Tailwind CSS

Utility-first CSS framework for:
- 🎨 Styling components
- 🌙 Dark mode
- 📱 Responsive design
- 🎭 Easy customization

### 3. Framework Wrappers

Thin wrappers around Radix primitives:
- Vue 3 composables
- React hooks
- Angular services

## Philosophy | Triết Lý

### Own Your Code | Sở Hữu Code Của Bạn

When you use Galaxy UI, you're not installing a black-box package. You're copying well-tested, production-ready code into your project.

Khi bạn sử dụng Galaxy UI, bạn không cài đặt một package hộp đen. Bạn đang sao chép code đã được kiểm tra kỹ, sẵn sàng production vào dự án của bạn.

### Customize Without Limits | Tùy Chỉnh Không Giới Hạn

Every component is just TypeScript/JavaScript and Tailwind classes. Modify anything:
- Change colors, spacing, borders
- Add or remove features
- Integrate with your state management
- Adapt to your design system

### Learn By Reading | Học Bằng Cách Đọc

The best way to learn is by reading code. With Galaxy UI, every component's source is in your project. Learn how things work!

Cách tốt nhất để học là đọc code. Với Galaxy UI, source code của mọi component đều có trong dự án của bạn. Học cách mọi thứ hoạt động!

## What's Next? | Tiếp Theo?

Ready to get started? Follow our installation guide:

Sẵn sàng bắt đầu? Làm theo hướng dẫn cài đặt:

<div style="margin-top: 2rem;">
  <a href="./installation" style="display: inline-block; padding: 0.75rem 1.5rem; background: #3b82f6; color: white; border-radius: 0.5rem; text-decoration: none; font-weight: 600;">
    Installation Guide →
  </a>
</div>

## Credits | Công Trạng

Galaxy UI is inspired by and built upon the work of:

- **[Radix UI](https://www.radix-ui.com/)** - Unstyled React primitives
- **[Radix Vue](https://www.radix-vue.com/)** - Vue port of Radix UI
- **[Radix NG](https://www.radix-ng.com/)** - Angular port of Radix UI
- **[shadcn/ui](https://ui.shadcn.com/)** - Copy-paste React components
- **[shadcn-vue](https://www.shadcn-vue.com/)** - Copy-paste Vue components
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS
