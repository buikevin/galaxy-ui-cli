# Calendar Range

A date range picker calendar component for selecting a start and end date.

<ComponentPreview name="CalendarRangeDemo">
  <template #preview>
    <DemoContainer>
      <CalendarRangeDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group
```vue [Vue]
<script setup lang="ts">
import { ref } from 'vue'
const range = ref({ start: new Date(), end: new Date() })
</script>

<template>
  <CalendarRange v-model="range" />
</template>
```

```tsx [React]
import { CalendarRange } from '@/components/ui/calendar-range'
export default function App() {
  return <CalendarRange />
}
```

```typescript [Angular]
@Component({
  template: `<ui-calendar-range [(range)]="range" />`
})
export class DemoComponent {
  range = { start: new Date(), end: new Date() };
}
```
:::

  </template>
</ComponentPreview>

## Installation

::: code-group
```bash [React]
npx galaxy-ui add calendar-range
```

```bash [Vue]
npx galaxy-ui add calendar-range
```

```bash [Angular]
npx galaxy-ui add calendar-range
```
:::

## Usage

::: code-group
```tsx [React]
import { CalendarRange } from '@/components/calendar-range'
import { useState } from 'react'
import { DateRange } from 'react-day-picker'

export default function CalendarRangeDemo() {
  const [range, setRange] = useState<DateRange | undefined>({
    from: new Date(),
    to: undefined,
  })

  return (
    <CalendarRange
      selected={range}
      onSelect={setRange}
      className="rounded-md border"
    />
  )
}
```

```vue [Vue]
<script setup lang="ts">
import { ref } from 'vue'
import { CalendarRange } from '@/components/calendar-range'

const range = ref({
  start: new Date(),
  end: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
})
</script>

<template>
  <CalendarRange
    v-model="range"
    class="rounded-md border"
  />
</template>
```
:::

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `selected` | `DateRange` | - | Selected date range |
| `onSelect` | `(range: DateRange) => void` | - | Callback when range changes |
| `disabled` | `Date[] \| ((date: Date) => boolean)` | - | Dates that should be disabled |

## Features

- Select start and end dates
- Visual indication of selected range
- Hover preview of range selection
- Keyboard navigation support
