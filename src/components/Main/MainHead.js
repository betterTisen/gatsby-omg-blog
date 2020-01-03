import React from "react"
import { useStaticQuery, graphql } from "gatsby"

function MainHead({ mainHeadData }) {
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

  if (!mainHeadData) {
    mainHeadData = {}
  }

  const { title = author, details = notice } = mainHeadData

  return (
    <div className={`MainHead-class`}>
      <span>{title}</span>
      <p>{details}</p>
    </div>
  )
}

export default MainHead
