import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router'


function Navbar() {

  // it is used for view active page ex. home or about?
  const location = useLocation()
  const history = useNavigate()
  useEffect(() => {
    // console.log(location);   
  }, [location]);

  const handleout = () => {
    localStorage.removeItem('token'); // Remove token
    history("/login", { replace: true }); // Redirect to login
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">i-notebook</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/" ? "active" : " "}`} aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/about" ? "active" : " "}`} aria-current="page" to="/about">About</Link>
              </li>
            </ul>
            {localStorage.getItem('token') ?
              <Link className="btn btn-outline-primary mx-1" onClick={handleout} role="button">Log-out</Link>
              : <form className="d-flex">
                <Link className="btn btn-outline-primary mx-1" to="/login" role="button">Login</Link>
                <Link className="btn btn-outline-primary mx-1" to="/signup" role="button">Signup</Link>
              </form>}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
