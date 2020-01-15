import React from "react"

import MainHead from "./MainHead"
import NavRight from "./NavRight"
import Footer from "./Footer"

/*
 * mainHeadData
 * - title
 * - details
 */
function Main({ children, mainHeadData, mainCatalogueData }) {
  return (
    <section className={"Main-class"}>
      <div className={`main-container`}>
        <main className={`main`}>
          <MainHead mainHeadData={mainHeadData} />
          {children}
        </main>
        <NavRight mainCatalogueData={mainCatalogueData} />
      </div>
      <Footer />
    </section>
  )
}

export default Main
