import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import PostItem from '../components/PostItem';
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
          {posts.map(({node}) => {
            return (
              <PostItem node={node} key={node.fields.slug}/>
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
