import React from "react"
import { Link, graphql } from "gatsby"
import Comment from "../components/Comment"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const postPageState = this.props.data.site.siteMetadata.post.pageviews
    const { previous, next } = this.props.pageContext
    // head info
    const mainHeadData = {
      title: post.frontmatter.title,
      details: post.frontmatter.date,
      readNumState: postPageState,
    }

    return (
      <Layout
        location={this.props.location}
        title={siteTitle}
        mainHeadData={mainHeadData}
        mainCatalogueData={post.headings}
      >
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />

        <div className="Post-page-class fade-in-ani">
          <article>
            <section
              className="omg-markdown"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </article>

          <nav className="post-href-nav">
            <div>
              {next && (
                <Link to={next.fields.slug} rel="prev">
                  上一篇
                  {/* {previous.frontmatter.title} */}
                </Link>
              )}
            </div>
            <div>
              {previous && (
                <Link to={previous.fields.slug} rel="next">
                  下一篇
                  {/* {next.frontmatter.title} */}
                </Link>
              )}
            </div>
          </nav>
          <Comment />
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

// 可通过 markdownRemark.tableOfContents 直接获取目录html字符串
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        post {
          pageviews
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      headings {
        value
        depth
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
      }
    }
  }
`
