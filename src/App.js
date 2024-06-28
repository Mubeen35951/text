import React from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import Router from './components/Router'
import './App.css'
const App = () => {
  console.log(process.env.REACT_APP_API_KEY);
  console.log(process.env.REACT_APP_OTHER_VALUE);

  return (
<div>

  <Router/>
</div>

  )
}

export default App