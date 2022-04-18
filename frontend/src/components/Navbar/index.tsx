import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-light navbar-expand-lg fixed-top py-3">
    <div className="container">
        <a className="navbar-brand logo js-scroll-trigger" href="#"><img src="assets/img/logo-full.png" style={{height: '47px'}} /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        <div id="navbarTogglerDemo02" className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
                <Link to="/" style={{textDecoration: 'none'}}><li className="nav-item"><a className="nav-link active">Home</a></li> </Link>
                <Link to="/map" style={{textDecoration: 'none'}}><li className="nav-item"><a className="nav-link">Map</a></li> </Link>
                <Link to="/shop" style={{textDecoration: 'none'}}><li className="nav-item"><a className="nav-link">Shop</a></li> </Link>
                <Link to="/about"><li className="nav-item"><a className="nav-link">About</a></li></Link>
                <Link to="/login"><li className="nav-item"><a className="nav-link">Login</a></li></Link>
                <Link to="/register"><li className="nav-item"><button onClick={()=> "location.href='signup.html'" } className="btn btn-primary shadow ms-2" type="button" style={{fontSize: '16px', paddingRight: '20px', paddingLeft: '20px'}}>Sign Up</button></li></Link>
            </ul>
        </div>
    </div>
</nav>
  )
}

export default Navbar