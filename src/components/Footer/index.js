import React, { Component } from "react"

class Footer extends Component {
  render() {
    return (
      <div>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </div>
    )
  }
}

export default Footer
