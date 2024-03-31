import { defineConfig } from 'vitepress'
import { set_sidebar } from './utils/auto_sidebar.mjs'	// 改成自己的路径
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "我的项目",
  base: "/docs-demo/",
  description: "A VitePress Site",
  themeConfig: {
    outlineTitle: "目录",
    outline: [2,6],
    //sidebar: false, // 关闭侧边栏
    //aside: "left", // 设置右侧侧边栏在左侧显示
     
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: 'sql', link: '/vue/sql/' },
      { text: 'E3操作文档', link: '/vue/e3/' },
      { text: 'E3POS操作文档', link: '/vue/e3pos/' },
      { text: 'MS操作文档', link: '/markdown-examples' },
      { text: 'MS365操作文档', link: '/markdown-examples' }
     
    ]
  
    ,

    sidebar: {
      // 当用户位于 `guide` 目录时，会显示此侧边栏
      '/vue/e3pos/': [
        {
          text: 'E3POS',
          items: [
            { text: 'Index', link: '/vue/e3pos/' },
            { text: '软件登陆', link: '/vue/e3pos/one' },
            { text: '会员管理', link: '/vue/e3pos/two' },
            { text: '零售管理', link: '/vue/e3pos/three' },
            { text: '库存管理', link: '/vue/e3pos/four' },
            { text: '报表中心', link: '/vue/e3pos/five' },
            { text: '考勤管理', link: '/vue/e3pos/six' },
            { text: '系统管理', link: '/vue/e3pos/seven' }
          ]
        }
      ],

      // 当用户位于 `config` 目录时，会显示此侧边栏
      '/vue/sql/': [
        {
          text: 'SQL',
          items: [
            { text: 'Index', link: '/vue/sql/' },
            { text: 'Index', link: '/vue/sql/one' },
            { text: 'Index', link: '/vue/sql/two' }
           
          ]
        }
      ]
    },
   

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer: {
      copyright: 'Copyright © 2022-present Evan You'
    }
  }
})