const { createFilePath } = require(`gatsby-source-filesystem`)

const { Main } = require("./gatsby_pages/main")
const { Post } = require("./gatsby_pages/post")
const { Tags } = require("./gatsby_pages/tags")

const { About } = require("./gatsby_pages/options/about")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  await Post(graphql, createPage)
  await Main(graphql, createPage)
  await Tags(graphql, createPage)

  await About(createPage)
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value:`/post${value}`
    })
  }
}
