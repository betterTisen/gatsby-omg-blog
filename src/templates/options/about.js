import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/Layout"
import SEO from "../../components/SEO"

class BlogAboutTemplate extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title

    const mainHeadData = {
      title: "关于我",
      details: "怀虔诚之态 以拥抱未来",
    }

    return (
      <Layout
        location={this.props.location}
        title={siteTitle}
        mainHeadData={mainHeadData}
      >
        <SEO title={`About me`} />
        <div className="Option-class About-class fade-in-ani">
          <div className="Option-container about-container">
            <div className="note">
              <p>姓名：宋昊天</p>
              <p>年龄：23</p>
              <p>地址：杭州市 西湖区</p>
              <p>
                博客：<a href="https://www.byeguo.cn">https://www.byeguo.cn</a>
              </p>
              <p>
                github：
                <a href="https://github.com/betterTisen">
                  https://github.com/betterTisen
                </a>
              </p>
            </div>

            <h2>简介</h2>
            <div className="note">
              <p>
                目前在杭州从事 <b>pc / 移动web 前端开发</b> 相关工作，可独立完成
                ToB or ToC 的页面开发工作。
              </p>
              <p>熟练掌握 React、Vue、Webpack 等前端技术</p>
              <p>熟练使用Koa、Django 等后端框架</p>
              <p>
                如有合作机会，欢迎
                <a
                  style={{
                    color: "yellowgreen",
                    fontWeight: "bold",
                  }}
                  href="mailto:song5516023@gmail.com"
                >
                  {" "}
                  Email{" "}
                </a>
                留言
              </p>
            </div>
          </div>
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
