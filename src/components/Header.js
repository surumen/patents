import React, { Component } from 'react';

import ReactDOM from 'react-dom';

import '../assets/main.css';

class Header extends Component {

  render() {
    return (
      <header className="bluebg" id="top">
        <div className="container-fluid">
          <nav className="row">
            <div className="col-xs-6 col-lg-12 logo">
              <svg version={1.0} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 400 64" style={{enableBackground: 'new 0 0 400 64'}} xmlSpace="preserve">
                <defs><style dangerouslySetInnerHTML={{__html: ".cls-1{font-size:60px;fill:#fff;font-family:GoogleSans-Bold, Google Sans;font-weight:700;}.cls-2{letter-spacing:-0.01em;}.cls-3{letter-spacing:-0.02em;}.cls-4{letter-spacing:-0.02em;}.cls-5{letter-spacing:0.01em;}.cls-6{letter-spacing:0em;}.cls-7{letter-spacing:-0.03em;}" }} /></defs><title>logo</title><text className="cls-1" transform="translate(0 51.48)">p<tspan className="cls-2" x="37.62" y={0}>a</tspan><tspan className="cls-3" x="70.74" y={0}>t</tspan><tspan x="94.8" y={0}>e</tspan><tspan className="cls-4" x="130.02" y={0}>n</tspan><tspan className="cls-5" x="164.52" y={0}>t</tspan><tspan className="cls-6" x="190.14" y={0}>se</tspan><tspan x="256.14" y={0}>a</tspan><tspan className="cls-7" x="289.8" y={0}>r</tspan><tspan x="313.68" y={0}>ch</tspan></text>
              </svg>
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