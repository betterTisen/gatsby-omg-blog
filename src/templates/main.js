import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

import Pagination from "../components/Pagination"

class BlogIndex extends React.Component {
  render() {
    const { data, pageContext } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    let newPosts = [] //置顶排序
    posts.forEach(({ node }) => {
      if (node.frontmatter.top) {
        newPosts.unshift(node)
      } else {
        newPosts.push(node)
      }
    })

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <div className="Main-list-class">
          {newPosts.map(node => {
            const title = node.frontmatter.title || node.fields.slug

            return (
              <Link
                className={`main-img-left-layout fade-in-ani${
                  node.frontmatter.topImg ? " main-have-img" : " main-no-img"
                }`}
                to={node.fields.slug}
                key={node.fields.slug}
              >
                {node.frontmatter.topImg ? (
                  <div className="left-img">
                    <img
                      src={require(`../../content/assets/top_image/${node.frontmatter.topImg}`)}
                      alt=""
                    />
                  </div>
                ) : (
                  ""
                )}
                <header>
                  {title}
                  {node.frontmatter.top && (
                    <div className="top-badge">置顶</div>
                  )}
                </header>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
                <div className="main-nav">
                  <span>
                    {node.frontmatter.tags ? (
                      node.frontmatter.tags.map(tag => {
                        return <i key={tag}>{tag}</i>
                      })
                    ) : (
                      <i>no tags</i>
                    )}
                  </span>
                  <small>{node.frontmatter.date}</small>
                </div>
              </Link>
            )
          })}
          <Pagination path="/" pageContext={pageContext} />
        </div>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
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
`
