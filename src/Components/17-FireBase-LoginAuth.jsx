import React, { useState } from 'react'
import { APIHandler } from '../FireBase/3-FireStore-Setup-Fetching'

const LoginFireBase = () => {
	const [newUser, setNewUser] = useState('')
	const [newPassword, setNewPassword] = useState('')
	const [newName, setNewName] = useState('')
	const [loginUser, setLoginUser] = useState('')
	const [loginPassword, setLoginPassword] = useState('')
	const [registerMessage, setRegMessage] = useState(null)

	const createNewUser = async () => {
		try {
			// const newUserUID = createUser.user.uid

			const createUser = await APIHandler.registerNewUser(newUser, newPassword)
			const userUID = createUser.user.uid
			// J.3 BELOW
			addNameToDB(userUID)
			//J.3
			setRegMessage(<p>Success</p>)
		} catch (e) {
			setRegMessage(<p>{e.message}</p>)
		}
	}

	// J.3
	const addNameToDB = async (userUID) => {
		const userProfile = {
			name: newName,
		}
		await APIHandler.createUserProfileInfo(userProfile, userUID)
	}

	const signInUser = async () => {
		try {
			await APIHandler.logginUser(loginUser, loginPassword)
			setRegMessage(<p>Success</p>)
		} catch (e) {
			setRegMessage(<p>{e.message}</p>)
		}
	}

	// All changes captures happening here
	const handleOnChage = {
		handleNewUser: (e) => {
			setNewUser(e.target.value)
		},
		handleNewPassword: (e) => {
			setNewPassword(e.target.value)
		},
		handleLoginUser: (e) => {
			setLoginUser(e.target.value)
		},
		handleLoginPassword: (e) => {
			setLoginPassword(e.target.value)
		},
		handleNewName: (e) => {
			setNewName(e.target.value)
		},
	}

	return (
		<div>
			<h1>Fire Base Register and Login // 17</h1>
			<input placeholder="name" onChange={handleOnChage.handleNewName}></input>
			<input
				placeholder=" Create UserName"
				onChange={handleOnChage.handleNewUser}
			></input>
			<input
				placeholder=" Create Password"
				onChange={handleOnChage.handleNewPassword}
			></input>
			<button onClick={createNewUser}>Register</button>
			<div>{registerMessage}</div>
			<input
				placeholder="Enter username"
				onChange={handleOnChage.handleLoginUser}
			></input>
			<input
				placeholder="Enter Passwor"
				onChange={handleOnChage.handleLoginPassword}
			></input>
			<button onClick={signInUser}>Login</button>
		</div>
	)
}

export default LoginFireBase
