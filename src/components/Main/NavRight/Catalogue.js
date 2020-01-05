import React from "react"

function Catalogue({ data }) {
  const dom = data ? (
    <div className="Catalogue-class">
      <div className='catalogTitle'>文章目录</div>
      <div dangerouslySetInnerHTML={{ __html: data }} className='catalogContent'/>
    </div>
  ) : (
      ""
    )
  return dom
}
export default Catalogue
