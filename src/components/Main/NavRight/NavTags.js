import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

function NavRightTags() {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `)
  const tagsInfo = data.allMarkdownRemark.group
  return (
    <div className="NavTags-class navRight-container">
      <span className="item-title">标签栏</span>
      <ul>
        {tagsInfo.map(({ fieldValue, totalCount }) => {
          return (
            <li key={fieldValue}>
              <Link to={`/tags/${fieldValue}`}>
                <span>{fieldValue}</span>
                <i>{totalCount}</i>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default NavRightTags
