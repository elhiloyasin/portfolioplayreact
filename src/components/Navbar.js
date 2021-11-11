import React from 'react';
import { NavLink, Link } from 'react-router-dom'




function Navbar({ aboutme, projects, contact, logo }) {
  return (
    <div>
      <nav>
        <ul className='nav-list'>
        <div className="spacer">
          <li><Link exact to='/' className='logo'>{logo}</Link></li>
          </div>
          <li><NavLink exact to='aboutme' className='nav-items' activeClassName='active'>{aboutme}</NavLink></li>
          <li><NavLink exact to='projects' className='nav-items'activeClassName='active'>{projects}</NavLink></li>
          <li><NavLink exact to='contact' className='nav-items' activeClassName='active'>{contact}</NavLink></li>
        </ul>
      </nav>
    </div>

  )
}

export default Navbar