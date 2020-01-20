import React from "react"

import Header from "./Header"
import Sidebar from "./Sidebar"
import Main from "./Main"
import Masking from "./Masking"

export default ({ title, children, mainHeadData, mainCatalogueData }) => {
  return (
    <div className={"Layout"}>
      <Header title={title} />
      <Sidebar />
      <Main mainHeadData={mainHeadData} mainCatalogueData={mainCatalogueData}>
        {children}
      </Main>
      <Masking />
    </div>
  )
}
