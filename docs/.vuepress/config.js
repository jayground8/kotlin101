import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'

export default defineUserConfig({
  base: 'kotlin101',
  lang: 'ko-KR',
  title: 'Kotlin 101',
  description: 'just to remember what I learned',
  theme: defaultTheme({
    // collapsible sidebar
    sidebar: [
        {
            text: 'Basic',
            link: '/basic/',
        }
    ]
  }),
})

