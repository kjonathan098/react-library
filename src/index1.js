import React, {useState} from 'react';
import reactDom from 'react-dom';
import CounterClass from './Examples/counter_class'



/*  A ) ---------------------- Creating A React App A------------------------------------ */

/*

Install nodejs - nodejs.org (the LTS version)
Open terminal (mac/linux) or cmd/git bash (windows)
Type npx create-react-app my-app (name of your folder)
Enter the new created folder with cd my-app 
Open VSCode there with code . (Mac)
Create react app
*/

/*  A ) ---------------------- Creatin A React App A------------------------------------ */

/*  B) ---------------------- Functional Compopnent------------------------------------ */

/*

There are two ways of creating components in Reeact 

1) Through Functions
2) Through Classes 

Now a days 99% of cases use functions to create components 
*/
function FunctionalComponent()  {
  return (
    <div>
      <h1>Functional Componennt</h1>
    </div>
  )
}


// ReactDOM.render(
// <FunctionalComponent/>,
//   document.getElementById('root')
// );

/*

function Hello()  {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}

This is the same as this behind the scenes 

createDiv = (tag, attr, innerHTML) => {
  const div = document.createElement(tag) *$(H1)
  div.innerHTML = innerHTML *$(`My-Text`)
  div.setAttribute(`style`, attr.style)  *$({style:`color:red`})
}

document.getElementById('root').append(createDiv(`h1`, {style:`color:red`}, `my-text`)) all of this are passed as arguments to the div

Thats bc JSX is taking it behind the scenes and converting in to this (createDiv(`h1`, {style:`color:red`}, `my-text`))

*/


/*  B) ---------------------- Functional Compopnent------------------------------------ */

/*  C) ---------------------- Class Compopnent------------------------------------ */

/*

Class Components where used all the time. Functions where only used to render stuff and Classes were the smart, it had logic inside 

*/

class ClassComponenent extends React.Component {

  render = () => {
    return <h1>Class Component Render</h1>
  }
}

// reactDom.render (
//   <ClassComponenent />,
//   document.getElementById('root')
// )
/*  C) ---------------------- Class Compopnent------------------------------------ */

/*  ZZ) ---------------------- Excercise 1 ------------------------------------ */

/*

Render a class Component inside a Func component and send the func Component to the root 
*/


const FuncRender = () => {
return (
  <div>
    <h1>Func Render </h1>
    <H2ClassRender />
  </div>
)
}

class H2ClassRender extends React.Component {
render = () => {
  return <h2> Class component inside func Ex 1 </h2>
}
}

// reactDom.render (
//   <FuncRender />,
//   document.getElementById('root')
// )

/*  ZZ) ---------------------- Excercise ------------------------------------ */



/*  D) ---------------------- Properties (PROPS) ------------------------------------ */

/*

When using normal function you can pass parameters when calling the funcion

const addFunc = (a, b) => {
  return a + b
}

addFunc (1, 2)


How do we pass parameters in in Functional Comp? 

const AddFunc = () => {
return (
  <div>
    <h1>Func Render </h1>
    <H2ClassRender />
  </div>
)
}
reactDom.render (
  <AddFunc  />,
  document.getElementById('root')
)

To this we use PROPS which JSX converts into an object and then you can deconstruct the object with the data you need. 

const AddFunc = (props) => {  
  console.log (`props ->`, props)  *$(props -> {})
return (
  <div>
    <h1>Func Render </h1>
    <H2ClassRender />
  </div>
)
}
reactDom.render (
  <AddFunc  />,
  document.getElementById('root')
)
*/

// class UserCharact extends React.Component {
  
//   render = () => {
//     return <h2> Youre Age is {this.props.age}</h2>
//   }
// }

const PropsFunc = (props) => {
  console.log(`props ->`, props) // `props ->` Object {name;`mosh`, age:25}
  return (
    <div>
      <h1>Welcome {props.name}</h1>
     {/* <UserCharact age = {25}  style = {`color: red`}/> */}
    </div>
  )
}

// reactDom.render (
//   <PropsFunc name = "Mosh" age = {25}    />,
//   document.getElementById('root')
// )

/*  C) ---------------------- Properties (PROPS) ------------------------------------ */

/*  ZZ) ---------------------- Excercise 2 ------------------------------------ */

/*

Create a parent component Welcome that calls a child component Login
When calling parent func from ReactDom.render send a parameter "name" that the parent component has to pass to the child comp in order for it to use it 
*/

const Welcome = (props) => {
  console.log (`props  parent->`, props)
  return (
    <div>
      <h1>Welcome</h1>
      <Login name = {props.name}/>{/* Here you cant pass the whole object along so you need to deconstruct it and send it as an object again */}
    </div>
  )
}

const Login = (props) => {
  console.log (`props  child->`, props)
  return (
    <h1>Please Login {props.name}</h1>
  )
}

// reactDom.render (
//   <Welcome name = "Mosh"   />,
//   document.getElementById('root')
// )

/*  ZZ) ---------------------- Excercise 2 ------------------------------------ */

  /*  D) ---------------------- Handling Events ------------------------------------ */



  const ButtonComponent= (props) => {
    
    const buttonClick = () =>{
      console.log(`You clicked me Mother FUCKER`, props.name)
     
  }
    return (
      <div>
        <button onClick={buttonClick}>{props.innerText}</button>
      </div>
    )
  }

  // reactDom.render (
  //   <ButtonComponent innerText = "Click Me!" name = "Mosh" />,
  //   document.getElementById('root')
  // )

  /*  D) ---------------------- Handling Events ------------------------------------ */

  // const ButtonComponent = (props) => {
    
  //   const buttonClick = () =>{
  //       console.log(`You clicked me Mother FUCKER`, props.name)
       
  //   }

  //   return (
  //     <div>
  //       <button onClick={buttonClick}>{props.innerText}</button>
  //     </div>
  //   )
  // }

  // reactDom.render (
  //   <ButtonComponent innerText = "Click Me!" name = "Mosh" />,
  //   document.getElementById('root')
  // )

  /*  D) ---------------------- Handling Events ------------------------------------ */

  /*  E) ---------------------- States ------------------------------------ */

/*

The point of the state is that when something changes we render a new state of the website to display accordingly. Ex when a user toggles a button

Definitions 

Initial State = the starting point of the state
Current State = the state we are currently at. 
Set State = change the current state depengind on an action 
render new State = once current state has changed from prevouis render new current state 

Vanilla JS

Refer to states Explanation for a in depth Look

*/
  
  /*  E) ---------------------- States ------------------------------------ */

  /*  E.1) ---------------------- Functional Components States ------------------------------------ */

/*



To use states in Func componenets you need to import useState from React! (at the top)

import React, {useState} from 'react';

When changing the state you need three things

initial state = State 
current state =  New Values (state)
set state  = render page with new Values 

this is the syntax inside a func

const [currentState, setState] = useState (initialState)


*/

const CounterFunc = () => {

  const [newtState, renderNewState] = useState(0) //

  const counter = () => {

    renderNewState (newtState + 1)
    

  }
  return (
    <div>
      <h1> Count {newtState}</h1>
      <button onClick={counter}>Add Count</button>
    </div>
  )
}
 reactDom.render (
    <CounterFunc/>,
    document.getElementById('root')
  )
  /*  E.1) ---------------------- Functional Components States ------------------------------------ */
