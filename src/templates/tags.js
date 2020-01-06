import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Pagination from "../components/Pagination"

// 同main页面的区别
// 查询语句
// SEO title={`${pageContext.tag}`}
// 分页器 path={`/tags/${pageContext.tag}/`}

class BlogTagsTemplate extends React.Component {
  render() {
    const { data, pageContext } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle} mainHeadTitle="">
        <SEO title={`${pageContext.tag}`} />
        <div className="Main-list-class">
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug

            return (
              <Link
                className={`main-img-left-layout${
                  node.frontmatter.top_img ? " main-have-img" : " main-no-img"
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
                    {node.frontmatter.tags.map(tag => {
                      return <i key={tag}>{tag}</i>
                    })}
                  </span>
                  <small>{node.frontmatter.date}</small>
                </div>
              </Link>
            )
          })}
          <Pagination
            path={`/tags/${pageContext.tag}/`}
            pageContext={pageContext}
          />
        </div>
      </Layout>
    )
  }
}

export default BlogTagsTemplate

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!, $tag: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
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
