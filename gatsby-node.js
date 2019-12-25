const { createFilePath } = require(`gatsby-source-filesystem`)

const { Post } = require("./gatsby_pages/post")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  await Post(graphql, createPage)
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value
    })
  }
}
