# Select

Hiển thị danh sách các tùy chọn để người dùng chọn—được kích hoạt bởi một button.

<ComponentPreview name="SelectDemo">
  <template #preview>
    <DemoContainer>
      <SelectDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@/components/ui/select'
</script>

<template>
  <Select>
    <SelectTrigger class="w-[180px]">
      <SelectValue placeholder="Select a fruit" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="apple">Apple</SelectItem>
      <SelectItem value="banana">Banana</SelectItem>
      <SelectItem value="orange">Orange</SelectItem>
    </SelectContent>
  </Select>
</template>
```

```tsx [React]
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select"

export default function App() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="orange">Orange</SelectItem>
      </SelectContent>
    </Select>
  )
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { SelectComponent } from '@/components/ui/select';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SelectComponent],
  template: `
    <ui-select placeholder="Select a fruit" class="w-[180px]">
      <ui-select-item value="apple">Apple</ui-select-item>
      <ui-select-item value="banana">Banana</ui-select-item>
      <ui-select-item value="orange">Orange</ui-select-item>
    </ui-select>
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
npx galaxy-ui-cli@latest add select
```

```bash [pnpm]
pnpm dlx galaxy-ui-cli@latest add select
```

```bash [yarn]
yarn dlx galaxy-ui-cli@latest add select
```

```bash [bun]
bunx galaxy-ui-cli@latest add select
```

:::

## Sử dụng

### Vue

```vue
<script setup lang="ts">
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@/components/ui'
</script>

<template>
  <Select>
    <SelectTrigger class="w-[180px]">
      <SelectValue placeholder="Chọn trái cây" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="apple">Táo</SelectItem>
      <SelectItem value="banana">Chuối</SelectItem>
      <SelectItem value="orange">Cam</SelectItem>
    </SelectContent>
  </Select>
</template>
```

### React

```tsx
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@/components/ui'

export default function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Chọn trái cây" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Táo</SelectItem>
        <SelectItem value="banana">Chuối</SelectItem>
        <SelectItem value="orange">Cam</SelectItem>
      </SelectContent>
    </Select>
  )
}
```

### Angular

```typescript
import { Component } from '@angular/core';
import { SelectComponent, SelectItemComponent } from '@/components/ui';

@Component({
  selector: 'app-select-demo',
  standalone: true,
  imports: [SelectComponent, SelectItemComponent],
  template: `
    <ui-select
      [value]="selectedValue"
      (valueChange)="selectedValue = $event"
      placeholder="Chọn trái cây"
      class="w-[180px]"
    >
      <ui-select-item value="apple" [isSelected]="selectedValue === 'apple'">
        Táo
      </ui-select-item>
      <ui-select-item value="banana" [isSelected]="selectedValue === 'banana'">
        Chuối
      </ui-select-item>
      <ui-select-item value="orange" [isSelected]="selectedValue === 'orange'">
        Cam
      </ui-select-item>
    </ui-select>
  `
})
export class SelectDemoComponent {
  selectedValue = '';
}
```
