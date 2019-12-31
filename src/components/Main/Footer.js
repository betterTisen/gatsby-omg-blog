import React, { Component } from "react"

class Footer extends Component {
  render() {
    return (
      <div className={`Footer-class`}>
        <span>
          © {new Date().getFullYear()}{" "}
          <a href="https://www.gatsbyjs.org">Powered by Gatsby</a>｜
          <a href="https://github.com/betterTisen/gatsby-omg-blog">Theme by omg</a>
        </span>
        <span>皖ICP备19018433号</span>
      </div>
    )
  }
}

export default Footer
