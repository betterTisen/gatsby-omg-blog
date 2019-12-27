import React from "react"

import Header from "./Header"
import Sidebar from "./Sidebar"
import Footer from "./Footer"

class Layout extends React.Component {
  render() {
    const { title, children, location } = this.props
    return (
      <div className={"Layout"}>
        <Header title={title} />
        <Sidebar />
        <section
          className={
            location.pathname.substr(0, 6) === "/post/" ? "" : "reset-style"
          }
        >
          <main>{children}</main>
          <Footer />
        </section>
      </div>
    )
  }
}

export default Layout
