import React, { Component } from 'react';

class PostDetail extends Component {
  constructor (props) {
    super(props);
    this.state = {
      showContent: true,
      postItem: null
    };
  }

  componentDidMount () {
    const { post } = this.props;

    this.setState({
      postItem: post
    });
  }

  titleWasClicked (event) {
    event.preventDefault();

    const newItem = {
      title: 'this is my new title',
      content: this.props.post.content
    };

    this.setState({
      postItem: newItem
    });

    const { dataCallback } = this.props;
    if (dataCallback !== undefined) {
      dataCallback(newItem);
    }
  }

  toogleContent (event) {
    event.preventDefault();
    this.setState({
      showContent: !this.state.showContent
    });
  }

  render () {
    // below statement is equal to const post = this.props.post
    const { postItem } = this.state;
    const { showContent } = this.state;
    return (
      <div>
        {postItem !== null
          ? <div>
            <h1 onClick={this.titleWasClicked.bind(this)}>{postItem.title}</h1>
            {showContent === true ? <p>{postItem.content}</p> : ''}
            <button onClick={this.toogleContent.bind(this)}>Toogle Content Display</button>
          </div>
          : ''}
      </div>
    );
  }
}

export default PostDetail;
