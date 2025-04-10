import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg ${props.mode === 'dark' ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">{props.title}</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">About</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">{props.disable}</a>
              </li>
            </ul>

            <button type="button" class="btn btn-primary  mx-2 " style={{ "height": "30px" }} onClick={() => { props.toogle("primary") }}></button>
            <button type="button" class="btn btn-secondary mx-2" style={{ "height": "30px" }} onClick={() => { props.toogle("secondary") }}></button>
            <button type="button" class="btn btn-success mx-2" style={{ "height": "30px" }} onClick={() => { props.toogle("success") }}></button>
            <button type="button" class="btn btn-danger mx-2" style={{ "height": "30px" }} onClick={() => { props.toogle("danger") }}></button>
            <button type="button" class="btn btn-warning  mx-2" style={{ "height": "30px" }} onClick={() => { props.toogle("warning") }}></button>
            <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}>
              <input
                className="form-check-input"
                type="checkbox"
                onClick={props.toggleMode}
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  disable: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired, // Added prop validation for toggleMode
};

Navbar.default = {
  title: 'Navbar',
  disable: 'Disabled',
  mode: 'light',
};
