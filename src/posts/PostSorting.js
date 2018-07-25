import React, { Component } from 'react';
import PostData from '../data/post.json';
import PostDetail from './PostDetail';

class PostSorting extends Component {
  constructor(props) {
    super(props);
    this.toogleListReverse = this.toogleListReverse.bind(this);
    this.toogleSortDate = this.toogleSortDate.bind(this);
    this.sortByDate = this.sortByDate.bind(this);

    this.state = {
      postList: [],
      isOrdestFirst: true
    };
  }

  sortByDate() {
    console.log(this.state.isOrdestFirst);
    const { postList } = this.state;
    let newPostList = postList;

    if (this.state.isOrdestFirst) {
      newPostList = postList.sort((a, b) => a.date > b.date);
    } else {
      newPostList = postList.sort((a, b) => a.date < b.date);
    }

    this.setState({
      postList: newPostList
    });
  }

  toogleSortDate(event) {
    this.sortByDate();
    this.setState({ isOrdestFirst: !this.state.isOrdestFirst });
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
      postList: PostData,
      isOrdestFirst: true
    });
  }

  render() {
    const { postList } = this.state;
    return (
      <div>
        <h1>
          hello there!
        </h1>
        <button onClick={this.toogleListReverse}>Reverse Order</button>&nbsp;&nbsp;
        <button onClick={this.toogleSortDate}>Reverse By date</button>
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
