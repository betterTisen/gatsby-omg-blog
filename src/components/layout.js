import React from "react"
import { Link } from "gatsby"

class Layout extends React.Component {
  render() {
    const { title, children, location } = this.props
    let header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          width: "750px"
        }}
      >
        <header>{header}</header>
        <main
          className={
            location.pathname.substr(0, 6) === "/post/" ? "" : "reset-style"
          }
        >
          {children}
        </main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )
  }
}

export default Layout
