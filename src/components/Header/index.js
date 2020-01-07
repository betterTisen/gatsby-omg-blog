import React from "react"
import { connect } from "react-redux"

import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

import Search from "./Search"

const Hamburger = ({ hambState, blogStatusChange }) => (
  <i
    className={`hamburger ${hambState ? "hamburgerActive" : ""}`}
    onClick={blogStatusChange}
    onKeyDown={() => {}}
    role="button"
    tabIndex={0}
  >
    &#xe63f;
  </i>
)

const mapStateToProps = ({ hambState }) => {
  return { hambState }
}

const mapDispatchToProps = dispatch => {
  return { blogStatusChange: () => dispatch({ type: `OPEN_MOBILE_SIDEBAR` }) }
}

const ConnectedHamburger = connect(
  mapStateToProps,
  mapDispatchToProps
)(Hamburger)

function Header({ title }) {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)

  return (
    <div className={"Header"}>
      {/* <i
        className="hamburger"
        onClick={handleHamb}
        onKeyDown={() => {}}
        role="button"
        tabIndex={0}
      >
        &#xe63f;
      </i> */}
      <ConnectedHamburger />

      <Link className="headLogo" to="/">
        <img src={require("../../../content/assets/logo.png")} alt={title} />
      </Link>

      <Search posts={data.allMarkdownRemark.edges} />
    </div>
  )
}
export default Header
