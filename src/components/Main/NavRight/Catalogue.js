import React, { Component } from "react"

class Catalogue extends Component {
  constructor(props) {
    super(props)
    this.getCurrentAnchor.bind(this)
  }

  render() {
    return (
      <div className="Catalogue-class">
        {/* <div dangerouslySetInnerHTML={{ __html: data }} /> */}
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
                <a href={`#${item.id}`}>{item.value}</a>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  componentWillMount() {
    const data = this.props.data
    const links = data.map(h => ({
      // 在 gatsby-remark-autolink-headers 插件中，
      // 对标题的空格用-替换，并转为小写，
      // 这里与其保持一致。
      id: h.value.replace(/ /g, "-").toLowerCase(),
      ...h,
    }))
    this.setState({
      links,
    })
  }

  // 添加监听
  componentDidMount() {
    this.scrollEvent = window.addEventListener("scroll", this.handleScroll)
    this.handleScroll()
  }

  // 注销监听
  componentWillUnmount() {
    if (this.scrollEvent) {
      this.scrollEvent.remove()
    }
  }

  // 高亮当前目录
  handleScroll = () => {
    this.setState({
      active: this.getCurrentAnchor(),
    })
  }

  // 当前的滚动距离
  getCurrentScrollTop() {
    return (
      window.pageYOffset ||
      document.body.scrollTop ||
      document.documentElement.scrollTop
    )
  }

  // 计算获取当前标题
  getCurrentAnchor() {
    console.log(this.state)
    // 添加偏移以便标题能够完整的显示
    const scrollTop = this.getCurrentScrollTop() + 5
    let active = null
    this.state.links.forEach(link => {
      // 获取标题所对应的 HTML 元素
      const target = document.getElementById(link.id)
      if (target) {
        // 比较对应元素位置与当前位置
        if (target.offsetTop > scrollTop) return
        if (!active) {
          active = target
        }
        // 判定当前章节与当前位置
        else if (target.offsetTop >= active.offsetTop) {
          active = target
        }
      }
    })

    return active ? active.id : null
  }
}
export default Catalogue
