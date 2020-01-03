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

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <div className="Main-list-class">
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug

            return (
              <Link
                className={`main-img-left-layout${
                  node.frontmatter.top_img ? "" : ` main-no-img`
                }`}
                to={node.fields.slug}
                key={node.fields.slug}
              >
                {node.frontmatter.top_img ? (
                  <div className="left-img">
                    <img
                      src={require(`../../content/assets/top_image/${node.frontmatter.top_img}`)}
                      alt=""
                    />
                  </div>
                ) : (
                  ""
                )}
                <header>{title}</header>
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
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
            top_img
          }
        }
      }
    }
  }
`
