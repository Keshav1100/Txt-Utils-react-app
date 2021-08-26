import React from 'react'
import PropTypes from "prop-types"
// import { Link } from 'react-router-dom'
export default function Navbar(props) {
    return (
        <div>
            {/* <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}> */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
          <a className="navbar-brand" href="#">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                {/* <Link className="nav-link" to="/About">About us</Link> */}
              </li>
            </ul>
              {/* <div className="form-check form-switch">
              <input className="form-check-input" onClick={props.toggleTheme} type="checkbox" id="flexSwitchCheckChecked"/>
              <label className={`form-check-label text-${props.textTheme}`} htmlFor="flexSwitchCheckChecked">Dark mode</label>
            </div> */}
            {/* <div className="dropdown">
            <a className="btn btn-secondary dropdown-toggle m-2" href="/" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown link
            </a>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li>
                <div className="mx-2">
              <div className="btn-group" role="group" aria-label="Third group">
              <button type="button" className="btn btn-info">8</button>
              </div>
              </div>
              </li>
            </ul>
          </div> */}
          

            <div className="btn-group mx-1" role="group" aria-label="Third group">
    <button type="button" className="btn btn-dark" onClick={props.modedark} style={{color:"#ffc10700"}}>8</button>
          </div>
            <div className="btn-group mx-1" role="group" aria-label="Third group">
    <button type="button" className="btn btn-light" onClick={props.modelight} style={{color:"#ffc10700"}}>8</button>
          </div>
  
            <div className="btn-group mx-1" role="group" aria-label="Third group">
    <button type="button" className="btn btn-warning" onClick={props.modeyellow} style={{color:"#ffc10700"}}>8</button>
          </div>
            <div className="btn-group mx-1" role="group" aria-label="Third group">
    <button type="button" className="btn btn-danger" onClick={props.modered} style={{color:"#ffc10700"}}>8</button>
          </div>
            <div className="btn-group mx-1" role="group" aria-label="Third group">
    <button type="button" className="btn btn-primary" onClick={props.modeblue} style={{color:"#ffc10700"}}>8</button>
          </div>
          </div>
        </div>
    </nav>
        </div>
    )
}
// Navbar.propTypes = {title: PropTypes.string}
Navbar.propTypes = {title: PropTypes.string.isRequired}//We can use isrequired ,then we see an error if default prop or prop in the app.js is not given
Navbar.defaultProps = {title:"Set Title here"}