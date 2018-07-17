import React, { Component } from 'react';
import PostData from "../data/post.json";
import PostDetail from './PostDetail';

class PostList extends Component {
	handleDataCallback(postItem) {
		// alert(txtMsg);
		console.log(postItem);
	}

	render() {
		return (
			<div>
				<h1>hello there!</h1>

				{PostData.map((post, index) => {
					return <PostDetail
						post={post}
						key={`post-list-key ${index}`}
						dataCallback={this.handleDataCallback.bind(this)}
					/>;
				})}
			</div>
		);
	}
}

export default PostList;
