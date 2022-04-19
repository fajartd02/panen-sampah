import axios from "axios";
import React from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

interface NavbarInterface {
  username?: string;
}

function Navbar(props: NavbarInterface) {
  const { username } = props;
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await axios.delete("http://localhost:5000/auth/logout");
      navigate("/login");
    } catch (err) {
      console.log("error internal");
      navigate("/");
    }
  };

  if (username === "") {
    return (
      <nav className="navbar navbar-light navbar-expand-lg fixed-top py-3">
        <div className="container">
          <a className="navbar-brand logo js-scroll-trigger" href="#">
            <img src="assets/img/logo-full.png" style={{ height: "47px" }} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div id="navbarTogglerDemo02" className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <Link to="/" style={{ textDecoration: "none" }}>
                <li className="nav-item">
                  <a className="nav-link active">Home</a>
                </li>{" "}
              </Link>
              <Link to="/service" style={{ textDecoration: "none" }}>
                <li className="nav-item">
                  <a className="nav-link">Services</a>
                </li>{" "}
              </Link>
              <Link to="/map" style={{ textDecoration: "none" }}>
                <li className="nav-item">
                  <a className="nav-link">Map</a>
                </li>{" "}
              </Link>
              <Link to="/shop" style={{ textDecoration: "none" }}>
                <li className="nav-item">
                  <a className="nav-link">Shop</a>
                </li>{" "}
              </Link>
              <Link to="/contact" style={{ textDecoration: "none" }}>
                <li className="nav-item">
                  <a className="nav-link">Contact</a>
                </li>
              </Link>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <li className="nav-item">
                  <a className="nav-link">Login</a>
                </li>
              </Link>
              <Link to="/register" style={{ textDecoration: "none" }}>
                <li className="nav-item">
                  <button
                    className="btn btn-primary shadow ms-2"
                    type="button"
                    style={{
                      fontSize: "16px",
                      paddingRight: "20px",
                      paddingLeft: "20px",
                    }}
                  >
                    Sign Up
                  </button>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="navbar navbar-light navbar-expand-lg fixed-top py-3">
      <div className="container">
        <Link to="/">
          <a className="navbar-brand logo js-scroll-trigger">
            <img src="assets/img/logo-full.png" style={{ height: "47px" }} />
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="navbarTogglerDemo02" className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <Link to="/" style={{ textDecoration: "none" }}>
              <li className="nav-item">
                <a className="nav-link">Home</a>
              </li>{" "}
            </Link>
            <Link to="/service" style={{ textDecoration: "none" }}>
              <li className="nav-item">
                <a className="nav-link">Services</a>
              </li>{" "}
            </Link>
            <Link to="/map" style={{ textDecoration: "none" }}>
              <li className="nav-item">
                <a className="nav-link">Map</a>
              </li>{" "}
            </Link>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <li className="nav-item">
                <a className="nav-link">Contacts</a>
              </li>
            </Link>
            <ul className="navbar-nav flex-nowrap ms-auto">
              <li className="nav-item dropdown d-sm-none no-arrow">
                <a
                  className="dropdown-toggle nav-link"
                  aria-expanded="false"
                  data-bs-toggle="dropdown"
                  href="#"
                >
                  <i className="fas fa-search"></i>
                </a>
                <div
                  className="dropdown-menu dropdown-menu-end p-3 animated--grow-in"
                  aria-labelledby="searchDropdown"
                >
                  <form className="me-auto navbar-search w-100">
                    <div className="input-group">
                      <input
                        className="bg-light form-control border-0 small"
                        type="text"
                        placeholder="Search for ..."
                      />
                      <div className="input-group-append">
                        <button className="btn btn-primary py-0" type="button">
                          <i className="fas fa-search"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </li>
              <li className="nav-item dropdown no-arrow mx-1">
                <div className="nav-item dropdown no-arrow">
                  <a
                    className="dropdown-toggle nav-link"
                    aria-expanded="false"
                    data-bs-toggle="dropdown"
                    href="#"
                  >
                    <span className="badge bg-danger badge-counter">3+</span>
                    <i className="fas fa-bell fa-fw"></i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-end dropdown-list animated--grow-in">
                    <h6 className="dropdown-header">alerts center</h6>
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="#"
                    >
                      <div className="me-3">
                        <div className="bg-primary icon-circle">
                          <i className="fas fa-file-alt text-white"></i>
                        </div>
                      </div>
                      <div>
                        <span className="small text-gray-500">
                          December 12, 2019
                        </span>
                        <p>A new monthly report is ready to download!</p>
                      </div>
                    </a>
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="#"
                    >
                      <div className="me-3">
                        <div className="bg-success icon-circle">
                          <i className="fas fa-donate text-white"></i>
                        </div>
                      </div>
                      <div>
                        <span className="small text-gray-500">
                          December 7, 2019
                        </span>
                        <p>$290.29 has been deposited into your account!</p>
                      </div>
                    </a>
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="#"
                    >
                      <div className="me-3">
                        <div className="bg-warning icon-circle">
                          <i className="fas fa-exclamation-triangle text-white"></i>
                        </div>
                      </div>
                      <div>
                        <span className="small text-gray-500">
                          December 2, 2019
                        </span>
                        <p>
                          Spending Alert: We've noticed unusually high spending
                          for your account.
                        </p>
                      </div>
                    </a>
                    <a
                      className="dropdown-item text-center small text-gray-500"
                      href="#"
                    >
                      Show All Alerts
                    </a>
                  </div>
                </div>
              </li>
              <div className="d-none d-sm-block topbar-divider"></div>
              <li className="nav-item dropdown no-arrow">
                <div className="nav-item dropdown no-arrow">
                  <a
                    className="dropdown-toggle nav-link"
                    aria-expanded="false"
                    data-bs-toggle="dropdown"
                    href="#"
                  >
                    <span className="d-none d-lg-inline me-2 small">
                      {username}
                    </span>
                    <img
                      className="border rounded-circle img-profile"
                      src="assets/img/default.jpg"
                      width="32px"
                    />
                  </a>
                  <div className="dropdown-menu shadow dropdown-menu-end animated--grow-in">
                    <Link to="/shop">
                      <a className="dropdown-item">
                        <i className="fas fa-list fa-sm fa-fw me-2 text-gray-400"></i>
                        &nbsp;Dashboard
                      </a>
                    </Link>
                    <Link to="#">
                      <a className="dropdown-item">
                        <i className="fas fa-dollar-sign fa-sm fa-fw me-2 text-gray-400"></i>
                        &nbsp;Tukar tunai
                      </a>
                    </Link>
                    <Link to="/emas">
                      <a className="dropdown-item">
                        <i className="fas fa-coins fa-sm fa-fw me-2 text-gray-400"></i>
                        &nbsp;Tukar emas
                      </a>
                    </Link>

                    <Link to="/sampah">
                      <a className="dropdown-item">
                        <i className="fas fa-truck fa-sm fa-fw me-2 text-gray-400"></i>
                        &nbsp;Kirim sampah
                      </a>
                    </Link>
                    <div className="dropdown-divider"></div>
                    <button className="dropdown-item" onClick={logout}>
                      <i className="fas fa-sign-out-alt fa-sm fa-fw me-2 text-gray-400"></i>
                      &nbsp;Logout
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </nav>
  );
}

