import React from "react"
import { Link } from "gatsby"

import SEO from "../components/SEO"

class NotFoundPage extends React.Component {
  render() {
    return (
      <div className="ERR-404-Class">
        <SEO title="404: Not Found" />
        <img alt="404" src={require("../../content/assets/404.jpeg")} />
        <div>
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
