import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

import Search from "./Search"

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

  const handleHamb = () => {
    console.log(1)
  }

  return (
    <div className={"Header"}>
      <i
        className="hamburger"
        onClick={handleHamb}
        onKeyDown={() => {}}
        role="button"
        tabIndex={0}
      >
        &#xe63f;
      </i>

      <Link className="headLogo" to="/">
        <img src={require("../../../content/assets/logo.png")} alt={title} />
      </Link>

      <Search posts={data.allMarkdownRemark.edges} />
    </div>
  )
}
export default Header
