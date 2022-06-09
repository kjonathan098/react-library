import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react/cjs/react.development'

/*

Im still not 100% sure how to use the custome Hooks.

What I understand is that it helps save time by no needing to repeat functions you need to do many times over other places(like fetching data and updating your state with the new data)

You can create a custome hook that can be imported pass the parameter and get back the data. 

Lets say you want to fetch something.. 

A - First create your custome hook in a diff file. 

B - Prented that everything you need the hook to do you need to do here. (UPDATE STATES, FETCH, WHATEVER)

C- import your useState

D- the Value is sent from other components

E- Now you can import the custome Hook into any other component and use it 

*/

const useCustomeHookToFetch = async (link) => {
	const [data, setData] = useState()
	const [eMessage, setEMessage] = useState()
	const [isPending, setIsPending] = useState(true)
	useEffect(() => {
		const goFetch = async () => {
			try {
				const data = await axios.get(link)
				setData(data)
				console.log(data, 'data from api')
			} catch (e) {
				setEMessage(e.message)
			}
			setIsPending(false)
		}
		goFetch()
		return { data, eMessage, isPending }
	}, [])
}

export default useCustomeHookToFetch
