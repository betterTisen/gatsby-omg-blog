import React, { Component } from "react"

class Footer extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <span>
          © {new Date().getFullYear()}
          {" "}
          <a href="https://www.gatsbyjs.org">驱动 Gatsby</a>｜
          <a href="https://github.com/betterTisen/gatsby-omg-blog">主题 omg</a>
        </span>
        <span>皖ICP备19018433号</span>
      </div>
    )
  }
}

export default Footer
