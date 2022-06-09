import React from 'react';
import reactDom from 'react-dom';

/*

WHAT IS REACT 

A) At the heart of all React applications are components 
    - A piece of UI 
    - When building app with react we build independent, isolated , re-usable components and then put them together to compose complex UI’s

B) Every React app has at least one component called the ROOT component 
	- This component represents the entire application and contains all the child components 
	- Every react app is essentially a tree of components 

C) A component is  typically implemented as a JS class (now more as a function) that has some state and a render method

	- the state is the data we want the component to display when the component is rendered 
	- the render method is responsible to describing what the UI should look like 
	- the output of this render is a react element  

D) The output of the react element is not really a DOM element 
	- it is a simple plain JS object that represent the DOM element in memory
	- React keeps a lightweight representation of the DOM in memory which is referred to as virtual DOM

E)  When we change the state of a component we get a new react element 
    - React then will compare this element and its children to the previous one and figure what has changed 
    - And then it will update the real DOM to keep it in sync with the virtual DOM 

G)  React is only a library 
    - It only takes care of rendering the view and making sure the view is in sync with the state 
    - When building apps with react we need to use other libraries for routing or calling https services 

H)  Webpack is in charge of building the website. Thats why you don’t need an  script link in the index to your js 

I) The reason why you are able to write html in Js that looks like Html is because JSX is taking it behind the scenes and compiling it into actual JS readable code. 

*/

/*

CREATING A COMPONENT

There are two ways of creating a react component Function and Class 
 
Now a days 99% of time Functions are used and not classes 

*/

/*---------------------------------Creating a Fucntional Component-----------------------------------------*/

export const FuncComponent = () => {
	return (
		<div>
			<h1>Functional Component //3</h1>
		</div>
	);
};

/*

JSX is taking this function and compiling it an a way is acceptable for JS Basically this 

createDiv = (tag, attr, innerHTML) => {
  const div = document.createElement(tag) *$(H1)
  div.innerHTML = innerHTML *$(`My-Text`)
  div.setAttribute(`style`, attr.style)  *$({style:`color:red`})
}

document.getElementById('root').append(createDiv(`h1`, {style:`color:red`}, `my-text`)) all of this are passed as arguments to the div

*/

/*---------------------------------Creating a Class Component-----------------------------------------*/
/*

1) When creating a class component you need to declare class and extends React.component

2) it needs a function called render that returns HTML tag

*/

export class ClassComponent extends React.Component {
	render = () => {
		return (
			<div>
				<h1>ClassComponent //3</h1>
			</div>
		);
	};
}
