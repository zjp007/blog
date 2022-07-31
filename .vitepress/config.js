module.exports = {
  title: "react-ant-admin", // 顶部左侧标题
  base: "/doc-react-ant-admin/", // 项目的根路径
  head: [
    // 设置 描述 和 关键词
    [
      "meta",
      { name: "keywords", content: "react react-admin ant 后台管理系统" },
    ],
    [
      "meta",
      {
        name: "description",
        content:
          "此框架使用与二次开发，前端框架使用 react，UI 框架使用 ant-design，全局数据状态管理使用 redux，ajax 使用库为 axios。用于快速搭建中后台页面。",
      },
    ],
  ],
  themeConfig: {
    sidebar: {
      // 侧边栏
      "/": [
        {
          text: "介绍",
          children: [
            { text: "什么是 react-ant-admin？", link: "/" },
            { text: "开始使用", link: "/guide/start" },
            { text: "文件配置", link: "/guide/configuration" },
            { text: "路径配置", link: "/guide/path" },
          ],
        },
      ],
    },
    nav: [
      // 顶部右侧导航栏
      { text: "介绍", link: "/", activeMatch: "^/$|^/guide/" },
      {
        text: "预览地址",
        link: "https://azhengpersonalblog.top/react-ant-admin/",
      },
      {
        text: "更多地址",
        link: "/contact/",
      },
    ],
  },
};