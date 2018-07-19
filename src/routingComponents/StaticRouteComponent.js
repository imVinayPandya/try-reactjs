import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class StaticRouteComponent extends Component {
  render() {
    return (
      <div>
        <h1>Content that do not provide dynamic content.</h1>
        <Link className='some-link' to='/posts/dynamic/'>Dynamic Page</Link>
      </div>
    );
  }
}

export default StaticRouteComponent;