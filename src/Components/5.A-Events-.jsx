import React from 'react';
import reactDom from 'react-dom';
import { useState } from 'react';
import CreatedDiv from './5.B-events';

const ButtonEvent = () => {
	const [state, setSate] = useState(false);

	const onButtonClick = () => {
		setSate(!state);
	};

	return (
		<div>
			<button onClick={onButtonClick}>Click Me //5</button>
			<CreatedDiv create={state} />
		</div>
	);
};

/*
Events-B has this 

const CreatedDiv = (props) => {
	let visible = props.create;
	if (visible == true) {
		return (
			<div>
				<h3>WTF</h3>
			</div>
		);
	} else return null;
};
export default CreatedDiv;


*/

export default ButtonEvent;
