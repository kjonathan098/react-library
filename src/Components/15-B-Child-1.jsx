import React from 'react'
import { useContext } from 'react'
import { NameContext } from '../z-15-Example-Component/NameContext'

/* Reciever of Context */

const HomeDisplay = () => {
	const { name, handleOnClick } = useContext(NameContext)

	return (
		<div>
			<h4>Home Display</h4>
			<h5>Display user name {name}</h5>
			<button onClick={handleOnClick}> Change Name</button>
		</div>
	)
}

export default HomeDisplay
