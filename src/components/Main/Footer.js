import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          foot {
            beian
          }
        }
      }
    }
  `)

  const { beian } = data.site.siteMetadata.foot

  return (
    <div className={`Footer-class`}>
      <span>
        © {new Date().getFullYear()}{" "}
        <a href="https://www.gatsbyjs.org">Powered by Gatsby</a>｜
        <a href="https://github.com/betterTisen/gatsby-omg-blog">
          Theme by omg
        </a>
      </span>
      <span className="beian">{beian}</span>
    </div>
  )
}
