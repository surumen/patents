import React, { Component } from 'react';

import ReactDOM from 'react-dom';

import '../assets/main.css';

class Charts extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className="distribution">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4"><h3 className="xsmall bt">Data Summary</h3><span id="location">Patent Status Distribution</span></div>
            <div className="col-lg-4"><h3 className="xsmall bt">Distribution by Assignee(s)</h3><span id="blcount">chart.js</span></div>
          </div>
        </div>
      </section>
    );
  }
}

export default Charts;