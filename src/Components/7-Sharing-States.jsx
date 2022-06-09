import react, { useState } from 'react'

/*

The point of REACT is that components are indepenedent and you can call a compoenent multiple times in your app. 

The issue here is how you update the DOM accroding to the component. Or how do you udpate another component when a brother component made a change? 

Thats why we share the STATE data from a Parent element to each child. 

We pass the STATE holding the data as a props. 

To manipualte the of a STATE from a child to the parent we also send a function (written in the parent component) as a prop that gets triggered from the child. The function itself is the one who manipulates the STATE which will then get re-rendered. 

IMPORTANT.. 

WHENEVER ONE CHILD IS MANUPALITING OTHER BROTHERS (CHILDS) IT MEANS THAT THE STATE IS BEEN PASSED TO ALL OF THEM BY THE PARENT. THEN EACH CHILD WILL AFFECT THE STATE.  (MY MISTAKE WITH SHOW DISPLAY DATE REACT PROJ ONE)

IF YOU DONT WANT THIS THEN YOU NEED TO CREATE A STATE INSIDE THE CHILDS AND WHENENVER ITS BEEING CALLED MUTIPLE TIMES IN YOUR APP EACH CHILD WILL COME WITH ITS OWN STATE THAT CAN BE MANIPULATED ONLY FOR HIM 

THIS IS IMPORTANT WHEN USING THE MAP FUNCTION

FOR FURTHER EXPLENATION WHATCH REACT CLASS # 4 TIMESTAMP 1:00:00

*/

const ParentElement = () => {
	let init = 'initial state'
	const [sharedState, sharedSetState] = useState(init)

	const onClickActionButtonOne = () => (
		(init = 'button one changed me'), sharedSetState(init)
	)

	const onClickActionButtonTwo = () => (
		(init = 'button two changed me'), sharedSetState(init)
	)

	const reset = () => {
		sharedSetState('initial state')
	}

	return (
		<div>
			<h1>{sharedState} //7</h1>
			<ChildElementOne onClickAction={onClickActionButtonOne} />
			<ChildElementTwo onClickAction={onClickActionButtonTwo} />
			{/* <ButtonEx7 name={`Btn 1`} onClickAction={onClickActionButtonOne} />
			<ButtonEx7 name={`Btn 2`} onClickAction={onClickActionButtonTwo} /> */}
			<ButtonEx7 name={'reset'} onClickAction={reset} />
		</div>
	)
}

export default ParentElement

const ChildElementOne = (props) => {
	return (
		<div>
			<ButtonEx7 name={`Btn 1`} onClickAction={props.onClickAction} />
		</div>
	)
}

const ChildElementTwo = (props) => {
	return (
		<div>
			<ButtonEx7 name={`Btn 2`} onClickAction={props.onClickAction} />
		</div>
	)
}

const ButtonEx7 = (props) => {
	return <button onClick={props.onClickAction}>{props.name}</button>
}
