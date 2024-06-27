import React from 'react'
import './Navs.css'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <div className='navmain'>
     <ul className='comp'>
        <li><Link to="/">home</Link></li>
        <li><Link to="/Products">products</Link></li>
        <li>More information</li>
        <li>contact</li>
        <li>about</li>
     </ul>
    </div>
  )
}

export default Nav