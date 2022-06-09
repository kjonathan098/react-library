import React, { useState } from 'react';
import reactDom from 'react-dom';

/*
 < ---------------------- States ------------------------------------ >

 States is a way to change data in a component and when React detects a new change thats when Auto it renders the portion of the DOM the changed with udpated version

 There are four components in states

 initial state = the state that the DOM starts with 
 current state = the state of the current DOM 
 set state = is used to change the data inside current state hence triggering the chain of events 

    TO USE STATES YOU NEED TO IMPORT {useState} from "react" import React, {useState} from "react";


*/

/*
 < ---------------------- States  with Functions ------------------------------------ >

 To use state with functions we need to use React HOOKS 

 we deconstructed like this

 const [currentState, setState] = useState (initialState)

    this is the same as writing:

    const currentState = useState (initialState)
    const SetState = useState (initialState)


*/

const FuncState = () => {
	const [currentState, setState] = useState(false);

	const colorChanger = () => {
		setState(!currentState);
	};

	const style = {
		color: currentState ? 'black' : 'grey',
	};

	return (
		<div>
			<h1 style={style}>Change my color //6</h1>
			<button onClick={colorChanger}>Change Color //6</button>
		</div>
	);
};

export default FuncState;
