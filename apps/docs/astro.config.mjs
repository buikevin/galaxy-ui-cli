import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Galaxy UI',
      description: 'A modern UI component library for Angular, React, and Vue',
      social: {
        github: 'https://github.com/buikevin/galaxy-ui-cli',
      },
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'English',
          lang: 'en',
        },
      },
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Introduction', link: '/introduction/' },
            { label: 'Installation', link: '/installation/' },
            { label: 'CLI Usage', link: '/cli-usage/' },
          ],
        },
        {
          label: 'Form Components',
          items: [
            { label: 'Button', link: '/components/button/' },
            { label: 'Input', link: '/components/input/' },
            { label: 'Checkbox', link: '/components/checkbox/' },
            { label: 'Select', link: '/components/select/' },
            { label: 'Calendar', link: '/components/calendar/' },
            { label: 'Radio', link: '/components/form/radio/' },
            { label: 'Switch', link: '/components/form/switch/' },
            { label: 'Slider', link: '/components/form/slider/' },
            { label: 'Rate', link: '/components/form/rate/' },
            { label: 'Button Group', link: '/components/form/button-group/' },
            { label: 'Autocomplete', link: '/components/form/autocomplete/' },
            { label: 'Calendar Range', link: '/components/form/calendar-range/' },
          ],
        },
        {
          label: 'Layout Components',
          items: [
            { label: 'Card', link: '/components/layout/card/' },
            { label: 'Accordion', link: '/components/layout/accordion/' },
            { label: 'Grid', link: '/components/layout/grid/' },
            { label: 'Divider', link: '/components/layout/divider/' },
            { label: 'Splitter', link: '/components/layout/splitter/' },
          ],
        },
        {
          label: 'Navigation Components',
          items: [
            { label: 'Menu', link: '/components/navigation/menu/' },
            { label: 'Breadcrumb', link: '/components/navigation/breadcrumb/' },
            { label: 'Tabs', link: '/components/navigation/tabs/' },
            { label: 'Dropdown', link: '/components/navigation/dropdown/' },
            { label: 'Sidebar', link: '/components/navigation/sidebar/' },
            { label: 'Stepper', link: '/components/navigation/stepper/' },
          ],
        },
        {
          label: 'Data Display Components',
          items: [
            { label: 'Table', link: '/components/data-display/table/' },
            { label: 'Pagination', link: '/components/data-display/pagination/' },
            { label: 'Table Paginated', link: '/components/data-display/table-paginated/' },
            { label: 'List', link: '/components/data-display/list/' },
            { label: 'Tree', link: '/components/data-display/tree/' },
            { label: 'Tag', link: '/components/data-display/tag/' },
            { label: 'Timeline', link: '/components/data-display/timeline/' },
          ],
        },
        {
          label: 'Modal & Overlay Components',
          items: [
            { label: 'Popover', link: '/components/modal-overlay/popover/' },
            { label: 'Drawer', link: '/components/modal-overlay/drawer/' },
            { label: 'Toast', link: '/components/modal-overlay/toast/' },
            { label: 'Tooltip', link: '/components/modal-overlay/tooltip/' },
            { label: 'Progress', link: '/components/modal-overlay/progress/' },
            { label: 'Skeleton', link: '/components/modal-overlay/skeleton/' },
            { label: 'Popconfirm', link: '/components/modal-overlay/popconfirm/' },
            { label: 'Dialog', link: '/components/modal-overlay/dialog/' },
            { label: 'Spinner', link: '/components/modal-overlay/spinner/' },
          ],
        },
        {
          label: 'Other Components',
          items: [
            { label: 'Avatar', link: '/components/other/avatar/' },
            { label: 'Badge', link: '/components/other/badge/' },
            { label: 'Tour', link: '/components/other/tour/' },
            { label: 'Carousel', link: '/components/other/carousel/' },
          ],
        },
        {
          label: 'Guides',
          items: [
            { label: 'Using Icons', link: '/guides/icons/' },
          ],
        },
        {
          label: 'Customization',
          items: [
            { label: 'Theming', link: '/customization/theming/' },
            { label: 'Tailwind Config', link: '/customization/tailwind/' },
          ],
        },
      ],
      customCss: [
        './src/styles/custom.css',
      ],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
