import React from 'react'
import { useState } from 'react/cjs/react.development'
import { auth } from '../FireBase/3-FireStore-Setup-Fetching'

const LogginStatus = () => {
	const [loggedStatus, setLoggedStatus] = useState(undefined)
	// auth.onAuthStateChanged((user) => {
	// 	if (user.email == null) {
	// 		setLoggedStatus('no email')
	// 	} else return
	// 	setLoggedStatus(user.email)
	// })
	return (
		<div>
			<h1>current user logged in {loggedStatus} // 18</h1>
		</div>
	)
}

export default LogginStatus
