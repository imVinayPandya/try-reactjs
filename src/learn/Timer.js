import React, { Component } from 'react';

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      count: 100
    };
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>Current Count {count}</h1>
      </div>
    );
  }

  componentDidMount() {
    const { startCount } = this.props;
    this.setState(prevState => ({
      count: startCount
    }));
    
    this.doIntervalChange();
  }

  doIntervalChange = () => {

    this.myInterval = setInterval(() => {
      this.setState(prevState => ({
        count: prevState.count - 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }
}

export default Timer;