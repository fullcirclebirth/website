import React from 'react'
import { NavLink } from 'react-router-dom'

const styles = {
  nav: {
    backgroundColor: "#38588F"
  }
}

export default NavBar => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-dark text-uppercase" 
      id="mainNav"
      style={styles.nav}
    >
      <div className="container">
        <a className="navbar-brand js-scroll-trigger text-white">Full Circle</a>
        <button className="navbar-toggler navbar-toggler-right text-uppercase text-white rounded" 
          type="button" 
          data-toggle="collapse" 
          data-target="#navbarResponsive" 
          aria-controls="navbarResponsive" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item mx-0 mx-lg-1">
              <NavLink exact className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" to="/">Home</NavLink>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <NavLink className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" to="/About">About</NavLink>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <NavLink className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" to="/Events">Events</NavLink>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <NavLink className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" to="/Resources">Resources</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

