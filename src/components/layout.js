import React from "react"

import Header from "./Header"
import Sidebar from "./Sidebar"
import Main from "./Main"

class Layout extends React.Component {
  render() {
    const { title, children } = this.props

    return (
      <div className={"Layout"}>
        <Header title={title} />
        <Sidebar />
        <Main>{children}</Main>
      </div>
    )
  }
}

export default Layout
