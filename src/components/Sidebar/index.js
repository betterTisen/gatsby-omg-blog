import React, { Component } from "react"
import { connect } from "react-redux"

import Bio from "./Bio"
import Nav from "./Nav"

const SidebarComponent = ({ hambState, blogStatusChange }) => (
  <div className={`Sidebar-class ${hambState ? "Siderbar-show" : ""}`}>
    <Bio />
    <Nav handleHamb={blogStatusChange} />
    <ul className={"sidebar-foot"}>
      {/* <li>
            <a
              name="qq"
              href="http://wpa.qq.com/msgrd?v=3&uin=2445408174&site=qq&menu=yes"
              target="view_window"
            >
              &#xe601;
            </a>
          </li> */}
      <li>
        <a name="github" href="https://github.com/betterTisen">
          &#xe600;
        </a>
      </li>
      {/* <li>
            <a name="邮箱" href="mailto:song5516023@gmail.com">
              &#xe8b6;
            </a>
          </li> */}
    </ul>
  </div>
)

const mapStateToProps = ({ hambState }) => {
  return { hambState }
}

const mapDispatchToProps = dispatch => {
  return { blogStatusChange: () => dispatch({ type: `OPEN_MOBILE_SIDEBAR` }) }
}

const ConnectedSidebar = connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarComponent)

class Sidebar extends Component {
  render() {
    return <ConnectedSidebar />
  }
}

export default Sidebar
