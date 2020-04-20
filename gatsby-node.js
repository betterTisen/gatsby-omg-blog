const { createFilePath } = require(`gatsby-source-filesystem`)

const { side } = require("./_config")

const { Main } = require("./gatsby_pages/main")
const { Post } = require("./gatsby_pages/post")
const { Tags } = require("./gatsby_pages/tags")

const { About } = require("./gatsby_pages/options/about")
const { Message } = require("./gatsby_pages/options/message")
const { Github } = require("./gatsby_pages/options/github")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  await Post(graphql, createPage)
  await Main(graphql, createPage)
  await Tags(graphql, createPage)

  side.message && (await Message(createPage))
  side.about && (await About(createPage))
  side.github && (await Github(createPage))
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value: `/post${value}`,
    })
  }
}
