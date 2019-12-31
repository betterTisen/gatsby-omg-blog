import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

import Pagination from "../components/Pagination"

import { toGetRandomHeadImage } from "../utils/random"

class BlogIndex extends React.Component {
  render() {
    const { data, pageContext } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
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
                  <img
                    src={
                      node.frontmatter.top_img
                        ? require(`../../content/assets/top_image/${node.frontmatter.top_img}`)
                        : `${rdm}`
                    }
                    alt=""
                  />
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
