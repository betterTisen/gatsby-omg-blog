import React, { Component } from "react"

import Bio from "./Bio"
import Nav from "./Nav"

class Sidebar extends Component {
  render() {
    return (
      <div className={"Sidebar-class"}>
        <Bio />
        <Nav />
        <ul className={"sidebar-foot"}>
          <li>&#xe601;</li>
          <li>&#xe6f3;</li>
          <li>&#xe610;</li>
          <li>&#xe600;</li>
          <li>&#xe8b6;</li>
        </ul>
      </div>
    )
  }
}

export default Sidebar
