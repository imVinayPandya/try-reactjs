import React, { Component } from 'react';
import PostData from '../data/post.json';
import PostDetail from './PostDetail';

class PostList extends Component {
  constructor() {
    super();
    this.handleDataCallback = this.handleDataCallback.bind(this);
    this.handlePostRemove = this.handlePostRemove.bind(this);

    this.state = {
      postList: []
    };
  }

  componentDidMount() {
    this.setState({
      postList: PostData
    });
  }

  updateBackend(currentPostList) {
    console.log("updating...");
    this.setState({
      postList: currentPostList
    });
  }

  handlePostRemove(postItem) {
    let currentPostList = this.state.postList;
    currentPostList.pop(postItem);

    this.updateBackend(currentPostList);
  }

  handleDataCallback(postItem) {
    // alert(txtMsg);
    // console.log(postItem);
    let currentPostList = this.state.postList;
    currentPostList.push(postItem);

    this.setState({
      postList: currentPostList
    });
  }

  render() {
    const { postList } = this.state;
    return (
      <div>
        <h1>
          hello there!
        </h1>

        {postList.map((post, index) => {
          return <PostDetail
            post={post}
            key={`post-list-key ${index}`}
            didHandleRemove={this.handlePostRemove}
            dataCallback={this.handleDataCallback}
          />;
        })}
      </div>
    );
  }
}

export default PostList;
