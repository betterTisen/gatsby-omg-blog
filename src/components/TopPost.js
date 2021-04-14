import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import PostItem from './PostItem';

function TopPost() {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { top: { eq: true } } }
      ) {
        edges {
          node {
            excerpt
            fields {
              slug
            }
            frontmatter {
              date(formatString: "YYYY-MM-DD")
              title
              description
              tags
              topImg
              top
            }
          }
        }
      }
    }
  `)
  const posts = data.allMarkdownRemark.edges
  return (
    <div style={{marginBottom:"60px"}}>
      {posts.map(({node}) => {
        return (
          <PostItem node={node} key={node.fields.slug}/>
        )
      })}
    </div>
  )
}


export default TopPost
