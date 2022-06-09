import React from 'react'
import { useContext } from 'react'
import { NameContext } from '../z-15-Example-Component/NameContext'

const ProfileDisplay = () => {
	const { name } = useContext(NameContext)
	return (
		<div>
			<h4>Profile Display</h4>
			<h5>Display user name : {name}</h5>
		</div>
	)
}

export default ProfileDisplay
