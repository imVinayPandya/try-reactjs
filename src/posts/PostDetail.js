import React, { Component } from 'react';

class PostDetail extends Component {

	titleWasClicked(event) {
		event.preventDefault();
		const { dataCallback } = this.props;
		if(dataCallback !== undefined) {
			dataCallback('hello world');
		}
	}

	render() {
		// below statement is equal to const post = this.props.post
		const { post } = this.props;
		return (
			<div>
				<h1 onClick={this.titleWasClicked.bind(this)}>{post.title}</h1>
				<p>{post.content}</p>
			</div>
		);
	}
}

export default PostDetail;
