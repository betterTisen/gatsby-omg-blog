/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

export default () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(relativePath: { eq: "avatar.png" }) {
        childImageSharp {
          fixed(width: 65, height: 65) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata

  return (
    <div className="Bio-class">
      <div className="head-box">
        <div
          className="head-img"
          onClick={() => {}}
          onKeyDown={() => {}}
          role="button"
          tabIndex={0}
        >
          <Image fixed={data.avatar.childImageSharp.fixed} alt={author} />
        </div>
        <div className="head-ctx">
          <span>Byeguo</span>
          <span>Blog</span>
        </div>
      </div>
    </div>
  )
}
