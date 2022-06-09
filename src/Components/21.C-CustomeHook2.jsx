import React, { useContext } from 'react'
import useEasyHook from './21-EasyHook'
import { NameContext } from '../z-15-Example-Component/NameContext'

const CustomeHook2 = () => {
	const { name } = useEasyHook('Jonathan')
	const nameContext = useContext(NameContext)
	console.log(nameContext, 'name context')
	return (
		<div>
			<div>{name} // 21.C second name</div>
			<div>{nameContext} // name Context</div>
		</div>
	)
}

export default CustomeHook2
