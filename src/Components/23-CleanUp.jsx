import { cleanup } from '@testing-library/react'
import React, { useEffect, useState } from 'react'
/*

Its important when using useEffect to clean up the function bc if you unmount the component before it has finalized the function it gets stock in a loop bc it cant udpate the state

CONFUSING I KNOW 

To clean a useEffect function its easy 

A- at the end of the useEffect function just return another function. It can be empty! 

Thats It 

B- Moreover if you want to cancel a fetch before it has finalized becuase component will unmount (not neccesay anymore) then inside the return cleanup add controller.abort()

*/
const CleanUp = () => {
	const [name, setName] = useState()
	useEffect(() => {
		'Go do Fetch'
		setName('fetchedName')
		return () => {
			controller.abort()
		}
	}, [])
	return <div></div>
}

export default CleanUp
