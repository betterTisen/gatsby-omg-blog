import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"

export default ({ title = "评论" }) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          valine {
            enable
            appId
            appKey
            placeholder
            avatar
          }
        }
      }
    }
  `)

  const {
    enable,
    appId,
    appKey,
    placeholder,
    avatar,
  } = data.site.siteMetadata.valine

  if (!enable) {
    return <div className="Hide-class"></div>
  }

  useEffect(() => {
    const Valine = require("valine")
    new Valine().init({
      el: `#vcomments`,
      path: window.location.pathname,
      appId,
      appKey,
      placeholder,
      avatar,
    })
  })

  return (
    <div className="Comment-class">
      <span className="comment-title">{title}</span>
      <div className="vcomment" id="vcomments"></div>
    </div>
  )
}
