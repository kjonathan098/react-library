import React from 'react'

/*

You can also send stuff from parent to child like this 
<Parent>
    <H1>Say Hi<H1>
</Parent>

But is important to specify where in the child component you wante it to be. So you can write {props.children} wherever you wnat it to appear.
*/

const PropsChildren = (props) => {
	return (
		<div>
			<h1>Props Chidlrent //9</h1>
			<h2>This is being passed as from the parent: {props.children}</h2>
		</div>
	)
}

export default PropsChildren
