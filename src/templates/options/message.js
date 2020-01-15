import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import Comment from "../../components/Comment"

class BlogAboutTemplate extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title

    const mainHeadData = {
      title: "留言",
      details: "来都来了，和我聊聊天嘛...",
    }

    return (
      <Layout
        location={this.props.location}
        title={siteTitle}
        mainHeadData={mainHeadData}
      >
        <SEO title={`Message`} />
        <div className="Option-class Message-class">
          <div className="Option-container">
            <h2>
              <center>
                你有什么想
                <span
                  style={{
                    fontSize: "24px",
                    color: "#e28585",
                  }}
                >
                  说
                </span>
                的？
              </center>
              <center>
                你有什么想
                <span
                  style={{
                    fontSize: "24px",
                    color: "#8adb8a",
                  }}
                >
                  问
                </span>
                的？
              </center>
              <center>
                你有什么想
                <span
                  style={{
                    fontSize: "24px",
                    color: "#a8a8dc",
                  }}
                >
                  吐槽
                </span>
                的？
              </center>
            </h2>
            <h1>欢迎在下方留言板留言...</h1>
          </div>
          <Comment title="留言板" />
        </div>
      </Layout>
    )
  }
}

export default BlogAboutTemplate

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
