import React, { Fragment, Component } from 'react';

import Intro from './components/Intro';
import Header from './components/Header';
import PatentsGrid from './components/PatentsGrid';
import Charts from './components/Charts';

import './assets/main.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Intro />
        <section>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6"><h2>All Patent Applications</h2></div>
            </div>
          </div>
          <div className="container-fluid spb">
            <div className="row">
              <PatentsGrid />
            </div>
          </div>
        </section>
        <Charts />
      </Fragment>
    );
  }
}

export default App;
