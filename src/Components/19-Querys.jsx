import React, { useState, useEffect } from 'react'
import { APIHandler } from '../FireBase/3-FireStore-Setup-Fetching'

const Queries = () => {
	const [userQueried, setUserQ] = useState()
	// console.log(userQueried)
	useEffect(() => {
		const getUser = async () => {
			const user = await APIHandler.doQuery('Mosh')
			setUserQ(user)
			// console.log(user[0])
		}
		getUser()
	}, [])
	if (!userQueried) {
		return null
	} else
		return (
			<div>
				<h2>
					{userQueried.map((us) => {
						return (
							<div>
								<h4>
									This was return from query {us.name}, {us.Age}// 19
								</h4>
							</div>
						)
					})}
				</h2>
			</div>
		)
}

export default Queries
