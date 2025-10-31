# Select

Displays a list of options for the user to pick from—triggered by a button.

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

## Installation

::: code-group

```bash [npm]
npx galaxy-ui@latest add select
```

```bash [pnpm]
pnpm dlx galaxy-ui@latest add select
```

```bash [yarn]
yarn dlx galaxy-ui@latest add select
```

```bash [bun]
bunx galaxy-ui@latest add select
```

:::

## Usage

### Vue

```vue
<script setup lang="ts">
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@galaxy-ui/vue'
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

### React

```tsx
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@galaxy-ui/react'

export default function SelectDemo() {
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

### Angular

```typescript
import { Component } from '@angular/core';
import { SelectComponent, SelectItemComponent } from '@galaxy-ui/angular';

@Component({
  selector: 'app-select-demo',
  standalone: true,
  imports: [SelectComponent, SelectItemComponent],
  template: `
    <ui-select
      [value]="selectedValue"
      (valueChange)="selectedValue = $event"
      placeholder="Select a fruit"
      class="w-[180px]"
    >
      <ui-select-item value="apple" [isSelected]="selectedValue === 'apple'">
        Apple
      </ui-select-item>
      <ui-select-item value="banana" [isSelected]="selectedValue === 'banana'">
        Banana
      </ui-select-item>
      <ui-select-item value="orange" [isSelected]="selectedValue === 'orange'">
        Orange
      </ui-select-item>
    </ui-select>
  `
})
export class SelectDemoComponent {
  selectedValue = '';
}
```
