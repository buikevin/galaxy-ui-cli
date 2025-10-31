import { defineConfig } from 'vitepress'
import path from 'path'

export const sharedConfig = defineConfig({
  title: 'Galaxy UI',

  vite: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '../')
      }
    }
  },

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3b82f6' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:site_name', content: 'Galaxy UI' }],
    ['meta', { name: 'author', content: 'Bùi Trọng Hiếu (kevinbui)' }],
    ['meta', { name: 'og:author', content: 'Bùi Trọng Hiếu (kevinbui)' }],
  ],

  lastUpdated: true,
  cleanUrls: true,

  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    },
    lineNumbers: true
  },

  themeConfig: {
    logo: '/logo.svg',

    socialLinks: [
      { icon: 'github', link: 'https://github.com/buikevin/galaxy-ui-cli' }
    ],

    search: {
      provider: 'local',
      options: {
        locales: {
          vi: {
            translations: {
              button: {
                buttonText: 'Tìm kiếm',
                buttonAriaLabel: 'Tìm kiếm'
              },
              modal: {
                noResultsText: 'Không tìm thấy kết quả',
                resetButtonTitle: 'Xóa tìm kiếm',
                footer: {
                  selectText: 'để chọn',
                  navigateText: 'để di chuyển',
                  closeText: 'để đóng'
                }
              }
            }
          }
        }
      }
    }
  }
})
