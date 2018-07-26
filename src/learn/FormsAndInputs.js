import React, { Component } from 'react';

function MyTextInput(props) {

  function handlechange(event) {
    if (props.onChange) {
      props.onChange(event)
    }
  }

  return (
    <p>
      <input type='email' value={props.value} name={props.name} ref={props.inputRef} onChange={handlechange} />
    </p>
  );
}

class FormsAndInputs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      content: '',
      email: ''
    };
    this.inputFullNameRef = React.createRef();
    this.inputEmailRef = React.createRef();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const data = this.state;
    // console.log(this.inputFullNameRef.current.value);
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

  handleFocusClick = (event) => {
    event.preventDefault();
    this.inputEmailRef.current.focus();
  }

  handleClearClick = (event) => {
    event.preventDefault();
    // this.inputFullNameRef.current.value = '';
    this.setState({
      fullName: ''
    });
  }


  render() {
    const { fullName } = this.state;
    const { email } = this.state;

    return (
      <div>
        <h1>Forms and Inputs</h1>
        <p>Full name is: {fullName}</p>
        <form onSubmit={this.handleSubmit}>
          <MyTextInput inputRef={this.inputEmailRef} value={email} name='email' onChange={this.handleInputChange} />
          <p><input ref={this.inputFullNameRef} type='text' placeholder='Your name' value={fullName} name='fullName' onChange={this.handleInputChange} /></p>
          <p>
            <textarea
              ref={node => this.inputContentRef = node}
              placeholder='Your message'
              name='content'
              required={true}
              onChange={this.handleInputChange}
            />
          </p>
          <p><button>Send Message</button></p>
          <p><button onClick={this.handleFocusClick}>Focus</button></p>
          <p><button onClick={this.handleClearClick}>Clear</button></p>
        </form>
      </div>
    );
  }

  componentDidMount() {
    // this.inputFullNameRef.current.focus();
  }
}

export default FormsAndInputs;