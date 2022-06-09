import React from 'react'
import useCustomeHookToFetch from './21-Custome-Hooks'
import useEasyHook from './21-EasyHook'
const UseCustomeHook = () => {
	const { name } = useEasyHook('mario')
	return (
		<div>
			<h1>{name} // 21.A</h1>
		</div>
	)

	// const url = 'https://pokeapi.co/api/v2/pokemon/ditto'
	// const { data, eMessage, isPending } = useCustomeHookToFetch(url)
	// console.log(isPending, 'ispending')
	// return (
	// 	<div>
	// 		21//
	// 		<div>{eMessage && <div>{eMessage}</div>}</div>
	// 		<div>{data && <div>{data.name}</div>}</div>
	// 		<div>{isPending && <div>Loading...</div>}</div>
	// 	</div>
	// )
}

export default UseCustomeHook
