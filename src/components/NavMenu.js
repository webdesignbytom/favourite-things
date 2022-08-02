import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/menu.css'

function NavMenu() {
  return (
    <>
      <nav className='nav-NavMenu'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/random'>Random</Link>
        </li>
        <li>
          <Link to='/top10'>Top 10</Link>
        </li>
        <li>
          <Link to='/add'>Add</Link>
        </li>
      </nav>
    </>
  )
}

export default NavMenu