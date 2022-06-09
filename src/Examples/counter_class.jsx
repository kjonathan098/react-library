import React from 'react';

class CounterClass extends React.Component {
	state = {
		count: 0,
	};

	handleCount = () => {
		this.setState({
			count: this.state.count + 1,
		});
	};

	componentDidMount = () => {
		console.log(`didMount`);
	};

	componentDidUpdate = () => {
		console.log(`update`);
	};

	render = () => {
		console.log('render');
		return (
			<div>
				<h1>Count, {this.state.count}</h1>
				<button onClick={this.handleCount}>Add</button>
			</div>
		);
	};
}

export default CounterClass;
