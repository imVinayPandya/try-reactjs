import React, { Component } from 'react';
import PostData from "../data/post.json";

class PostList extends Component {
  render() {
    return (
      <div>
        <h1>hello there!</h1>

        {PostData.map((post, index) => {
          return <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
          </div>
        })}
      </div>
    );
  }
}

export default PostList;
