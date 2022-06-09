import React, { useState, useEffect } from 'react'
import { APIHandler } from '../FireBase/3-FireStore-Setup-Fetching'

const Firestore = () => {
	const [users, setUsers] = useState([])
	const [nameNew, setName] = useState('')
	const [ageNew, setAge] = useState(0)
	const [foodNew, setFood] = useState('')

	// F.6
	useEffect(() => {
		const fetchUser = async () => {
			const data = await APIHandler.fetchUser()
			setUsers(data)
		}
		fetchUser()
	}, [])

	//G.4

	// NAMING ERROR.. THIS IS NOT ADDING NEW USER TO APP. JUST ADDING DATA TO A COLLECTION (NO AUTH)
	const handlenewUser = async () => {
		const newUser = {
			name: nameNew,
			Age: ageNew,
			favoriteFood: foodNew,
		}
		await APIHandler.addUser(newUser)
	}

	return (
		<div>
			<h1>Adding Data to FireStore //16</h1>
			<div>
				{users.map((user) => {
					return (
						<div key={user.id}>
							<h3>
								name: {user.name} age: {user.Age} favorite food :{' '}
								{user.favoriteFood}
							</h3>
						</div>
					)
				})}
			</div>
			<input
				placeholder="name"
				onChange={(e) => {
					setName(e.target.value)
				}}
			></input>
			<input
				type="number"
				placeholder="age"
				onChange={(e) => {
					setAge(e.target.value)
				}}
			></input>
			<input
				placeholder="favorite food"
				onChange={(e) => {
					setFood(e.target.value)
				}}
			></input>
			<button onClick={handlenewUser}>Add User</button>
		</div>
	)
}

export default Firestore
