import React, { Component } from 'react';

class PostDetail extends Component {

	constructor(props) {
		super(props);
		this.state = {
			showContent: true
		};
	}

	titleWasClicked(event) {
		event.preventDefault();
		const { dataCallback } = this.props;
		if (dataCallback !== undefined) {
			dataCallback('hello world');
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
		const { post } = this.props;
		const { showContent } = this.state;
		return (
			<div>
				<h1 onClick={this.titleWasClicked.bind(this)}>{post.title}</h1>
				{showContent === true ? <p>{post.content}</p> : ""}
				<button onClick={this.toogleContent.bind(this)}>Toogle Content Display</button>
			</div>
		);
	}
}

export default PostDetail;
