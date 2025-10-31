# Accordion

A vertically stacked set of interactive headings that each reveal a section of content.

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

## Installation

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

## Usage

### Vue

```vue
<script setup lang="ts">
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@galaxy-ui/vue'
</script>

<template>
  <Accordion type="single" collapsible class="w-full">
    <AccordionItem value="item-1">
      <AccordionTrigger>Is it accessible?</AccordionTrigger>
      <AccordionContent>
        Yes. It adheres to the WAI-ARIA design pattern.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>Is it styled?</AccordionTrigger>
      <AccordionContent>
        Yes. It comes with default styles that you can customize.
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
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that you can customize.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
```

### Angular

```typescript
import { Component } from '@angular/core';
import {
  AccordionComponent,
  AccordionItemComponent,
  AccordionTriggerComponent,
  AccordionContentComponent
} from '@galaxy-ui/angular';

@Component({
  selector: 'app-accordion-demo',
  standalone: true,
  imports: [
    AccordionComponent,
    AccordionItemComponent,
    AccordionTriggerComponent,
    AccordionContentComponent
  ],
  template: `
    <ui-accordion type="single" class="w-full">
      <ui-accordion-item value="item-1">
        <ui-accordion-trigger [isOpen]="item1Open" (click)="item1Open = !item1Open">
          Is it accessible?
        </ui-accordion-trigger>
        <ui-accordion-content [isOpen]="item1Open">
          Yes. It adheres to the WAI-ARIA design pattern.
        </ui-accordion-content>
      </ui-accordion-item>
    </ui-accordion>
  `
})
export class AccordionDemoComponent {
  item1Open = false;
}
```
