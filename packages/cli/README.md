# @galaxy-ui-cli/cli

Galaxy UI CLI - A shadcn/ui-style CLI tool for adding Galaxy UI components to your Angular projects.

## Features

- 🚀 Quick initialization with `galaxy init`
- 📦 Easy component installation with `galaxy add`
- 🎨 16 production-ready components
- 🌙 Dark mode support
- 📱 Responsive design
- ♿ Accessibility-focused
- 🎯 TypeScript strict mode

## Installation

```bash
# Global installation (recommended for new projects)
npm install -g @galaxy-ui-cli/cli

# Or use npx (no installation needed)
npx @galaxy-ui-cli/cli init
```

## Usage

### Initialize Galaxy UI in your project

```bash
# Interactive mode
galaxy init

# Skip prompts (use defaults)
galaxy init -y
```

This will:
- Detect your framework (Angular)
- Detect your package manager (npm, pnpm, yarn, bun)
- Install required dependencies (lucide-angular, clsx, tailwind-merge)
- Create component directory structure
- Setup Tailwind CSS configuration
- Create utility files

### Add components

```bash
# Add single component
galaxy add button

# Add multiple components
galaxy add button input card

# Add all form components
galaxy add form

# Add all components
galaxy add --all

# Interactive mode (select components from a list)
galaxy add
```

### Component Groups

Components are organized into three groups:

**Form Components:**
- `button` - Versatile button with 6 status variants and 5 sizes
- `input` - Text input with label, hints, and error messages
- `checkbox` - Checkbox with indeterminate state support
- `select` - Custom dropdown with search functionality
- `calendar` - Full-featured date picker with range selection

**Layout Components:**
- `card` - Container with header, body, and footer sections
- `accordion` - Collapsible sections with expand/collapse
- `grid` - 12-column responsive grid system
- `divider` - Horizontal or vertical separator
- `splitter` - Resizable split panes with drag handles

**Navigation Components:**
- `menu` - Sidebar navigation with icons and badges
- `breadcrumb` - Page location navigation trail
- `tabs` - Tabbed content organization
- `dropdown` - Action menus and context menus
- `sidebar` - Layout with collapsible sidebar
- `stepper` - Multi-step wizards and forms

## Configuration

Galaxy UI stores its configuration in `galaxy.config.json` at the root of your project:

```json
{
  "framework": "angular",
  "componentsPath": "src/app/components/ui",
  "utilsPath": "src/lib/utils.ts",
  "tailwindConfig": "tailwind.config.js"
}
```

### Configuration Options

- `framework` - The framework you're using (currently only "angular" is supported)
- `componentsPath` - Where to place component files (default: "src/app/components/ui")
- `utilsPath` - Where to place the utils file (default: "src/lib/utils.ts")
- `tailwindConfig` - Path to Tailwind config file (default: "tailwind.config.js")

## Dependencies

Galaxy UI requires the following dependencies:

- `lucide-angular` ^0.548.0 - Icon library
- `clsx` ^2.1.1 - Utility for constructing className strings
- `tailwind-merge` ^3.3.1 - Utility for merging Tailwind CSS classes

## Example: Adding a Button Component

1. Initialize Galaxy UI:
```bash
galaxy init
```

2. Add the button component:
```bash
galaxy add button
```

3. Import in your Angular component:
```typescript
import { Component } from '@angular/core';
import { ButtonDirective } from './components/ui/button.component';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [ButtonDirective],
  template: `
    <button gButton status="primary" size="md">
      Click me
    </button>
  `
})
export class ExampleComponent {}
```

## Component Naming Convention

All Galaxy UI components use the `g-*` prefix for selectors:

- Attribute directive: `gButton` (e.g., `<button gButton>`)
- Components: `g-input`, `g-card`, `g-menu`, etc. (e.g., `<g-input>`)

## Troubleshooting

### "Galaxy UI is not initialized"

Run `galaxy init` first to initialize the project.

### "Could not detect framework"

Make sure you're in an Angular project with `@angular/core` installed.

### "Could not find Galaxy UI source components"

Make sure the Galaxy UI packages are installed in your monorepo or as npm packages.

## Development

To build the CLI:

```bash
nx build cli
```

To link for local development:

```bash
cd packages/cli
npm link
```

## License

MIT
