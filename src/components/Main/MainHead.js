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
    <div>
      <div>{title ? title : author}</div>
      <div>{details ? details : notice}</div>
    </div>
  )
}

export default MainHead
