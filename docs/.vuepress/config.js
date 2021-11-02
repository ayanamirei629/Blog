// module.exports = {
//     title: '游客17846',
//     description: 'Just do it!',
//     head: [// 会加入<head>中
//       ['link', { rel: 'icon', href: '/logo.ico' }],// 指定浏览器Tab图标
//       ['link', { rel: 'manifest', href: '/manifest.json' }],//PWA
//       ['link', { rel: 'apple-touch-icon', href: '/logo.png' }]// 指定safari浏览器保存书签至桌面图标
//     ],
//     serviceWorker: true,
//     base: '/',// 部署时指定存放的项目的地址
//     markdown: {
//       lineNumbers: true// 代码块行号显示
//     },
//     themeConfig: {
//       logo: '/logo.png',// 主页显示图标
//       nav: [
//         { text: '首页', link: '/' },// 首页地址不想指定的话就不用改，默认指向docs下面的README.md
//         { text: '博文', link: '/blog/' },// 默认指向blog下的README.md
//         { text: 'GitHub', link: 'https://github.com/UAERNAME' }
//       ],
//       lastUpdated: '上次更新时间'// 页面最下方的最后更新时间戳
//     }
//   };
module.exports = {
    title: 'Craig Hu\'s blog',
    description: '一个吃货的网站',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
      ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: '/', // 这是部署到github相关的配置
    markdown: {
      lineNumbers: false // 代码块显示行号
    },
    themeConfig: {
      nav:[ // 导航栏配置
        {text: '个人简介', link: '/accumulate/' },
        {text: '操作说明', link: '/algorithm/'},
        {text: 'Github', link: 'https://github.com/ayanamirei629'}      
      ],
      sidebar: 'auto', // 侧边栏配置
      sidebarDepth: 2, // 侧边栏显示2级
    }
  };