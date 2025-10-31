import { defineConfig, type DefaultTheme } from 'vitepress'

export const vi = defineConfig({
  description: 'Thư viện component đẹp, dễ tiếp cận cho Vue, React và Angular với Radix primitives + Tailwind CSS',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/vi/guide/': { base: '/vi/guide/', items: sidebarGuide() },
      '/vi/components/': { base: '/vi/components/', items: sidebarComponents() }
    },

    editLink: {
      pattern: 'https://github.com/buikevin/galaxy-ui-cli/edit/main/docs/:path',
      text: 'Chỉnh sửa trang này trên GitHub'
    },

    footer: {
      message: 'Phát hành theo Giấy phép MIT.',
      copyright: 'Bản quyền © 2025 Bùi Trọng Hiếu (kevinbui)'
    },

    docFooter: {
      prev: 'Trang trước',
      next: 'Trang sau'
    },

    outline: {
      label: 'Trong trang này'
    },

    lastUpdated: {
      text: 'Cập nhật lần cuối',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    },

    langMenuLabel: 'Đổi ngôn ngữ',
    returnToTopLabel: 'Quay lại đầu trang',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Giao diện',
    lightModeSwitchTitle: 'Chuyển sang chế độ sáng',
    darkModeSwitchTitle: 'Chuyển sang chế độ tối'
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Hướng dẫn',
      link: '/vi/guide/introduction',
      activeMatch: '/vi/guide/'
    },
    {
      text: 'Components',
      link: '/vi/components/overview',
      activeMatch: '/vi/components/'
    },
    {
      text: 'v1.0.0',
      items: [
        {
          text: 'Changelog',
          link: 'https://github.com/buikevin/galaxy-ui-cli/blob/main/CHANGELOG.md'
        },
        {
          text: 'Đóng góp',
          link: '/vi/guide/contributing'
        }
      ]
    }
  ]
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Bắt đầu',
      collapsed: false,
      items: [
        { text: 'Giới thiệu', link: 'introduction' },
        { text: 'Cài đặt', link: 'installation' },
        { text: 'Sử dụng CLI', link: 'cli-usage' },
        { text: 'Cấu hình', link: 'configuration' }
      ]
    },
    {
      text: 'Framework',
      collapsed: false,
      items: [
        { text: 'Vue', link: 'frameworks/vue' },
        { text: 'React', link: 'frameworks/react' },
        { text: 'Angular', link: 'frameworks/angular' }
      ]
    },
    {
      text: 'Tùy chỉnh',
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
      text: 'Bắt đầu',
      collapsed: false,
      items: [
        { text: 'Tổng quan', link: 'overview' }
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
