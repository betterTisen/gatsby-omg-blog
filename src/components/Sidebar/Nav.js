import React, { Component } from "react"
import { Link } from "gatsby"

class Nav extends Component {
  render() {
    const { handleHamb } = this.props
    return (
      <div className={`Nav-class`}>
        <div className={`nav-title`}>导航</div>
        <ul>
          <li>
            <Link onClick={handleHamb} to="/">
              <span>&#xeb8e;</span> 首页
            </Link>
          </li>
          {/* <li>
            <Link onClick={handleHamb} to="/">
              <span>&#xe603;</span> 仓库
            </Link>
          </li> */}
          <li>
            <Link onClick={handleHamb} to="/message">
              <span>&#xe606;</span> 留言
            </Link>
          </li>
          <li>
            <Link onClick={handleHamb} to="/about">
              <span>&#xe609;</span> 关于我
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default Nav
