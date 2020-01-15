import React, { Component } from "react"
import Valine from "valine"

class Comment extends Component {
  render() {
    const { title = "评论" } = this.props
    return (
      <div className="Comment-class">
        <span className="comment-title">{title}</span>
        <div className="vcomment" id="vcomments"></div>
      </div>
    )
  }

  componentDidMount() {
    new Valine().init({
      el: `#vcomments`,
      appId: "ojyETDuDNqK1Vj4R6SL7XX0j-9Nh9j0Va",
      appKey: "womPC41Gyh9L0V5rTwpmytQU",
      path: window.location.pathname,
      placeholder: "随便说点什么呗...",
      avatar: "robohash",
    })
  }
}

export default Comment
