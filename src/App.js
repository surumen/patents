import React, { Fragment, Component } from 'react';
import logo from './logo.svg';
import './App.css';

import './assets/style.css';

import Display from './data/Display';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Display />
      </Fragment>
    );
  }
}

export default App;
