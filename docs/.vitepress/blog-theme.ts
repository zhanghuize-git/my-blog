// 主题独有配置
import { getThemeConfig } from '@sugarat/theme/node'

// 所有配置项，详见文档: https://theme.sugarat.top/
const blogTheme = getThemeConfig({
  themeColor: 'el-blue',
  author: 'It_Samba',
  friend: [
    {
      nickname: 'It_Samba',
      des: '掘金',
      avatar:
        'https://p26-passport.byteacctimg.com/img/user-avatar/f0034919904137d162dbeb0162df1082~180x180.awebp',
      url: 'https://juejin.cn/user/3702810895451783?utm_source=gold_browser_extension',
    },
    {
      nickname: 'Vitepress',
      des: 'Vite & Vue Powered Static Site Generator',
      avatar: 'https://vitepress.dev/vitepress-logo-large.webp',
      url: 'https://vitepress.dev/',
    },
  ],
})

export { blogTheme }
