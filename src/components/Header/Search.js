import React, { Component } from "react"
import { Link } from "gatsby"

class Search extends Component {
  
  render() {
    return (
      <div className="search-box">
        <label>
          <input
            type="text"
            placeholder="请输入..."
            onChange={e => {
              this.search(e)
            }}
            onFocus={() => {
              this.handleFocus()
            }}
            className={this.state.mobileActive ? "mobile-active" : ""}
          />
          <span>&#xe621;</span>
          <button
            className="mobile-search"
            onClick={e => {
              this.mobileSearch()
            }}
          >
            &#xe621;
          </button>
        </label>
        {this.state.focusState && this.state.searchRes.length > 0 && (
          <ul className="search-list">
            {this.state.searchRes.map(({ node }) => {
              return (
                <li key={node.id}>
                  <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
                </li>
              )
            })}
            <li>
              <span
                onKeyDown={() => {}}
                role="button"
                tabIndex={0}
                onClick={() => {
                  this.handleBlur()
                }}
                style={{
                  fontWeight: "bold",
                }}
              >
                关闭
              </span>
            </li>
          </ul>
        )}
      </div>
    )
  }

  UNSAFE_componentWillMount() {
    this.setState({
      mobileActive: false,
      searchRes: [],
      focusState: false,
    })
  }

  search(e) {
    const val = e.target.value.replace(/[\\]/g, "").toLowerCase()
    const filterPosts = this.props.posts.filter(
      ({ node }) =>
        val.length !== 0 &&
        node.frontmatter.title.toLowerCase().search(val) !== -1
    )

    this.setState({
      searchRes: [...filterPosts],
    })
  }

  mobileSearch() {
    this.setState({
      mobileActive: !this.state.mobileActive,
    })

    if (!this.state.mobileActive) {
      this.handleFocus()
    } else {
      this.handleBlur()
    }
  }

  // 聚焦失焦事件
  handleFocus() {
    this.setState({
      focusState: true,
    })
  }
  handleBlur() {
    setTimeout(() => {
      this.setState({
        focusState: false,
      })
    }, 100)
  }
}

export default Search
