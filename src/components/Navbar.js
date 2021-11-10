import React from 'react';
import { Link, NavLink } from 'react-router-dom'



function Navbar({ aboutme, projects, contact, logo }) {
  return (
    <div>
      <nav>
        <ul className='nav-list'>
        <div className="spacer">
          <h1 className='logo'>{logo}</h1>
          </div>
          <li><NavLink exact to='aboutme' className='nav-item' activeClassName='young'>{aboutme}</NavLink></li>
          <li><NavLink exact to='projects' className='nav-item' activeClassName='yaze'>{projects}</NavLink></li>
          <li><NavLink exact to='contact' className='nav-item' activeClassName='west'>{contact}</NavLink></li>
        </ul>
      </nav>
    </div>

  )
}

export default Navbar