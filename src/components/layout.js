import React from "react"

import Header from "./Header"
import Sidebar from "./Sidebar"
import Main from "./Main"

class Layout extends React.Component {
  render() {
    const { title, children, mainHeadData} = this.props

    return (
      <div className={"Layout"}>
        <Header title={title} />
        <Sidebar />
        <Main mainHeadData={mainHeadData}>
          {children}
        </Main>
      </div>
    )
  }
}

export default Layout
