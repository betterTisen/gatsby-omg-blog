import React, { Component } from "react"
import { Link } from "gatsby"

class Pagination extends Component {
  render() {
    const skipNum = 2 //用于配置分页器 Current 的长度

    const { totalPage, currentPage } = this.props.pageContext

    const hrefPath = this.props.path

    return (
      <div className={"Pagination-class"}>
        <ul>
          {currentPage - skipNum - 1 >= 1 && (
            <li>
              <Link to={`${hrefPath}`}>1</Link>
            </li>
          )}
          {currentPage - skipNum - 1 > 1 && (
            <li>
              <span>...</span>
            </li>
          )}

          {Array.from({ length: skipNum }).map((_, i) => {
            const current = currentPage - skipNum + i
            return (
              current >= 1 && (
                <li key={`${hrefPath}${current}`}>
                  <Link to={current === 1 ? `${hrefPath}` : `${hrefPath}${current}`}>
                    {current}
                  </Link>
                </li>
              )
            )
          })}

          <li className="center"> {currentPage} </li>

          {Array.from({ length: skipNum }).map((_, i) => {
            const current = currentPage + i + 1
            return (
              current <= totalPage && (
                <li key={`${hrefPath}${current}`}>
                  <Link to={`${hrefPath}${current}`}>{current}</Link>
                </li>
              )
            )
          })}

          {currentPage + skipNum + 1 < totalPage && (
            <li>
              <span>...</span>
            </li>
          )}
          {currentPage + skipNum + 1 <= totalPage && (
            <li>
              <Link to={`${hrefPath}${totalPage}`}>{totalPage}</Link>
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default Pagination
