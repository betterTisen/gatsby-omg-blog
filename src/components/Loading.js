import React, { Component } from "react"

class Loading extends Component {
  render() {
    return (
      <div id="dataloading" className="flip">
        <div className="spinner">
          <div className="bounce1"></div>
          <div className="bounce2"></div>
          <div className="bounce3"></div>
        </div>
      </div>
    )
  }
}

export default Loading
