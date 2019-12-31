import React, { Component } from "react"

class Header extends Component {
  render() {
    const { title } = this.props
    return (
      <div className={"Header"}>
        <img src='/static/4-50469011d76fe140a9878b490c4a4cb3.png' alt='大图' className='headLogo'/>
        <span>{title}</span>
         <div className='searchBox'>
           <input type="text" placeholder='请输入...'/>
           <laber>&#xe621;</laber>
         </div>
      </div>
    )
  }
}

export default Header
