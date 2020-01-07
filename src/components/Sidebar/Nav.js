import React, { Component } from "react"
import { Link } from "gatsby"

class Nav extends Component {
  render() {
    return (
      <div className={`Nav-class`}>
        <div className={`nav-title`}>导航</div>
        <ul>
          <li>
            <Link to="/">
              <span>&#xeb8e;</span> 首页
            </Link>
          </li>
          {/* <li>
            <Link to="/">
              <span>&#xe603;</span> 仓库
            </Link>
          </li>
          <li>
            <Link to="/">
              <span>&#xe606;</span> 留言
            </Link>
          </li> */}
          <li>
            <Link to="/about">
              <span>&#xe609;</span> 关于我
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default Nav
