import React from "react"
import { useStaticQuery, graphql } from "gatsby"


function NavRight() {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)
  const new_posts = data.allMarkdownRemark.edges.slice(0, 4)
  return (
    <div className={`NavRight-class`}>
      <span className='news'>最新文章</span>
      <ul>
        {new_posts.map(({ node },i) => {
          const imgUrl=require(`../../../../content/assets/new_posts/${i+1}.png`)
          return <li key={node.fields.slug}>
            <div className='imgBox' style={{backgroundImage:`url(${imgUrl})`}}></div>
            {/* <img src={require(`../../../../content/assets/new_posts/${i+1}.png`)} alt="文章配图" className='textImg'/> */}
            <span className='textTitle'>{node.frontmatter.title}</span>
            
          </li>
        })}
      </ul>
    </div>
  )
}

export default NavRight
