import { defineConfig, type DefaultTheme } from 'vitepress'

export const en = defineConfig({
  description: 'Beautiful, accessible components for Vue, React, and Angular with Radix primitives + Tailwind CSS',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/guide/': { base: '/guide/', items: sidebarGuide() },
      '/components/': { base: '/components/', items: sidebarComponents() }
    },

    editLink: {
      pattern: 'https://github.com/buikevin/galaxy-ui-cli/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025 Bùi Trọng Hiếu (kevinbui)'
    },

    docFooter: {
      prev: 'Previous',
      next: 'Next'
    },

    outline: {
      label: 'On this page'
    },

    lastUpdated: {
      text: 'Last updated',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    },

    langMenuLabel: 'Change language',
    returnToTopLabel: 'Return to top',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Appearance',
    lightModeSwitchTitle: 'Switch to light mode',
    darkModeSwitchTitle: 'Switch to dark mode'
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Guide',
      link: '/guide/introduction',
      activeMatch: '/guide/'
    },
    {
      text: 'Components',
      link: '/components/overview',
      activeMatch: '/components/'
    },
    {
      text: 'v1.0.0',
      items: [
        {
          text: 'Changelog',
          link: 'https://github.com/buikevin/galaxy-ui-cli/blob/main/CHANGELOG.md'
        },
        {
          text: 'Contributing',
          link: '/guide/contributing'
        }
      ]
    }
  ]
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Getting Started',
      collapsed: false,
      items: [
        { text: 'Introduction', link: 'introduction' },
        { text: 'Installation', link: 'installation' },
        { text: 'CLI Usage', link: 'cli-usage' },
        { text: 'Configuration', link: 'configuration' }
      ]
    },
    {
      text: 'Frameworks',
      collapsed: false,
      items: [
        { text: 'Vue', link: 'frameworks/vue' },
        { text: 'React', link: 'frameworks/react' },
        { text: 'Angular', link: 'frameworks/angular' }
      ]
    },
    {
      text: 'Customization',
      collapsed: false,
      items: [
        { text: 'Theming', link: 'theming' },
        { text: 'Dark Mode', link: 'dark-mode' },
        { text: 'Tailwind Config', link: 'tailwind' }
      ]
    }
  ]
}

function sidebarComponents(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Getting Started',
      collapsed: false,
      items: [
        { text: 'Overview', link: 'overview' }
      ]
    },
    {
      text: 'Form Components',
      collapsed: false,
      items: [
        { text: 'Button', link: 'button' },
        { text: 'Checkbox', link: 'checkbox' },
        { text: 'Input', link: 'input' },
        { text: 'Label', link: 'label' },
        { text: 'Radio Group', link: 'radio-group' },
        { text: 'Select', link: 'select' },
        { text: 'Slider', link: 'slider' },
        { text: 'Switch', link: 'switch' },
        { text: 'Tags Input', link: 'tags-input' },
        { text: 'Textarea', link: 'textarea' },
        { text: 'Toggle', link: 'toggle' },
        { text: 'Toggle Group', link: 'toggle-group' }
      ]
    },
    {
      text: 'Layout Components',
      collapsed: false,
      items: [
        { text: 'Accordion', link: 'accordion' },
        { text: 'Aspect Ratio', link: 'aspect-ratio' },
        { text: 'Collapsible', link: 'collapsible' },
        { text: 'Resizable', link: 'resizable' },
        { text: 'Scroll Area', link: 'scroll-area' },
        { text: 'Separator', link: 'separator' },
        { text: 'Tabs', link: 'tabs' }
      ]
    },
    {
      text: 'Navigation Components',
      collapsed: false,
      items: [
        { text: 'Command', link: 'command' },
        { text: 'Context Menu', link: 'context-menu' },
        { text: 'Dropdown Menu', link: 'dropdown-menu' },
        { text: 'Hover Card', link: 'hover-card' },
        { text: 'Menubar', link: 'menubar' },
        { text: 'Navigation Menu', link: 'navigation-menu' },
        { text: 'Popover', link: 'popover' },
        { text: 'Sheet', link: 'sheet' },
        { text: 'Tooltip', link: 'tooltip' }
      ]
    },
    {
      text: 'Feedback Components',
      collapsed: false,
      items: [
        { text: 'Alert Dialog', link: 'alert-dialog' },
        { text: 'Dialog', link: 'dialog' },
        { text: 'Progress', link: 'progress' }
      ]
    },
    {
      text: 'Data Display',
      collapsed: false,
      items: [
        { text: 'Avatar', link: 'avatar' },
        { text: 'Empty', link: 'empty' },
        { text: 'Pagination', link: 'pagination' },
        { text: 'Skeleton', link: 'skeleton' },
        { text: 'Table', link: 'table' },
        { text: 'Toolbar', link: 'toolbar' }
      ]
    },
    {
      text: 'Date & Time',
      collapsed: false,
      items: [
        { text: 'Calendar', link: 'calendar' },
        { text: 'Calendar Range', link: 'calendar-range' }
      ]
    },
    {
      text: 'Typography',
      collapsed: false,
      items: [
        { text: 'Kbd', link: 'kbd' },
        { text: 'Typography', link: 'typography' }
      ]
    }
  ]
}
