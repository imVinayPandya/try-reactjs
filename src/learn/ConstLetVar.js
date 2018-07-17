import React from 'react';

class ConstLetVar extends React.Component {
	constructor(props) {
		// constructor will run first
		super(props);

		// someVar = "Test test";
		// const someVar = "Hello";
		let someVar = "Hello bro...";
		if (someVar === "Hello bro...") {
			someVar = "Changed";
		}

		var someVar2 = "method";

		console.log(someVar);
	}

	render() {
		//  render run last

		// someVar = "Test test";
		// console.log(someVar);
		// console.log(someVar2);
		return (
			<div>
				<h1>Hello world</h1>
			</div>
		);
	}
}

export default ConstLetVar;