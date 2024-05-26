import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {

  var navigate=useNavigate();

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Clinic App</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        
      <Link classNameName="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/login">Login</Link>
      </li>
      <li className="nav-item active">
      <Link className="nav-link" to="/register">Register as Doctor</Link>
      </li>
      <li className="nav-item active">
      <Link className="nav-link" to="/registerPatient">Register as Patient</Link>
      </li>
    </ul>
  </div>
</nav>
    </div>
  )
}
