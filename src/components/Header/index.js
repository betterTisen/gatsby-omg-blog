import React, { Component } from "react"

class Header extends Component {
  render() {
    const { title } = this.props
    return (
      <div className={"Header"}>
        <img
          src={require("../../../content/assets/logo.png")}
          alt={title}
          className="headLogo"
        />
        {/* <span>{title}</span> */}
        <div className="searchBox">
          <label>
            <input type="text" placeholder="请输入..." />
            <span>&#xe621;</span>
          </label>
        </div>
      </div>
    )
  }
}

export default Header
