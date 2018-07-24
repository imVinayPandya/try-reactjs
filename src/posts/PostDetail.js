import React, { Component } from 'react';

class PostDetail extends Component {
  constructor(props) {
    super(props);

    this.toogleContent = this.toogleContent.bind(this);
    this.titleWasClicked = this.titleWasClicked.bind(this);
    this.handleRemoveContentButton = this.handleRemoveContentButton.bind(this);

    this.state = {
      showContent: true,
      postItem: null
    };
  }

  setPostStateOnProps() {
    const { post } = this.props;
    this.setState({
      postItem: post
    });
  }

  componentDidUpdate(prevProp, prevState, snapShop) {
    if (this.props !== prevProp) {
      this.setPostStateOnProps();
    }
  }

  componentDidMount() {
    this.setPostStateOnProps();
  }

  handleRemoveContentButton(event) {
    event.preventDefault();
    if (this.props.didHandleRemove) {
      this.props.didHandleRemove(this.props.post);
    }
  }

  titleWasClicked(event) {
    event.preventDefault();

    let newPostItem = this.props.post;

    newPostItem["title"] = "This is my new title";

    this.setState({
      postItem: newPostItem
    });

    const { dataCallback } = this.props;
    if (dataCallback !== undefined) {
      dataCallback(newPostItem);
    }
  }

  toogleContent(event) {
    event.preventDefault();
    this.setState({
      showContent: !this.state.showContent
    });
  }

  render() {
    // below statement is equal to const post = this.props.post
    const { postItem } = this.state;
    const { showContent } = this.state;
    return (
      <div>
        {postItem !== null
          ? <div>
            <h1 onClick={this.titleWasClicked}>{postItem.title}</h1>
            {showContent === true ? <p>{postItem.content}</p> : ''}
            <button onClick={this.toogleContent}>Toogle Content Display</button>&nbsp;&nbsp;
            <button onClick={this.handleRemoveContentButton}>Remove Content</button>
          </div>
          : ''}
      </div>
    );
  }
}

export default PostDetail;
