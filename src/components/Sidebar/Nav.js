import React from "react"
import { Link } from "gatsby"

import { useStaticQuery, graphql } from "gatsby"

export default ({ handleHamb }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          side {
            message
            about
            github {
              enable
              username
            }
          }
        }
      }
    }
  `)
  const { message, about, github } = data.site.siteMetadata.side

  return (
    <div className={`Nav-class`}>
      <div className={`nav-title`}>导航</div>
      <ul>
        <li>
          <Link onClick={handleHamb} to="/">
            <span>&#xeb8e;</span> 首页
          </Link>
        </li>
        <li>
          {github.enable && (
            <Link onClick={handleHamb} to="/github">
              <span>&#xe603;</span> 仓库
            </Link>
          )}
        </li>
        {message && (
          <li>
            <Link onClick={handleHamb} to="/message">
              <span>&#xe606;</span> 留言
            </Link>
          </li>
        )}
        {about && (
          <li>
            <Link onClick={handleHamb} to="/about">
              <span>&#xe609;</span> 关于我
            </Link>
          </li>
        )}
      </ul>
    </div>
  )
}
