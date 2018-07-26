import React, { Component } from 'react';

class FormsAndInputs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: ''
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const data = this.state;
    console.log(data);
  }

  handleInputChange = (event) => {
    event.preventDefault();
    // console.log(event);
    // console.log(event.target.name);
    // console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    const { fullName } = this.state;

    return (
      <div>
        <h1>Forms and Inputs</h1>
        <p>Full name is: {fullName}</p>
        <form onSubmit={this.handleSubmit}>
          <p><input type='text' placeholder='Your name' value={fullName} name='fullName' onChange={this.handleInputChange} /></p>
          <p><button>Send Message</button></p>
        </form>
      </div>
    );
  }

  // componentDidMount() {
  //   this.setState({
  //     fullName: "Pandya"
  //   });
  // }
}

export default FormsAndInputs;