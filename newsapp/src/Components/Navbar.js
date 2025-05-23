import React, { Component} from 'react'
import {
    Link
  } from "react-router-dom";


export class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar mb-10 navbar-expand-lg bg-body-tertiary fixed-top ">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="#">Navbar</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="#">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="#">Features</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/business">business</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/entertainment">entertainment</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/general">general</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/health">health</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/science">science</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/sports">sports</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/technology">technology</Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar
