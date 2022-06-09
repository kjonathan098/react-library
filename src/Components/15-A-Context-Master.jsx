import React from 'react'
import { useState } from 'react/cjs/react.development'
import { NameContext } from '../z-15-Example-Component/NameContext'
import HomeDisplay from './15-B-Child-1'
import ProfileDisplay from './15-C-Child-2'
/*

Context is a complicated Subject that I havent figured out yet. 

Fom what I understood is a way to make STATES global and accesible anywehere in your app without having components being connected to each other. 

In previous examples there was always a parent component (Managing the state) and a child Component called by the parent (displaying the state/changinG the value)

        <---->

        const [state, setState] = useState(0)

        const changeStateValue = () =>{
            setState(state+1)
        }
        <ParentComponent>
            <ChildComponent state={state} onClick={changeStateValue}/>
        <ParentComponent>


        <---->


But if we want different siblings who are not connected  have access to the same state?

We could create a Master state which holds both parents component and Drill down all the props to the childs. But seems like a lot of work and can get messy with a lot of components 

For this we use CONTEXT its a way to make states accesible anywhere withouth connections. They just show up wherever you need. 

3 main ideas to understand context 

A) You have a Provider = It holds the context and provides to anyone who needs it 
B) You have the consumer = gets passed the context to do whatever you need with it 
C) You have the context = states 


HOW TO WRITE CONTEXT 

1- Create a new File that holds your context = NameContext.jsx
        1.A.- import {createContext} from 'react'
        1.B -  declare your context  =  const NameContext = createContext('John')
        1.C - Export 


2 - Import Your context  into your master component = import {NameContext} from './NameContext'
    2.A - Create Context Provider =  declare Context.Provider in your 'Master Component' <NameContext.Provider> </NameContext.Provider>

3 - Wrap everything you want to have access to the context inside 


<NameContext.Provider> 
        <Home/>
        <Login/>
</NameContext.Provider>


4- Provide Value to Context.Provider to set a value

<NameContext.Provider value={''}> 
        <Home/>
        <Login/>
</NameContext.Provider>

5 -  Child Componets

 5.A  Import {useContext} from 'react' & import {NameContext} from './NameContext'
 5.B  Declare const value = useContext {NameContext}

*/

const ContextMain = () => {
	const [name, setNewName] = useState('Adam')

	const handleOnClick = () => {
		setNewName('john')
	}

	return (
		<div>
			<NameContext.Provider value={{ name, handleOnClick }}>
				<h1>//15</h1>
				<HomeDisplay />
				<ProfileDisplay />
			</NameContext.Provider>
		</div>
	)
}

export default ContextMain
