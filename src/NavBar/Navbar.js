import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className="container my-2">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <label className="navbar-brand mx-2" href="/">Online Store</label>
            <button className="navbar-toggler me-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav text-center">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">Home Page</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/search">Search Page</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/productdetails">Product Details Page</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar