import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Pagination from "../components/Pagination"

import { toGetRandomHeadImage } from "../utils/random"

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
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={`${pageContext.tag}`} />
        <div>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug

            const rdm = toGetRandomHeadImage()

            return (
              <article key={node.fields.slug} className={`Main-list-class`}>
                <header>
                  <div>
                    <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                      {title}
                    </Link>
                  </div>
                  <div>
                    {node.frontmatter.tags
                      ? node.frontmatter.tags.map(tag => {
                          return `|${tag}`
                        })
                      : "没有标签"}
                  </div>
                  <small>{node.frontmatter.date}</small>
                  <img src={`${rdm}`} alt="" />
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt
                    }}
                  />
                </section>
              </article>
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
