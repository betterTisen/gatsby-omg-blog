import React from "react"
// import { useStaticQuery, graphql, Link } from "gatsby"

import NavRightNews from "./News"
import NavRightTags from "./NavTags"
import Catalogue from "./Catalogue"
import Statistics from "./Statistics"

function NavRight({ mainCatalogueData }) {
  return (
    <div className={`NavRight-class`}>
      <NavRightNews />
      <NavRightTags />
      <Statistics />
      {mainCatalogueData && mainCatalogueData.length ? (
        <Catalogue data={mainCatalogueData} />
      ) : (
        ""
      )}
    </div>
  )
}

export default NavRight
