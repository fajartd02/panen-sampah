import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const login = async(e: any) => {
    e.preventDefault();
    try{
      await axios.post('http://localhost:5000/auth/login', {
        email: email,
        password: password
      });
      
      navigate('/');
    } catch(err) {
      console.log(err);
      setError('Password salah!');
    }
  }

  return (
    <section className="section">
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
            <div className="login-brand text-center pb-4">
              <a href="index.html">
                <img src="assets/img/logo-full.png" alt="logo" width="250" />
              </a>
            </div>
            <div className="card card-primary p-3">
              <div className="card-body">
                <h5
                  className="card-title pb-4 mt-2 font-weight-light text-danger"
                  style={{ fontSize: "16px" }}
                >
                  Login
                </h5>
                <form method="POST" action="#" className="needs-validation">
                  <div className="form-group">
                    <label htmlFor="email" style={{ fontSize: "16px" }}>
                      Email
                    </label>
                    <input
                      style={{ fontSize: "16px" }}
                      onChange={(e) => setEmail(e.target.value)}
                      id="email"
                      type="email"
                      className="form-control"
                      name="email"
                      tabIndex={1}
                      required
                      autoFocus
                    />
                    <div
                      className="invalid-feedback"
                      style={{ fontSize: "16px" }}
                    >
                      {" "}
                      Please fill in your email{" "}
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="d-block">
                      <label
                        htmlFor="password"
                        className="control-label"
                        style={{ fontSize: "16px" }}
                      >
                        Password
                      </label>
                    </div>
                    <input
                      id="password"
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-control"
                      name="password"
                      tabIndex={2}
                      required
                    />
                    <h5
                    className="card-title font-weight-light text-danger text-center mt-2"
                    style={{ fontSize: "16px" }}
                  >
                   {error}
                 </h5>
                  </div>
                  <div className="form-group">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        name="remember"
                        className="custom-control-input"
                        tabIndex={3}
                        id="remember-me"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="remember-me"
                      >
                        Remember Me
                      </label>
                    </div>
                  </div>
                  <div className="form-group">
                    <button
                      type="button"
                      className="btn btn-primary btn-lg btn-block"
                      tabIndex={4}
                      style={{ fontSize: "16px" }}
                      onClick={login}
                    >
                      {" "}
                      Login{" "}
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="mt-3 text-muted text-center">
              {" "}
              Don't have an account?{" "}
              <Link to="/register">
                <a href="/register"
                  style={{ color: "#F0968D", textDecoration: "underline" }}
                >
                  Create One
                </a>
              </Link>
            </div>
            <div className="pt-4 text-center">
              {" "}
              Copyright © 2022 Panen Sampah{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginForm;
