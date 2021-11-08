// .vuepress/config.js
module.exports = 
{
  themeConfig: 
  {
    nav: 
    [
      { text: "指南", link: "/guide/", icon: "creative" },
      { text: "配置", link: "/config/", icon: "config" },
      { text: "常见问题", link: "https://www.baidu.com/", icon: "question" },
      {
        text: "基础",
        icon: "info",
        prefix: "/zh/basic/",
        items: [
          { text: "Markdown", link: "markdown/", icon: "markdown" },
          { text: "VuePress", link: "vuepress/", icon: "vue" },
        ],
      },
      {
        text: "项目",
        icon: "info",
        items: [
          {
            text: "GITLAB地址",
            link: "https://gitlab.datacvg.com/",
          },
          {
            text: "项目地址",
            link: "https://gitlab.datacvg.com/",
          },
          {
            text: "GIT部署",
            link: "https://juejin.cn/post/6844904071535525901",
          },
          {
            text: "插件",
            icon: "plugin",
            items: [
              {
                text: "插件1",
                link: "a",
              },
              {
                text: "插件2",
                link: "b",
              },
              {
                text: "插件3",
                link: "c",
              },
              {
                text: "插件4",
                link: "d",
              },

            ],
          },
        ],
      },
    ],
    sidebar: 'auto', // 侧边栏配置
  },
};