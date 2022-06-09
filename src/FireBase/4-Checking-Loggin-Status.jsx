import React from 'react'
import { useState } from 'react/cjs/react.development'
import { auth } from './3-FireStore-Setup-Fetching'

/*

The getAuth function brings other functionilites like checking logging status and detect changes (logout / loggin)

THIS IS MY VERSION OF DOING IT 

A - export your auth constant from FirebaseConfig and imported wherever you want to check the status 

    export const auth = getAuth(app) // H.3
    import { auth } from './3-FireStore-Setup-Fetching'

B - create your function to check status. 
    This function 

    auth.onAuthStateChanged((user) => {
        console.log(user)
    })

C - this function either returns an object with info of user or returns null 
*/

const LogginStatus = () => {
	const [loggedUser, setLoggedUser] = useState(undefined)
	auth.onAuthStateChanged((user) => {
		console.log('user', user)
	})
	return <div></div>
}

export default LogginStatus
