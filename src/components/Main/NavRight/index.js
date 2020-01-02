import React from "react"
// import { useStaticQuery, graphql, Link } from "gatsby"

import NavRightNews from "./News"
import NavRightTags from "./NavTags"

function NavRight() {
  return (
    <div className={`NavRight-class`}>
      <NavRightNews />
      <NavRightTags />
    </div>
  )
}

export default NavRight
