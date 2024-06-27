import React from 'react'
import Nav from './Nav'
import Home from './Home'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Products from './Products'
const App = () => {
  return (
<Router>

    <div className='App'>
<Nav/>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/Products' element={<Products/>} />

      </Routes>

    </div>
</Router>

  )
}

export default App