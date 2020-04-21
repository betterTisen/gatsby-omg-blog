/*
 * 首页生成
 */
const path = require(`path`)

const postsPerPage = 6 // 单页最大文章数

const Main = async (graphql, createPage) => {
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 2048
        ) {
          edges {
            node {
              frontmatter {
                title
                tags
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges

  //  create homepage pagination
  const numPages = Math.ceil(posts.length / postsPerPage)

  Array.from({
    length: numPages
  }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/` : `/${i + 1}`,
      component: path.resolve("./src/templates/main.js"),
      context: {
        currentPage: i + 1, // 当前页
        totalPage: numPages, // 总页数
        limit: postsPerPage, // 每页最大文章数
        skip: i * postsPerPage, // 跳过的文章数
      }
    })
  })
}

module.exports.Main = Main
