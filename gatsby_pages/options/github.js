/*
 * github页生成
 */
const path = require(`path`)

const Github = async createPage => {
  // Create blog github pages.
  createPage({
    path: `/github`,
    component: path.resolve(`./src/templates/options/github.js`),
    context: {},
  })
}

module.exports.Github = Github
