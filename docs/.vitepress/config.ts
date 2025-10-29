import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Galaxy UI',
  description: 'Beautiful, accessible components for Vue, React, and Angular with Radix primitives + Tailwind CSS',

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3b82f6' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:locale', content: 'en' }],
    ['meta', { name: 'og:site_name', content: 'Galaxy UI' }],
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',

    nav: [
      { text: 'Guide', link: '/guide/introduction' },
      { text: 'Components', link: '/components/overview' },
      {
        text: 'v1.0.0',
        items: [
          { text: 'Changelog', link: 'https://github.com/buikevin/galaxy-ui-cli/blob/main/CHANGELOG.md' },
          { text: 'Contributing', link: '/guide/contributing' }
        ]
      }
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Introduction', link: '/guide/introduction' },
            { text: 'Installation', link: '/guide/installation' },
            { text: 'CLI Usage', link: '/guide/cli-usage' },
            { text: 'Configuration', link: '/guide/configuration' },
          ]
        },
        {
          text: 'Frameworks',
          items: [
            { text: 'Vue', link: '/guide/frameworks/vue' },
            { text: 'React', link: '/guide/frameworks/react' },
            { text: 'Angular', link: '/guide/frameworks/angular' },
          ]
        },
        {
          text: 'Customization',
          items: [
            { text: 'Theming', link: '/guide/theming' },
            { text: 'Dark Mode', link: '/guide/dark-mode' },
            { text: 'Tailwind Config', link: '/guide/tailwind' },
          ]
        }
      ],
      '/components/': [
        {
          text: 'Overview',
          items: [
            { text: 'All Components', link: '/components/overview' },
            { text: 'Accessibility', link: '/components/accessibility' },
          ]
        },
        {
          text: 'Vue Components',
          items: [
            {
              text: 'Form',
              collapsed: false,
              items: [
                { text: 'Button', link: '/components/vue/button' },
                { text: 'Input', link: '/components/vue/input' },
                { text: 'Select', link: '/components/vue/select' },
                { text: 'Checkbox', link: '/components/vue/checkbox' },
                { text: 'Radio Group', link: '/components/vue/radio-group' },
                { text: 'Switch', link: '/components/vue/switch' },
                { text: 'Slider', link: '/components/vue/slider' },
                { text: 'Label', link: '/components/vue/label' },
                { text: 'Form', link: '/components/vue/form' },
                { text: 'Textarea', link: '/components/vue/textarea' },
              ]
            },
            {
              text: 'Layout',
              collapsed: false,
              items: [
                { text: 'Card', link: '/components/vue/card' },
                { text: 'Separator', link: '/components/vue/separator' },
                { text: 'Accordion', link: '/components/vue/accordion' },
                { text: 'Tabs', link: '/components/vue/tabs' },
                { text: 'Dialog', link: '/components/vue/dialog' },
              ]
            },
            {
              text: 'Feedback',
              collapsed: false,
              items: [
                { text: 'Alert', link: '/components/vue/alert' },
                { text: 'Toast', link: '/components/vue/toast' },
                { text: 'Progress', link: '/components/vue/progress' },
                { text: 'Skeleton', link: '/components/vue/skeleton' },
                { text: 'Badge', link: '/components/vue/badge' },
              ]
            },
            {
              text: 'Navigation',
              collapsed: false,
              items: [
                { text: 'Dropdown Menu', link: '/components/vue/dropdown-menu' },
                { text: 'Navigation Menu', link: '/components/vue/navigation-menu' },
                { text: 'Breadcrumb', link: '/components/vue/breadcrumb' },
                { text: 'Popover', link: '/components/vue/popover' },
                { text: 'Tooltip', link: '/components/vue/tooltip' },
              ]
            }
          ]
        },
        {
          text: 'React Components',
          items: [
            {
              text: 'Form',
              collapsed: true,
              items: [
                { text: 'Button', link: '/components/react/button' },
                { text: 'Input', link: '/components/react/input' },
                // More React components...
              ]
            }
          ]
        },
        {
          text: 'Angular Components',
          items: [
            {
              text: 'Form',
              collapsed: true,
              items: [
                { text: 'Button', link: '/components/angular/button' },
                { text: 'Input', link: '/components/angular/input' },
                // More Angular components...
              ]
            }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/buikevin/galaxy-ui-cli' }
    ],

    search: {
      provider: 'local'
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025 Galaxy UI'
    },

    editLink: {
      pattern: 'https://github.com/buikevin/galaxy-ui-cli/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    }
  },

  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    },
    codeTransformers: [
      // Add code highlighting for Vue, React, Angular
    ]
  }
})
