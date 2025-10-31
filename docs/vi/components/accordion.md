# Accordion

Một tập hợp các tiêu đề tương tác xếp theo chiều dọc, mỗi tiêu đề hiển thị một phần nội dung.

<ComponentPreview name="AccordionDemo">
  <template #preview>
    <DemoContainer>
      <AccordionDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
</script>

<template>
  <Accordion type="single" collapsible class="w-full">
    <AccordionItem value="item-1">
      <AccordionTrigger>Is it accessible?</AccordionTrigger>
      <AccordionContent>
        Yes. It adheres to the WAI-ARIA design pattern.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
</template>
```

```tsx [React]
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

export default function App() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { AccordionComponent } from '@/components/ui/accordion';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AccordionComponent],
  template: `
    <ui-accordion type="single" class="w-full">
      <ui-accordion-item value="item-1">
        <ui-accordion-trigger>Is it accessible?</ui-accordion-trigger>
        <ui-accordion-content>
          Yes. It adheres to the WAI-ARIA design pattern.
        </ui-accordion-content>
      </ui-accordion-item>
    </ui-accordion>
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
npx galaxy-ui@latest add accordion
```

```bash [pnpm]
pnpm dlx galaxy-ui@latest add accordion
```

```bash [yarn]
yarn dlx galaxy-ui@latest add accordion
```

```bash [bun]
bunx galaxy-ui@latest add accordion
```

:::

## Sử dụng

### Vue

```vue
<script setup lang="ts">
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@galaxy-ui/vue'
</script>

<template>
  <Accordion type="single" collapsible class="w-full">
    <AccordionItem value="item-1">
      <AccordionTrigger>Nó có accessible không?</AccordionTrigger>
      <AccordionContent>
        Có. Nó tuân thủ mẫu thiết kế WAI-ARIA.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>Nó có được styled không?</AccordionTrigger>
      <AccordionContent>
        Có. Nó đi kèm với các style mặc định mà bạn có thể tùy chỉnh.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
</template>
```

### React

```tsx
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@galaxy-ui/react'

export default function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Nó có accessible không?</AccordionTrigger>
        <AccordionContent>
          Có. Nó tuân thủ mẫu thiết kế WAI-ARIA.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Nó có được styled không?</AccordionTrigger>
        <AccordionContent>
          Có. Nó đi kèm với các style mặc định mà bạn có thể tùy chỉnh.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
```
