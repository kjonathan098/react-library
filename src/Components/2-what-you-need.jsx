/*
Things you need to get started with React App

A)
Every React app has a JS file called index 
    - This index has a few things 
        1 at top has import React from 'react';
        2 at top has import reactDom from 'react-dom';

*Not sure but i think REACT FROM 'REACT IS A JSX Compiler'

2 ReactDom

ReactDOM is a package that provides DOM specific methods that can be used at the top level of a web app to enable an efficient way of managing DOM elements of the web page.

render()
findDOMNode()
unmountComponentAtNode()
hydrate()
createPortal()

B) Everything is send to App.js which puts all the components together and you only send the App component to the index where is rendered 


*/
import React from 'react'
import reactDom from 'react-dom'

const CreateComponent = () => {
	return (
		<div>
			<h1>How to create your index.js & app.js File</h1>
		</div>
	)
}

reactDom.render(<CreateComponent />, document.getElementById('root')) // Here this doesnt do anything bc react only renders one thing which is index.js or if a JSX file has reactDom.render

export default CreateComponent
