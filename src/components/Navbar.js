import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
        <div className="container-fluid">
          {/* <Link className="navbar-brand" to="/" >{props.title}</Link> */}
          <a className="navbar-brand" href="#" >{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ "--bs-scroll-height": "100px" }}>
              <li className="nav-item">
                {/* <Link className="nav-link active" to="/">Home</Link> */}
                 <a className="nav-link active" href="#">Home</a>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/about">{props.aboutText}</Link>
              </li> */}
            </ul>
            {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}

         <div className={`form-check form-switch text-${props.mode==='light' ? 'dark' : 'light' }`}>
            <input className="form-check-input" type="checkbox" onClick={props.toggleMode} id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
          </div>


{/* Theme Buttons (Only work in Light Mode) */}
<div className="d-flex mt-3">
  <button
    className="btn btn-success btn-sm mx-4"
    onClick={() => props.applyTheme('#198754')}
   //disabled={props.mode === 'dark'}
  >
    Green Theme
  </button>

  <button
    className="btn btn-sm mx-1"
    onClick={() => props.applyTheme('#6f42c1')}
    style={{
      backgroundColor: '#6f42c1',
      color: 'white',
      border: '1px solid #6f42c1'
    }}
    //disabled={props.mode === 'dark'}
  >
    Purple Theme
  </button>
</div>


          </div>
        </div>
      </nav>
  );
}

Navbar.propTypes = {
  title : PropTypes.string,
  aboutText: PropTypes.string
}

 Navbar.defaultProps = {
   title : 'set title here',
   aboutText : 'about'
  };