import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

function Header({ title }) {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            id
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

  const posts = data.allMarkdownRemark.edges

  const [searchRes, setSearchRes] = useState([]) // 查询
  const [focusState, setfocusState] = useState(false) //失焦状态

  const search = e => {
    const val = e.target.value
      .replace(/[\\]/g, "")
      .toLowerCase()
    const filterPosts = posts.filter(
      ({ node }) =>
        val.length !== 0 &&
        node.frontmatter.title.toLowerCase().search(val) !== -1
    )

    setSearchRes([...filterPosts])
  }

  // 聚焦失焦事件
  const handleFocus = () => {
    setfocusState(true)
  }
  const handleBlur = () => {
    setTimeout(() => {
      setfocusState(false)
    }, 100)
  }

  return (
    <div className={"Header"}>
      <i className="hamburger">&#xe63f;</i>

      <Link className="headLogo" to="/">
        <img src={require("../../../content/assets/logo.png")} alt={title} />
      </Link>

      <div className="search-box">
        <label>
          <input
            type="text"
            placeholder="请输入..."
            onChange={search}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <span>&#xe621;</span>
          <i className="mobile-search">&#xe621;</i>
        </label>
        {focusState && searchRes.length > 0 && (
          <ul className="search-list">
            {searchRes.map(({ node }) => {
              return (
                <li key={node.id}>
                  <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </div>
  )
}
export default Header
