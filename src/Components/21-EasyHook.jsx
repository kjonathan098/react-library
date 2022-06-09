import React, { useState } from 'react'
import { useEffect } from 'react/cjs/react.development'

const useEasyHook = (passedName) => {
	const [name, setName] = useState()
	useEffect(() => {
		setName(passedName)
	}, [])
	return { name }
}

export default useEasyHook
