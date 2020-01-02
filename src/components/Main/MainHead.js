import React from "react"
import { useStaticQuery, graphql } from "gatsby"

function MainHead({ title, details }) {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author
          notice
        }
      }
    }
  `)
  const { author, notice } = data.site.siteMetadata
  return (
    <div className={`MainHead-class`}>
      <span>{title ? title : author}</span>
      <p>{details ? details : notice}</p>
    </div>
  )
}

export default MainHead
