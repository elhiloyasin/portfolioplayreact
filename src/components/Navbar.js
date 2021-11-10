function Navbar({ aboutme, projects, contact, logo }) {
  return (
    <div>
      <nav>
        <ul className='nav-list'>
        <div className="spacer">
          <h1 className='logo'>{logo}</h1>
          </div>
          <a href='#'><li className='nav-item'>{aboutme}</li></a>
          <a href='#'><li className='nav-item'>{projects}</li></a>
          <a href='#'><li className='nav-item'>{contact}</li></a>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar