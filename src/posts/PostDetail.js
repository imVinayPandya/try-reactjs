import React, { Component } from 'react';

class PostDetail extends Component {
	// constructor(props){
	//   super(props);
	//   this.titleWasCliked =  this.titleWasClicked.bind(this);
	// }

	titleWasClicked(event) {
		event.preventDefault();
		// alert("clicked"+this.props);
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
