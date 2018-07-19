import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

class ReactMarkdownExample extends Component {
  render() {
    const { input } = this.props;
    const disAllowed = [];
    return (
      <div>
        <ReactMarkdown className='vinay-class' source={input} disallowedTypes={disAllowed} />
      </div>
    );
  }
}

export default ReactMarkdownExample;