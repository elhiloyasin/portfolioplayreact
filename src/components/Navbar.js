import React from 'react'


function Navbar({ aboutme, projects, contact, logo }) {
  return (
    <div>
      <navbar>
       
        <ul className='nav-list'>
         <h1 className='logo'>{logo}</h1>
          <a href='#'><li className='nav-item'>{aboutme}</li></a>
          <a href='#'><li className='nav-item'>{projects}</li></a>
          <a href='#'><li className='nav-item'>{contact}</li></a>
        </ul>
      </navbar>
    </div>
  )
}

export default Navbar
