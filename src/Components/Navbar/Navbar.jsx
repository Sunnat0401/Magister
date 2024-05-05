import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <ul className="navbar-lists">
        <li className="navbar-list"><Link to="/" className="navbar-i">HomePages</Link></li>
        <li className="navbar-list"><Link to="about" className="navbar-i">About</Link></li>
    </ul>
  )
}

export default Navbar