import React, { Component } from 'react';

import Bio from './Bio';

class Sidebar extends Component {
  render() {
    return (
      <div className={"Sidebar"}>
        i am sidebar
        <Bio />
      </div>
    );
  }
}

export default Sidebar;