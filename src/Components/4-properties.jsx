import React from 'react';
import reactDom from 'react-dom';

/*

When using normal function you can pass parameters when calling the funcion

const addFunc = (a, b) => {
  return a + b
}

addFunc (1, 2)


How do we pass parameters in a component ? 

1 - When calling the Element in React.Dom you can pass parameters (data) which will be wrapped in an object
2 - Now when creating to component (Function or class) you can pass arguments which is the object with the data inside
3- You can now deconstruct the object inside to component and use the data you need 
4 - Usually we name the arguement as props 

*/

const PassingArguments = (props) => {
	// console.log(`props`, props);

	return (
		<div>
			<h2>The data passed here was "{props.name}" //4</h2>
		</div>
	);
};

// // reactDom.render(
// 	<PassingArguments name="mosh" />,
// 	document.getElementById('root')
// );

// this will be wrapped in an obj props = {name:`mosh`} // this data will be passed in our app react.Dom render which is were we are calling it

export default PassingArguments;

/*  ZZ) ---------------------- Excercise 2 ------------------------------------ */

/*

Create a parent component Welcome that calls a child component Login
When calling parent func from ReactDom.render send a parameter "name" that the parent component has to pass to the child comp in order for it to use it 
*/

const ParentComponent = (props) => {
	return (
		<div>
			<h3>Parent Comp Exercise</h3>
			<ChildComponent name={props.name} />
		</div>
	);
};

const ChildComponent = (props) => {
	return (
		<div>
			<h4>Child component with name {props.name}</h4>
		</div>
	);
};

// reactDom.render(
// 	<ParentComponent name="mosh" />,
// 	document.getElementById('root')
// );
