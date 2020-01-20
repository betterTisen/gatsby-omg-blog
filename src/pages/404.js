import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"

import SEO from "../components/SEO"

class NotFoundPage extends React.Component {
  render() {
    const imgData = this.props.data.imgData.childImageSharp.fixed

    return (
      <div className="ERR-404-Class">
        <SEO title="404: Not Found" />
        <Image className="left-404-img" fixed={imgData} alt="404" />
        <div className="right-404-context">
          <h1>404</h1>
          <p>The page you are looking for is not here.</p>
          <p>
            Why don't you try the <Link to="/">homepage</Link>?
          </p>
        </div>
      </div>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    imgData: file(relativePath: { eq: "404.jpeg" }) {
      childImageSharp {
        fixed(width: 233, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
