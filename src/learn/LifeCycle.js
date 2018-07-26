import React, { Component } from 'react';

class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  render() {
    const { isLoading } = this.state;
    return (
      <h1>{isLoading == true ? "Hello world" : "False"}</h1>
    );
  }

  componentDidMount() {
    // async code or api calls
    this.setState({
      isLoading: false
    });
  }

  componentWillUnmount() {
    // this will called when component unmount
    // you can unsubscribe observable here

  }
}

export default LifeCycle;