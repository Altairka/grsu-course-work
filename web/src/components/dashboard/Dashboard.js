import React from "react";
import { connect } from "react-redux";

import Navigation from "../navigation";

const mapStateToProps = (state) => {
  return { 
    
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div id="dashboard">
        <Navigation />
        <h1> Hello</h1>
      </div>
    );
  }
}

const Component = connect(mapStateToProps, mapDispatchToProps)(Dashboard);

export default Component;
