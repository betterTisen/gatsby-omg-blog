import React from "react"

function Catalogue({ data }) {
  const dom = data ? (
    <div className="Catalogue-class">
      <div dangerouslySetInnerHTML={{ __html: data }} />
    </div>
  ) : (
    ""
  )

  return dom
}

export default Catalogue
