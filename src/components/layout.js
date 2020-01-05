import React from "react"

import Header from "./Header"
import Sidebar from "./Sidebar"
import Main from "./Main"

class Layout extends React.Component {
  render() {
    const { title, children, mainHeadData, mainCatalogueData } = this.props

    return (
      <div className={"Layout"}>
        <Header title={title} />
        <Sidebar />
        <Main mainHeadData={mainHeadData} mainCatalogueData={mainCatalogueData}>
          {children}
        </Main>
      </div>
    )
  }
}

export default Layout
