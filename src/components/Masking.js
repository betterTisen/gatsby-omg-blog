import React from "react"
import { connect } from "react-redux"

const MaskingComponent = ({ hambState, blogStatusChange }) => (
  <div>
    {hambState && (
      <div
        onClick={blogStatusChange}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: "100vw",
          height: "100vh",
          background: "rgba(0,0,0,0.7)",
        }}
      ></div>
    )}
  </div>
)
const mapStateToProps = ({ hambState }) => {
  return { hambState }
}
const mapDispatchToProps = dispatch => {
  return { blogStatusChange: () => dispatch({ type: `OPEN_MOBILE_SIDEBAR` }) }
}
const ConnectedMasking = connect(
  mapStateToProps,
  mapDispatchToProps
)(MaskingComponent)

class Masking extends React.Component {
  render() {
    return <ConnectedMasking />
  }
}

export default Masking
