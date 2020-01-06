import React from "react"
// import { useStaticQuery, graphql, Link } from "gatsby"

import NavRightNews from "./News"
import NavRightTags from "./NavTags"
import Catalogue from "./Catalogue"

function NavRight({ mainCatalogueData }) {
  return (
    <div className={`NavRight-class`}>
      <NavRightNews />
      <NavRightTags />
      {mainCatalogueData && mainCatalogueData.length ? (
        <Catalogue data={mainCatalogueData} />
      ) : (
        ""
      )}
    </div>
  )
}

export default NavRight
