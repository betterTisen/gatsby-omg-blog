import React from "react"
// import { useStaticQuery, graphql, Link } from "gatsby"

import NavRightNews from "./News"
import NavRightTags from "./NavTags"
import Catalogue from "./Catalogue"

function NavRight({ mainCatalogueData }) {
  return (
    <div className={`NavRight-class`}>
      
      <span id="busuanzi_container_site_pv">
        本站总访问量<span id="busuanzi_value_site_pv"></span>次
      </span>
      <br />
      <span id="busuanzi_container_site_uv">
        本站访客数<span id="busuanzi_value_site_uv"></span>人次
      </span>
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
