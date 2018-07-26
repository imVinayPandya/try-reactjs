import React, { Component } from 'react';

// class ParentWrapper extends Component {
//   render() {
//     const { alertType } = this.props;
//     const { children } = this.props;
//     return (
//       <div className={'alert alert-' + alertType}>{children}</div >
//     );
//   }
// }

function AlertBox(props) {
  return <div className={'alert alert-' + props.alertType}>{props.children}</div>;
}

function WelcomeHereDialog() {
  return <AlertBox alertType="danger">
    <h1>Hello WelcomeHereDialog here :p</h1>
  </AlertBox>;
}

export { AlertBox };
export default WelcomeHereDialog;