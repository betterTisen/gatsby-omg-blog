/*
 * about页生成
 */
const path = require(`path`)

const About = async createPage => {
  // Create blog about pages.
  createPage({
    path: `/about`,
    component: path.resolve(`./src/templates/options/about.js`),
    context: {},
  })
}

module.exports.About = About
