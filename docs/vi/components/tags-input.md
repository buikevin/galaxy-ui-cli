# Tags Input

Input field for entering multiple tags or values.


<ComponentPreview name="TagsInputDemo">
  <template #preview>
    <DemoContainer>
      <TagsInputDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group
```vue [Vue]
<template><div>Demo</div></template>
```

```tsx [React]
export default function App() { return <div>Demo</div> }
```

```typescript [Angular]
@Component({ template: `<div>Demo</div>` })
export class DemoComponent {}
```
:::

  </template>
</ComponentPreview>
## Cài đặt

::: code-group
```bash [React]
npx galaxy-ui add tags-input
```

```bash [Vue]
npx galaxy-ui add tags-input
```

```bash [Angular]
npx galaxy-ui add tags-input
```
:::

## Usage

::: code-group
```tsx [React]
import { TagsInput } from '@/components/tags-input'
import { useState } from 'react'

export default function TagsInputDemo() {
  const [tags, setTags] = useState<string[]>(['react', 'vue'])

  return (
    <TagsInput
      value={tags}
      onChange={setTags}
      placeholder="Add tag..."
    />
  )
}
```

```vue [Vue]
<script setup lang="ts">
import { ref } from 'vue'
import { TagsInput } from '@/components/tags-input'

const tags = ref(['react', 'vue'])
</script>

<template>
  <TagsInput
    v-model="tags"
    placeholder="Add tag..."
  />
</template>
```

```typescript [Angular]
import { Component } from '@angular/core'
import { TagsInputComponent } from '@/components/tags-input'

@Component({
  selector: 'app-tags-input-demo',
  standalone: true,
  imports: [TagsInputComponent],
  template: `
    <ui-tags-input
      [value]="tags"
      (valueChange)="tags = $event"
      placeholder="Add tag..."
    />
  `
})
export class TagsInputDemo {
  tags = ['react', 'vue']
}
```
:::

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string[]` | `[]` | Array of tag values |
| `onChange` | `(tags: string[]) => void` | - | Callback when tags change |
| `onTagAdd` | `(tag: string) => void` | - | Callback when tag is added |
| `onTagRemove` | `(tag: string) => void` | - | Callback when tag is removed |
| `placeholder` | `string` | `'Add tag...'` | Placeholder text |

## Features

- Add tags by pressing Enter
- Remove last tag with Backspace
- Click X button to remove individual tags
- Duplicate prevention
- Focus ring styling

## Accessibility

- Proper keyboard navigation
- Screen reader support for tag removal
- Focus management
