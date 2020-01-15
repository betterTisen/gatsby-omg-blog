/*
 * message页生成
 */
const path = require(`path`)

const Message = async createPage => {
  // Create blog message pages.
  createPage({
    path: `/message`,
    component: path.resolve(`./src/templates/options/message.js`),
    context: {},
  })
}

module.exports.Message = Message
