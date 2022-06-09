import React, { useState, useEffect } from 'react'
import axios from 'axios'

// Axios .then
const Fetches = () => {
	const [pokeName, pokeNameSet] = useState('')
	useEffect(() => {
		const url = 'https://pokeapi.co/api/v2/pokemon/ditto'

		axios.get(url).then((response) => {
			const name = response.data.name
			pokeNameSet(name)
		})
	}, [])

	if (!pokeName) return <div>Loading...</div>
	return <div>{pokeName} // 13 .then</div>
}

export default Fetches

// Await

export const AwaitFetch = () => {
	const [pokeName, pokeNameSet] = useState('')
	useEffect(async () => {
		const url = 'https://pokeapi.co/api/v2/pokemon/ditto'

		const response = await axios.get(url)
		const name = response.data.name
		pokeNameSet(name)
	}, [])

	if (!pokeName) return <div>Loading...</div>
	return <div>{pokeName} // 13 await</div>
}
