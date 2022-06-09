import React from 'react';
import reactDom from 'react-dom';

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
