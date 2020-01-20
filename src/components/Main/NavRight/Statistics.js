import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Tools from "../../../utils/tools"

export default () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          statistics {
            homePage
          }
        }
      }
    }
  `)

  const { homePage } = data.site.siteMetadata.statistics

  useEffect(() => {
    Tools.asyncLoadScript(
      "https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js",
      function() {
        const self = document.getElementById(
          "https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"
        )
        if (!self) {
          return
        }
        // 拿到父节点:
        const parent = self.parentElement
        // 删除:
        parent.removeChild(self)
      }
    )
  })
  return (
    <div className={homePage ? "Statistics-class" : "Hide-class"}>
      <span className="item-title">博客信息</span>
      <ul>
        <li>
          <span>访客数:</span>
          <span id="busuanzi_value_site_uv"></span>
        </li>
        <li>
          <span>总访问量:</span>
          <span id="busuanzi_value_site_pv"></span>
        </li>
      </ul>
    </div>
  )
}
