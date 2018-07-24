import React, { Component } from 'react';
import PostData from '../data/post.json';
import PostDetail from './PostDetail';

class PostSorting extends Component {
  constructor(props) {
    super(props);
    this.toogleListReverse = this.toogleListReverse.bind(this);

    this.state = {
      postList: []
    };
  }

  toogleListReverse(event) {
    const { postList } = this.state;
    const newPostList = postList.reverse();
    this.setState({
      postList: newPostList
    });
  }

  componentDidMount() {
    this.setState({
      postList: PostData
    });
  }

  render() {
    const { postList } = this.state;
    return (
      <div>
        <h1>
          hello there!
        </h1>
        <button onClick={this.toogleListReverse}>Reverse Order</button>
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

export default PostSorting;