{
  /* <nav className="navbar navbar-light navbar-expand-lg fixed-top py-3">
    <div className="container">
        <a className="navbar-brand logo js-scroll-trigger" href="#"><img src="assets/img/logo-full.png" style={{height: '47px'}} /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        <div id="navbarTogglerDemo02" className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
                <Link to="/" style={{textDecoration: 'none'}}><li className="nav-item"><a className="nav-link active">Home</a></li> </Link>
                <Link to="/service" style={{textDecoration: 'none'}}><li className="nav-item"><a className="nav-link">Services</a></li> </Link>
                <Link to="/map" style={{textDecoration: 'none'}}><li className="nav-item"><a className="nav-link">Map</a></li> </Link>
                <Link to="/shop" style={{textDecoration: 'none'}}><li className="nav-item"><a className="nav-link">Shop</a></li> </Link>
                <Link to="/contact" style={{textDecoration: 'none'}}><li className="nav-item"><a className="nav-link">Contact</a></li></Link>
                <Link to="/profile" style={{textDecoration: 'none'}}><li className="nav-item"><a className="nav-link">{username}</a></li></Link>
                <li><button onClick={logout} className="btn btn-primary shadow ms-2" type="button" style={{fontSize: '16px', paddingRight: '20px', paddingLeft: '20px'}}>Logout</button></li>
            </ul>
        </div>
    </div>
</nav> */
}

export default Navbar;
