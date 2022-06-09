import React from 'react'

/*

Every Element has a lifecycle (Turn on a TV - Change Channels - Turn off )

React components alos have a lifecycle 

Components 

1) Loads (rendered) = Mounted
2) Up-dated (re-render) = updated 
3) un-loads (removed) = UnMounted 

In addtion you have to parameters for each Component lifeCycle 

A) Component Did Mount = already happened 
B) Component Will Mount = about to happen

In CounterClass you see how its done with a Class. This is just to show the genereal view. When using functions its different 

*/

class CounterClass extends React.Component {
	state = {
		count: 0,
	}
	addCount = () => {
		this.setState({ count: this.state.count + 1 })
	}

	componentDidMount = () => {
		// console.log(
		// 	// 'compenent did mount finished mounting now  and only will appear once '
		// )
	}

	componentDidUpdate = () => {
		// console.log('compenent did updated now ')
	}

	componentWillUnmount = () => {
		// console.log('will unmount right after this')
	}

	render = () => {
		// console.log('this will appear before component Did Mount  & comp updated')
		return (
			<>
				<h4>Count: {this.state.count} //10 check console</h4>
				<button onClick={this.addCount}>Add Count</button>
			</>
		)
	}
}

export default CounterClass
// const Counter = () => {
// 	const [countState, countSetState] = useState(0)

// 	const addCount = () => {
// 		countSetState(countState + 1)
// 	}

// 	componentDidMount = () => console.log('component did mount ')
// 	return (
// 		<>
// 			<h4>Count: {countState}</h4>
// 			<button onClick={addCount}>Add Count</button>
// 		</>
// 	)
// }

// export default Counter
