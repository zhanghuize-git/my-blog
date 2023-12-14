import { defineConfig } from 'vitepress'

// 导入主题的配置
import { blogTheme } from './blog-theme'

// Vitepress 默认配置
// 详见文档：https://vitepress.dev/reference/site-config
export default defineConfig({
  // 继承博客主题(@sugarat/theme)
  extends: blogTheme,
  lang: 'zh-cn',
  title: '桑巴的博客',
  head: [['link', { rel: 'icon', href: '/supervip.svg' }]],
  lastUpdated: true,
  themeConfig: {
    // lastUpdatedText: '上次更新于',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/zhanghuize-git' },
    ],
    nav: [
      { text: '首页', link: '/' },
      { text: '留言板', link: '/' },
      { text: '关于作者', link: '/' }
    ],
  },
})
