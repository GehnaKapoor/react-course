import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'
export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.aboutText}</Link>
                        </li> */}
                        {/* <li className="nav-item">
                            <a className="nav-link" href="/">{props.mode}</a>
                        </li> */}
                    </ul>
                    {/* <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                    <button type="button" className="btn btn-success mx-3" onClick={props.greenMode}>Enable Green Mode</button>

<button type="button" className={`btn btn-danger mx-3 text-${props.mode ==='red'? 'light': 'dark'}`} onClick={props.redMode}>Enable Red Mode</button>

<button type="button" className="btn btn-warning mx-3" onClick={props.yellowMode}>Enable Yellow Mode</button>

                    <div className={`form-check form-switch text-${props.mode ==='light'?'dark': 'light'}`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="switchCheckDefault"/>
                        <label className="form-check-label" htmlFor="switchCheckDefault">Enable DARK MODE</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'About'
  };