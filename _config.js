module.exports = {
  // 博客主要信息
  title: `Gatsby OMG Blog`,
  author: `Byeguo`,
  notice: `怀虔诚之态 以拥抱未来`,
  description: `A personal blog used by gatsby`,
  siteUrl: `https://www.byeguo.cn`,

  // post页配置项
  post: {
    pageviews: true, // 文章阅读量

    // 目录
    cat: {
      enable: true,
    },
  },

  // 侧边功能
  side: {
    message: true,
    about: true,
    github: {
      enable: true,
      username: `betterTisen`, //用于读取仓库项目信息
    },
    // 底部联系方式
    footer: {
      qq: ``,
      github: `https://github.com/betterTisen"`,
      mail: ``,
    },
  },

  // footer信息
  foot: {
    beian: "皖ICP备19018433号",
  },

  // 评论
  // 查看文档（https://valine.js.org/）
  valine: {
    enable: true,
    appId: "",
    appKey: "",
    placeholder: "随便说点什么吧...",
    avatar: "robohash",
  },

  // 统计
  statistics: {
    homePage: true,
  },

  // 其他
  pathPrefix: "", // 静态资源访问位置（仓库名）（/gatsby-omg-blog/）
}
