import React from 'react'
import { Browser as Router } from 'react-dom-router'
import {Link, NavLink} from 'react-dom-router'
/*

In order to create different pages inside react you cant create multiple htmls because everyhting is rendered through the index js. 

A - So first you need to run and import it to your app.js

  npm i react-router-dom 

  import { BrowserRouter as Router } from 'react-router-dom'


B - Go to index file and  wrap <App/> comp inside the <Router></Router>

  ReactDOM.render(
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>,
    document.getElementById('root')
  )

C) - In you app.js  

import { NavLink, Route, Routes } from 'react-router-dom'

  * Now instead of using a tags and Href use Link and to : <a href='/about'>Home<a> : DO NOT USE THIS 

  USE THIS : 

  <NavLink to="/">Home</NavLink>
	<NavLink to="/about">About</NavLink>

D)

    1) The next step is to declare what renders en each path. To this you need to first wrap your body in <Routes></Routes> tags
    2) Write : 
    
  <Routes>
      <Route path="/Home" element={<CounterComponent />} />
  </Routes> 
			


*/

const Routing = () => {
	return <div></div>
}

export default Routing

import React from 'react'

const AppEx = () => {
  return (
    <div>
      <div className='Header'>
          <Link to="/home">Home</Link >
          <Link to="/about">About</Link >
          <Link to="/settings">Settings</Link >
      </div>
      <div className='Body'>
          <h2>This is the Home Content</h2>
          <h2>This is the About Content</h2>
          <h2>This is the Settings Content</h2>
      </div>
    </div>
  )
}

export default AppEx


import React from 'react'

const IndexEx = () => {
  return (
    <div>
      <Router>
          <AppEx/>
      </Router>
    </div>
  )
}

export default IndexEx


