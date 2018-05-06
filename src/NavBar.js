import React from 'react'
import { NavLink } from 'react-router-dom'

export default NavBar => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand">Full Circle</a>
      <button className="navbar-toggler" 
        type="button" 
        data-toggle="collapse" 
        data-target="#navbarNav" 
        aria-controls="navbarNav" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <NavLink exact className="nav-item nav-link" to="/">Home</NavLink>
          <NavLink className="nav-item nav-link" to="/About">About</NavLink>
          <NavLink className="nav-item nav-link" to="/Events">Events</NavLink>
        </ul>
      </div>
    </nav>
  )
}

