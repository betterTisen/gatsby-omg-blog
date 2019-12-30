/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(relativePath: { eq: "avatar.png" }) {
        childImageSharp {
          fixed(width: 60, height: 60) {
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
    <div>
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          marginBottom: 0,
          minWidth: 60,
          borderRadius: `100%`
        }}
        imgStyle={{
          borderRadius: `50%`
        }}
      />
      <p>
        Written by <strong>{author}</strong> who lives and works in San
        Francisco building useful things.
      </p>
    </div>
  )
}

export default Bio
