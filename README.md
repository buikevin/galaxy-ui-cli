# 🌌 Galaxy UI CLI

> A modern Angular component library with shadcn/ui's copy-paste philosophy and Nebular's beautiful design.

[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue.svg)](https://www.typescriptlang.org/)
[![Angular](https://img.shields.io/badge/Angular-20.3-red.svg)](https://angular.io/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8.svg)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## ✨ Features

- 🎨 **43 Production-Ready Components** - Complete component library covering all UI needs
- 📋 **Copy-Paste Philosophy** - Own your code, no npm dependencies
- 🌙 **Dark Mode** - First-class dark theme support
- ⚡ **Angular 20 + Signals** - Modern reactive programming
- 🎯 **TypeScript Strict** - Full type safety
- ♿ **Accessible** - ARIA labels and keyboard navigation
- 📱 **Responsive** - Mobile-first design
- 🎨 **6 Status Colors** - Basic, Primary, Success, Info, Warning, Danger
- 📏 **5 Size Variants** - Tiny, Small, Medium, Large, Giant

## 🚀 Quick Start

```bash
# Initialize Galaxy UI in your Angular project
npx galaxy-ui-cli init

# Add components
galaxy-ui add button
galaxy-ui add button input card
galaxy-ui add form    # Add all 12 form components
galaxy-ui add --all   # Add all 43 components
```

## 📦 Components

### Form Components (12)
- **Button** (`gButton`) - Versatile button with 6 statuses, 5 sizes, 3 appearances
- **Input** (`g-input`) - Text input with label, hints, and error messages
- **Checkbox** (`g-checkbox`) - Checkbox with indeterminate state support
- **Select** (`g-select`) - Custom dropdown with search functionality
- **Calendar** (`g-calendar`) - Full-featured date picker with navigation
- **Radio** (`g-radio`) - Radio button group with single selection
- **Switch** (`g-switch`) - Toggle switch with smooth animation
- **Slider** (`g-slider`) - Range slider with min/max and step support
- **Rate** (`g-rate`) - Star rating with half star support
- **Button Group** (`g-button-group`) - Button group with single/multiple selection
- **Autocomplete** (`g-autocomplete`) - Autocomplete input with search and suggestions
- **Calendar Range** (`g-calendar-range`) - Date range picker with start and end dates

### Layout Components (5)
- **Card** (`g-card`) - Container with header, body, and footer sections
- **Accordion** (`g-accordion`) - Collapsible sections with expand/collapse
- **Grid** (`g-grid`) - 12-column responsive grid system
- **Divider** (`g-divider`) - Horizontal or vertical separator
- **Splitter** (`g-splitter`) - Resizable split panes with drag handles

### Navigation Components (6)
- **Menu** (`g-menu`) - Sidebar navigation with icons and badges
- **Breadcrumb** (`g-breadcrumb`) - Page location navigation trail
- **Tabs** (`g-tabs`) - Tabbed content organization
- **Dropdown** (`g-dropdown`) - Action menus and context menus
- **Sidebar** (`g-sidebar`) - Layout with collapsible sidebar
- **Stepper** (`g-stepper`) - Multi-step wizards and forms

### Data Display Components (7)
- **Table** (`g-table`) - Data table with sorting, filtering, and selection
- **Pagination** (`g-pagination`) - Pagination controls for data navigation
- **Table Paginated** (`g-table-paginated`) - Data table with built-in pagination
- **List** (`g-list`) - Versatile list component for displaying data
- **Tree** (`g-tree`) - Hierarchical tree structure with expand/collapse
- **Tag** (`g-tag`) - Tag component for labels and categorization
- **Timeline** (`g-timeline`) - Timeline component for displaying chronological events

### Modal & Overlay Components (9)
- **Popover** (`g-popover`) - Popover component for contextual information
- **Drawer** (`g-drawer`) - Drawer component with slide-in animation (shadcn style)
- **Toast** (`g-toast`) - Toast notification component with service (antd style)
- **Tooltip** (`g-tooltip`) - Tooltip component for hover information (shadcn style)
- **Progress** (`g-progress`) - Progress bar and circle component (antd style)
- **Skeleton** (`g-skeleton`) - Skeleton loading placeholder component (antd style)
- **Popconfirm** (`g-popconfirm`) - Confirmation dialog component (antd style)
- **Dialog** (`g-dialog`) - Modal dialog component
- **Spinner** (`g-spinner`) - Loading spinner component with multiple styles

### Other Components (4)
- **Avatar** (`g-avatar`) - Avatar component for user profile pictures with group support
- **Badge** (`g-badge`) - Badge component for counts and status indicators with ribbon variant
- **Tour** (`g-tour`) - Tour component for user onboarding and feature introduction (antd style)
- **Carousel** (`g-carousel`) - Carousel component for image and content slides with autoplay (antd style)

## 💡 Philosophy

Galaxy UI CLI follows the **copy-paste component** approach pioneered by shadcn/ui:

- ✅ Components are **copied directly** into your project
- ✅ You have **full ownership** of the code
- ✅ **Complete control** to customize as needed
- ✅ **No version conflicts** or dependency issues
- ✅ Built with **Tailwind CSS** for maximum flexibility

Why copy-paste instead of npm install?
- **Transparency** - See exactly what code runs
- **Customization** - Modify anything without ejecting
- **Control** - No breaking changes from updates
- **Learning** - Understand how components work

## 🎨 Design System

Inspired by **Nebular's** beautiful, professional aesthetic:

### Status Colors
```typescript
basic    // Neutral, default actions
primary  // Main brand actions (Blue)
success  // Positive outcomes (Green)
info     // Informational (Cyan)
warning  // Caution states (Amber)
danger   // Destructive actions (Red)
```

### Size System
```typescript
tiny   // Dense interfaces - 12px text
small  // Compact - 14px text
medium // Default (recommended) - 16px text
large  // Prominent - 18px text
giant  // Maximum impact - 20px text
```

## 📚 Documentation

Full documentation available at: *[Coming Soon]*

## 🏗️ Project Structure

```
galaxy-ui-cli/
├── packages/
│   ├── angular/         # 43 Angular components (g-* naming)
│   ├── core/            # Shared utilities (cn() helper)
│   ├── cli/             # CLI tool (init, add commands)
│   └── tailwind-preset/ # Shared Tailwind configuration
└── apps/
    └── docs/            # Documentation site (Astro + Starlight)
```

## 📖 Usage Examples

### Button Component

```typescript
import { Component } from '@angular/core';
import { ButtonDirective } from './components/ui/button.component';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [ButtonDirective],
  template: `
    <!-- Primary button -->
    <button gButton status="primary" size="md">
      Click me
    </button>

    <!-- Outline danger button -->
    <button gButton
            status="danger"
            appearance="outline"
            size="large">
      Delete
    </button>

    <!-- Ghost round button -->
    <button gButton
            appearance="ghost"
            shape="round">
      ✓
    </button>
  `
})
export class ExampleComponent {}
```

### Input Component

```typescript
<g-input
  label="Email"
  type="email"
  placeholder="Enter your email"
  hint="We will never share your email"
  prefixIcon="📧"
  [(ngModel)]="email">
</g-input>
```

### Calendar Component

```typescript
<g-calendar
  [selectedDate]="selectedDate()"
  [minDate]="today"
  status="primary"
  (selectedDateChange)="selectedDate.set($event)">
</g-calendar>
```

## 🛠️ Development

This is an Nx monorepo managed with Bun.

### Prerequisites

- Node.js 18+
- Bun (recommended) or npm/pnpm/yarn

### Setup

```bash
# Clone repository
git clone <your-repo-url>
cd galaxy-ui-cli

# Install dependencies
bun install

# Build all packages
bun nx run-many -t build

# Build specific package
bun nx build cli
bun nx build angular

# Run documentation site
cd apps/docs
bun run dev
```

### Project Commands

```bash
# Build CLI
bun nx build cli

# Test CLI locally
bun run packages/cli/dist/bin.js --help

# Lint all projects
bun nx run-many -t lint

# View dependency graph
bun nx graph
```

## 📦 Packages

| Package | Description | Status |
|---------|-------------|--------|
| `@galaxy-ui-cli/angular` | 43 Angular components | ✅ Complete |
| `@galaxy-ui-cli/core` | Shared utilities (cn helper) | ✅ Complete |
| `@galaxy-ui-cli/cli` | CLI tool (init, add commands) | ✅ Complete |
| `@galaxy-ui-cli/tailwind-preset` | Tailwind configuration | ✅ Complete |

## 🗺️ Roadmap

### ✅ Phase 1: Foundation (Complete)
- ✅ Nx monorepo setup
- ✅ Package structure
- ✅ 43 production-ready components
- ✅ `g-*` naming convention
- ✅ Dark mode support

### ✅ Phase 2: CLI Tool (Complete)
- ✅ `galaxy-ui init` command
- ✅ `galaxy-ui add` command
- ✅ Component registry (43 components)
- ✅ Framework detection
- ✅ Package manager detection
- ✅ Interactive prompts

### ✅ Phase 3: Documentation (Complete)
- ✅ Astro + Starlight documentation site
- ✅ Component documentation pages
- ✅ Usage examples
- ✅ Installation guides

### 🚧 Phase 4: Publishing (In Progress)
- ⏸️ Final testing with real Angular projects
- ⏸️ npm package publishing
- ⏸️ Documentation site deployment
- ⏸️ CI/CD setup

### 🔮 Phase 5: Multi-Framework (Future)
- ⏸️ React support
- ⏸️ Vue support
- ⏸️ Unified CLI for all frameworks

## 📊 Project Stats

- **Components**: 43 production-ready (12 Form + 5 Layout + 6 Navigation + 7 Data Display + 9 Modal & Overlay + 4 Other)
- **Code**: ~20,000+ lines
- **CLI Commands**: 2 (init, add)
- **Documentation**: 9+ pages
- **Status**: 99% complete, ready for testing

## 🤝 Contributing

Contributions are welcome! This project is nearing completion and will be open for contributions soon.

### Development Setup

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 💡 Inspiration

- **[shadcn/ui](https://ui.shadcn.com/)** - Copy-paste philosophy
- **[Nebular](https://akveo.github.io/nebular/)** - Design inspiration
- **[Headless UI](https://headlessui.com/)** - Multi-framework approach

## 📄 License

MIT © 2025

## 🔗 Links

- **Documentation**: [Coming Soon]
- **npm Package**: [Coming Soon]
- **Changelog**: See [CHANGELOG.md](CHANGELOG.md)

---

**Built with ❤️ using Angular, TypeScript, and Tailwind CSS**
