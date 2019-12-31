import React from "react"
import { useStaticQuery, graphql } from "gatsby"

function NavRight() {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)
  const new_posts = data.allMarkdownRemark.edges.splice(0, 4)
  return (
    <div className={`NavRight-class`}>
      <span>最新文章</span>
      <ul>
        {new_posts.map(({ node }) => {
          return <li key={node.fields.slug}>{node.frontmatter.title}</li>
        })}
      </ul>
    </div>
  )
}

export default NavRight
