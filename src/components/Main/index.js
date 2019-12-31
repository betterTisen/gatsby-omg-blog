import React from "react"

import MainHead from "./MainHead"
import NavRight from "./NavRight"
import Footer from "./Footer"

function Main({ children }) {
  return (
    <section className={"Main-class"}>
      <div className={`main-container`}>
        <main className={`main`}>
          <MainHead title="" details="" />
          {children}
        </main>
        <NavRight />
      </div>
      <Footer />
    </section>
  )
}

export default Main
