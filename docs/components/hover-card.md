# Hover Card

For sighted users to preview content available behind a link.

<ComponentPreview name="HoverCardDemo">
  <template #preview>
    <DemoContainer>
      <HoverCardDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card'
</script>

<template>
  <HoverCard>
    <HoverCardTrigger>Hover</HoverCardTrigger>
    <HoverCardContent>
      <div class="space-y-2">
        <h4 class="text-sm font-semibold">@nextjs</h4>
        <p class="text-sm">The React Framework – created and maintained by @vercel.</p>
      </div>
    </HoverCardContent>
  </HoverCard>
</template>
```

```tsx [React]
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card"

export default function App() {
  return (
    <HoverCard>
      <HoverCardTrigger>Hover</HoverCardTrigger>
      <HoverCardContent>
        <div className="space-y-2">
          <h4 className="text-sm font-semibold">@nextjs</h4>
          <p className="text-sm">The React Framework – created and maintained by @vercel.</p>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { HoverCardComponent } from '@/components/ui/hover-card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HoverCardComponent],
  template: `
    <ui-hover-card>
      <span trigger>Hover</span>
      <div content class="space-y-2">
        <h4 class="text-sm font-semibold">@nextjs</h4>
        <p class="text-sm">The React Framework – created and maintained by @vercel.</p>
      </div>
    </ui-hover-card>
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
npx galaxy-ui@latest add hover-card
```

```bash [pnpm]
pnpm dlx galaxy-ui@latest add hover-card
```

```bash [yarn]
yarn dlx galaxy-ui@latest add hover-card
```

```bash [bun]
bunx galaxy-ui@latest add hover-card
```

:::

## Usage

### Vue

```vue
<script setup lang="ts">
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@galaxy-ui/vue'
</script>

<template>
  <HoverCard>
    <HoverCardTrigger>Hover</HoverCardTrigger>
    <HoverCardContent>
      <div class="space-y-2">
        <h4 class="text-sm font-semibold">@nextjs</h4>
        <p class="text-sm">The React Framework – created and maintained by @vercel.</p>
      </div>
    </HoverCardContent>
  </HoverCard>
</template>
```

### React

```tsx
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@galaxy-ui/react'

export default function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger>Hover</HoverCardTrigger>
      <HoverCardContent>
        <div className="space-y-2">
          <h4 className="text-sm font-semibold">@nextjs</h4>
          <p className="text-sm">The React Framework – created and maintained by @vercel.</p>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
```

### Angular

```typescript
import { Component } from '@angular/core';
import { HoverCardComponent } from '@galaxy-ui/angular';

@Component({
  selector: 'app-hover-card-demo',
  standalone: true,
  imports: [HoverCardComponent],
  template: `
    <ui-hover-card>
      <span trigger>Hover</span>
      <div content class="space-y-2">
        <h4 class="text-sm font-semibold">@nextjs</h4>
        <p class="text-sm">The React Framework – created and maintained by @vercel.</p>
      </div>
    </ui-hover-card>
  `
})
export class HoverCardDemoComponent {}
```
