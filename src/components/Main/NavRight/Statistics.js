import React, { Component } from "react"
import Tools from "../../../utils/tools"

class Statistics extends Component {
  render() {
    return (
      <div className="Statistics-class">
        <span className="item-title">博客信息</span>
        <ul>
          <li>
            <span>访客数:</span>
            <span id="busuanzi_value_site_uv"></span>
          </li>
          <li>
            <span>总访问量:</span>
            <span id="busuanzi_value_site_pv"></span>
          </li>
        </ul>
      </div>
    )
  }

  componentDidMount() {
    Tools.asyncLoadScript(
      "https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js",
      function() {
        const self = document.getElementById(
          "https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"
        )
        // 拿到父节点:
        const parent = self.parentElement
        // 删除:
        parent.removeChild(self)
      }
    )
  }
}

export default Statistics
