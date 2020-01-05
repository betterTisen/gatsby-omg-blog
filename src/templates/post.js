import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    // head info
    const mainHeadData = {
      title: post.frontmatter.title,
      details: post.frontmatter.date,
    }

    return (
      <Layout
        location={this.props.location}
        title={siteTitle}
        mainHeadData={mainHeadData}
        mainCatalogueData={post.tableOfContents}
      >
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <div className="Post-page-class">
          <article>
            <section
              className="omg-markdown"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </article>

          <nav className="post-href-nav">
            <div>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  上一篇
                  {/* {previous.frontmatter.title} */}
                </Link>
              )}
            </div>
            <div>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  下一篇
                  {/* {next.frontmatter.title} */}
                </Link>
              )}
            </div>
          </nav>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      tableOfContents
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
