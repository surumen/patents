import React, { Component } from 'react';

import ReactDOM from 'react-dom';

import '../assets/main.css';
import logo from'../assets/logo.svg';

class Header extends Component {
  render() {
    return (
      <header className="bluebg" id="top">
        <div className="container-fluid">
          <nav className="row">
            <div className="col-xs-6 col-lg-12 logo">
              <img height={64} width={200} src={logo} style={{enableBackground: 'new 0 0 400 64'}} alt="patentsearch" />
            </div>
            <div className="col-lg-8 visible-lg main-nav">
              <ul>
                <li><a href="http://patentsapi-dev.us-east-2.elasticbeanstalk.com/">About this service</a></li>
                <li><a href="http://patentsapi-dev.us-east-2.elasticbeanstalk.com/">Developers</a></li>
                <li><a href="http://patentsapi-dev.us-east-2.elasticbeanstalk.com/">Workflow</a></li>
                <li><a href="http://patentsapi-dev.us-east-2.elasticbeanstalk.com/">API Documentation</a></li>
              </ul>
            </div>
            <div className="col-xs-6 col-lg-4 sec-nav text-right">
              <ul>
                <li><a href="#viewpatents">Search Patent Applications</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;