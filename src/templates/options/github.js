import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import Loading from "../../components/Loading"

class BlogGithubTemplate extends React.Component {
  constructor(props) {
    super(props)
    this.state = { repos: [] }
  }

  render() {
    const siteTitle = this.props.data.site.siteMetadata.title

    const mainHeadData = {
      title: "项目展示",
      details: "代码的价值在于产品，产品的价值在于用户",
    }

    return (
      <Layout
        location={this.props.location}
        title={siteTitle}
        mainHeadData={mainHeadData}
      >
        <SEO title={`My Github`} />
        <div className="Option-class Github-class fade-in-ani">
          <div className="Option-container">
            {this.state.repos.length === 0 ? (
              <Loading />
            ) : (
              this.state.repos.map(e => {
                return (
                  <a
                    className="Repos-item fade-in-ani"
                    key={e.id}
                    href={e.clone_url}
                  >
                    <header>
                      {e.name}
                      <div className="top-badge">点击查看</div>
                    </header>
                    <p>{e.description}</p>
                    <div className="repos-nav">
                      <span>
                        <i>{e.stargazers_count} stars</i> /
                        <i>{e.forks_count} forks</i>
                      </span>
                      <small>{e.language}</small>
                    </div>
                  </a>
                )
              })
            )}
          </div>
        </div>
      </Layout>
    )
  }

  componentDidMount() {
    const { username } = this.props.data.site.siteMetadata.side.github

    fetch(`https://api.github.com/users/${username}/repos`, {
      method: "GET",
    })
      .then(r => r.json())
      .then(res => {
        this.setState({
          repos: [...res],
        })
      })
  }
}

export default BlogGithubTemplate

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        side {
          github {
            username
          }
        }
      }
    }
  }
`
