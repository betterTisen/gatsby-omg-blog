import React from "react"
import { connect } from "react-redux"

const MaskingComponent = ({ hambState, blogStatusChange }) => (
  <div>
    {hambState && (
      <div
        onClick={blogStatusChange}
        onKeyDown={() => {}}
        role="button"
        tabIndex={0}
        className="Masking-class"
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
