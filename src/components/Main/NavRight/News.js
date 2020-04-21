import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

function NavRightNews() {
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
  const new_posts = data.allMarkdownRemark.edges.slice(0, 4)
  return (
    <div className="News-class navRight-container">
      <span className="item-title">最新文章</span>
      <ul>
        {new_posts.map(({ node }, i) => {
          const imgUrl = require(`../../../../content/assets/new_posts/${i +
            1}.png`)
          return (
            <li key={node.fields.slug}>
              <Link to={node.fields.slug}>
                <div className="imgBox">
                  <i style={{ backgroundImage: `url(${imgUrl})` }}></i>
                </div>
                <span className="textTitle">{node.frontmatter.title}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default NavRightNews
