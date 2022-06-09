import { useState, useEffect } from 'react'
import CreatedDiv from './5.B-events'

/*

To use life Cycle in react we use different terminologies from the Class 

A) First you need to export a Hook called useEffect from React 

USE-EFFECT 

COMPONENT DID MOUNT 
to write COMP DID MOUNT  you need to write a function  using useEffect that accepst two parameters 
    1) is a callback function
    2) is an empty array MUST dont know WHY THE FUCK

    useEffect(() => {}, [])

    <--- ---------------------- COMPONENT DID UPDATE ----------------------------------------------------------------------------------->

COMPONENT DID UPDATE
    A) You do the same BUT without the empty array as your second parameter again I DONT KNOW WHY THE FUCK


                     useEffect(() => {})

   B)  There an extra thing you can do w/compoenet Did Update and that is to be notify before its updates.. Will update 
    to this you just need to write a return . 

    useEffect(() => {
            console.log('bla bla')

              return () => {
        console.log('comp will will be updated )
    }

    })

    C) If you have multiple states and you just want to check the status of only ONE you can pass the variable inside the array and that will do the trick

    useEffect(() => {
            console.log('bla bla')

              return () => {
        console.log('comp will will be updated )
    }

    }[currentState])


    <--- ---------------------- COMPONENT DID UPDATE ----------------------------------------------------------------------------------->

COMPONENT WILL UNMOUNT 

You need to write this inside the Component Did Mount as a return 

useEffect(() => {
    console.log('bla bla')

    return () => {
        console.log('comp will un-mount )
    }
}, [])

In my example Comp will un-mount is not working bc im not sure what im doing wrong 
 */

const FuncLifeCycle = () => {
	// console.log(
	// 	'this will appear before useEffect aka "comp will mount" & "comp did update "'
	// )
	const [lifeCyclestate, setSate] = useState(false)

	const onButtonClick = () => {
		setSate(!lifeCyclestate)
	}

	// Comp did mount
	useEffect(() => {
		// console.log('comp did mount //11')

		// Comp Will un-mount
		return () => {
			// console.log('comp will un-mount //11')
		}
	}, [])

	// Comp did update

	useEffect(() => {
		// console.log('comp did udpate //11')

		// Comp will Update
		return () => {
			// console.log('comp will  update  //11')
		}
	}, [lifeCyclestate])
	return (
		<div>
			<button onClick={onButtonClick}>
				Click Me React Life Cycle check console //11
			</button>
			<div>{lifeCyclestate ? null : 'true'}</div>
		</div>
	)
}

export default FuncLifeCycle
