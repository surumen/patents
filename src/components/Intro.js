import React, { Component } from 'react';

import ReactDOM from 'react-dom';

import '../assets/main.css';

class Intro extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className="bluebg notp">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 intro">
              <h1>Patent Applications from the USPTO Database</h1>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Intro;