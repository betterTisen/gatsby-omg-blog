import React, { Component } from "react"

import { easeInOutCubic, getCurrentScrollTop } from "../../../utils/anim"

class Catalogue extends Component {

  render() {
    return (
      <div className="Catalogue-class">
        <div className="item-title">文章目录</div>
        <ul>
          {this.state.links.map(item => {
            return (
              <li
                className={
                  this.state.active === item.id ? "catalogue-active" : ""
                }
                key={item.id}
                data-depth={item.depth}
              >
                <a
                  onClick={e => {
                    e.preventDefault()
                    this.scrollTo(item.id)
                  }}
                  href={`#${item.id}`}
                >
                  {item.value}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  // 绑定links
  UNSAFE_componentWillMount() {
    const data = this.props.data
    const links = data.map(h => ({
      // 在 gatsby-remark-autolink-headers 插件中，
      // 对特殊字符进行过滤，且对标题的空格用-替换，并转为小写，
      id: h.value
        .replace(
          /[`~!@#$%^&*()+=<>?:"{}|,.;'\\[\]·~@#%……&*——+={}|“”‘’]/g,
          ""
        )
        .replace(/ /g, "-")
        .toLowerCase(),
      ...h,
    }))
    this.setState({
      links,
    })
  }

  // 添加监听
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  // 注销监听
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  // 高亮当前目录
  handleScroll = () => {
    this.setState({
      active: this.getCurrentAnchor(),
    })
  }

  // 计算获取当前标题
  getCurrentAnchor() {
    const scrollTop = getCurrentScrollTop() + 20
    let active = null
    this.state.links.forEach(link => {
      const target = document.getElementById(link.id)
      if (!target || target.offsetTop > scrollTop) return
      if (!active) {
        active = target
      } else if (target.offsetTop >= active.offsetTop) {
        active = target
      }
    })

    return active ? active.id : null
  }

  // 平滑滚动到元素 id 所在位置
  scrollTo(id) {
    // 当前位置
    const scrollTop = getCurrentScrollTop()
    const target = document.getElementById(id)
    if (!target) {
      return
    }
    // 目标位置
    const targetScrollTop = target.offsetTop
    // 起始时间
    const startTime = Date.now()
    const frameFunc = () => {
      const timestamp = Date.now()
      // 这一帧经过时间
      const time = timestamp - startTime
      // 根据缓动函数计算，本帧应该移动的距离
      const nextScrollTop = easeInOutCubic(
        time,
        scrollTop,
        targetScrollTop,
        450
      )
      // 滚动 Y 轴
      window.scrollTo(window.pageXOffset, nextScrollTop)
      if (time < 450) {
        // 下一帧
        requestAnimationFrame(frameFunc)
      }
    }

    // 这里没有做降级处理（开发人员平时不会用IE吧！）
    requestAnimationFrame(frameFunc)
  }
}
export default Catalogue
