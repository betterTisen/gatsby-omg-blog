import React from "react"

import Header from "./Header"
import Sidebar from "./Sidebar"
import MainHead from "./Main/MainHead"
import Footer from "./Main/Footer"

class Layout extends React.Component {
  render() {
    const { title, children, location } = this.props
    return (
      <div className={"Layout"}>
        <Header title={title} />
        <Sidebar />
        <section>
          <MainHead title="" details="" />
          <main
            className={
              location.pathname.substr(0, 6) === "/post/" ? "" : "reset-style"
            }
          >
            {children}
          </main>
          <Footer />
        </section>
      </div>
    )
  }
}

export default Layout
