# Collapsible

An interactive component which expands/collapses a panel.

<ComponentPreview name="CollapsibleDemo">
  <template #preview>
    <DemoContainer>
      <CollapsibleDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible'
</script>

<template>
  <Collapsible>
    <CollapsibleTrigger>Can I use this in my project?</CollapsibleTrigger>
    <CollapsibleContent>
      Yes. Free to use for personal and commercial projects.
    </CollapsibleContent>
  </Collapsible>
</template>
```

```tsx [React]
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"

export default function App() {
  return (
    <Collapsible>
      <CollapsibleTrigger>Can I use this in my project?</CollapsibleTrigger>
      <CollapsibleContent>
        Yes. Free to use for personal and commercial projects.
      </CollapsibleContent>
    </Collapsible>
  )
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { CollapsibleComponent } from '@/components/ui/collapsible';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CollapsibleComponent],
  template: `
    <ui-collapsible>
      <ui-collapsible-trigger>Can I use this in my project?</ui-collapsible-trigger>
      <ui-collapsible-content>
        Yes. Free to use for personal and commercial projects.
      </ui-collapsible-content>
    </ui-collapsible>
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
npx galaxy-ui-cli@latest add collapsible
```

```bash [pnpm]
pnpm dlx galaxy-ui-cli@latest add collapsible
```

```bash [yarn]
yarn dlx galaxy-ui-cli@latest add collapsible
```

```bash [bun]
bunx galaxy-ui-cli@latest add collapsible
```

:::

## Usage

### Vue

```vue
<script setup lang="ts">
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui'
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<template>
  <Collapsible v-model:open="isOpen">
    <CollapsibleTrigger>Can I use this in my project?</CollapsibleTrigger>
    <CollapsibleContent>
      Yes. Free to use for personal and commercial projects.
    </CollapsibleContent>
  </Collapsible>
</template>
```

### React

```tsx
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui'

export default function CollapsibleDemo() {
  return (
    <Collapsible>
      <CollapsibleTrigger>Can I use this in my project?</CollapsibleTrigger>
      <CollapsibleContent>
        Yes. Free to use for personal and commercial projects.
      </CollapsibleContent>
    </Collapsible>
  )
}
```

### Angular

```typescript
import { Component } from '@angular/core';
import {
  CollapsibleComponent,
  CollapsibleTriggerComponent,
  CollapsibleContentComponent
} from '@/components/ui';

@Component({
  selector: 'app-collapsible-demo',
  standalone: true,
  imports: [CollapsibleComponent, CollapsibleTriggerComponent, CollapsibleContentComponent],
  template: `
    <ui-collapsible [open]="isOpen" (openChange)="isOpen = $event">
      <ui-collapsible-trigger (triggerClick)="isOpen = !isOpen">
        Can I use this in my project?
      </ui-collapsible-trigger>
      <ui-collapsible-content [isOpen]="isOpen">
        Yes. Free to use for personal and commercial projects.
      </ui-collapsible-content>
    </ui-collapsible>
  `
})
export class CollapsibleDemoComponent {
  isOpen = false;
}
```
