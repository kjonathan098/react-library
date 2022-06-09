import react, { useState } from 'react'
/*

Mapping over an array is an important concept. 

Mapping function is basically doing a For of loop. 

Most cases you will recieve an array insde a prop and you need to loop over its objects inside and extract the info to display it. 

When using the map function is important to give the first HTML compenent a unique key. This so react can check for changes in this div created. Now is also important to give and ID that wont change in the future because if the id changes then react will render again even though the value inside didnt change I.E using indexes as a unique id and deleting an object making all the indexes shift telling react to re-render everything again.

In this example if you passed a state from a parent function it will be shared b/w all the elements created by the map function

If youd wanted that each element had their own function you should call an element inside the map and send all the info to be constructed there and create the state there as well 

*/

const SendingArray = () => {
	const array = [
		{
			name: 'John',
			game: 'soccer',
			userNumber: `1`,
		},

		{
			name: 'maria',
			game: 'basketball',
			userNumber: `2`,
		},
	]
	const [currentState, setState] = useState(array)

	return (
		<div>
			<Looped listOfUsers={currentState} />
		</div>
	)
}
export default SendingArray

const Looped = (props) => {
	return (
		<div>
			//8
			{props.listOfUsers.map((user) => {
				return (
					<div key={user.userNumber}>
						<h5>user name {user.name}</h5> <h6>user game {user.game}</h6>
						<Looped2 user={user} />
					</div>
				)
			})}
		</div>
	)
}

const Looped2 = (props) => {
	const [currentState, setState] = useState(false)

	const switcher = () => {
		setState(!currentState)
	}

	return (
		<div>
			<button onClick={switcher}>Show User // 8 ex2</button>
			<div>
				{currentState
					? `${(
							<div>
								<h5>user {props.user.name}</h5> <h6>game {props.user.game}</h6>
							</div>
					  )}`
					: `false`}
			</div>
		</div>
	)
}
