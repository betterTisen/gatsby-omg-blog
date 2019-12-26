/*
 * 首页生成
 */
const path = require(`path`)

const postsPerPage = 4 // 单页最大文章数

const Tags = async (graphql, createPage) => {
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 2048
        ) {
          edges {
            node {
              fields {
                slug
              }
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

  let tags = []

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges

  posts.forEach((post, index) => {
    post.node.frontmatter.tags
      ? post.node.frontmatter.tags.map(tag => {
          tags.push(tag)
        })
      : ""
  })
  // tags页生成
  tags = Array.from(new Set(tags))

  for (let idx = 0; idx < tags.length; idx++) {
    const tag = tags[idx]
    const res = await graphql(
      `
        {
          allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { tags: { in: ["${tag}"] } } }
            limit: 2048
          ) {
            edges {
              node {
                fields {
                  slug
                }
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

    if (res.errors) {
      throw res.errors
    }

    tag_length = res.data.allMarkdownRemark.edges.length
    let numPages = Math.ceil(tag_length / postsPerPage)
    Array.from({
      length: numPages
    }).forEach((_, i) => {
      createPage({
        path: `/tags/${tag}/${i + 1}`,
        component: path.resolve("./src/templates/tags.js"),
        context: {
          currentPage: i + 1,
          totalPage: numPages,
          limit: postsPerPage,
          skip: i * postsPerPage,
          postsPerPage: tag_length,
          tag
        }
      })
    })
  }
}

module.exports.Tags = Tags
