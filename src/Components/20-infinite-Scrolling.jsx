import React, { useState } from 'react'
import { useEffect } from 'react/cjs/react.development'
import { APIHandler } from '../FireBase/3-FireStore-Setup-Fetching'

const InfiniteScrolling = () => {
	const [users, setUsers] = useState('')
	const [latestDoc, setLatestDoc] = useState(null)
	console.log(latestDoc, `latestDoc`)
	console.log(users.length, `users`)

	const fetch = async () => {
		const userArray = await APIHandler.fetchUserInfiniteScroll(latestDoc)
		setLatestDoc(userArray.length)
		setUsers(userArray)
	}
	useEffect(() => {
		fetch()
	}, [])
	if (!users) return null
	else
		return (
			<div>
				<h1>//20</h1>
				{users.map((user) => {
					return (
						<div>
							<h4>
								user name:"{user.name}" age: "{user.Age}"
							</h4>
						</div>
					)
				})}
				<button onClick={fetch}>Get more Users</button>
			</div>
		)
}

export default InfiniteScrolling
