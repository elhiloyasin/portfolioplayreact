import React from 'react';
import { NavLink } from 'react-router-dom'



function Navbar({ aboutme, projects, contact, logo }) {
  return (
    <div>
      <nav>
        <ul className='nav-list'>
        <div className="spacer">
          <li><NavLink exact to='/' className='logo' activeClassName=''>{logo}</NavLink></li>
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