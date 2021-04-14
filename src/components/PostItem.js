import React from 'react';
import { Link } from "gatsby"

class PostItem extends React.Component {
  render() {
    const { node } = this.props
    const title = node.frontmatter.title || node.fields.slug
    return (
      <Link
        className={`main-img-left-layout fade-in-ani${
          node.frontmatter.topImg ? " main-have-img" : " main-no-img"
        }`}
        to={node.fields.slug}
      >
        {node.frontmatter.topImg ? (
          <div className="left-img">
            <img
              src={require(`../../content/assets/top_image/${node.frontmatter.topImg}`)}
              alt=""
            />
          </div>
        ) : (
          ""
        )}
        <header>
          <span>{title}</span>
          {node.frontmatter.top && (
            <div className="top-badge">置顶</div>
          )}
        </header>
        <p
          dangerouslySetInnerHTML={{
            __html: node.frontmatter.description || node.excerpt,
          }}
        />
        <div className="main-nav">
          <span>
            {node.frontmatter.tags ? (
              node.frontmatter.tags.map(tag => {
                return <i key={tag}>{tag}</i>
              })
            ) : (
              <i>no tags</i>
            )}
          </span>
          <small>{node.frontmatter.date}</small>
        </div>
      </Link>
    )
  }
}

export default PostItem
