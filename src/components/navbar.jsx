import React from "react";
import "./components.css";
import { BrowserRouter as Router,Route,Routes, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-custom navMenu">
      <div className="container-fluid">
        <div className="logo">Normal.</div>
        <br></br>
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
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item m-2">
              <Link to="/">Home</Link> 
            </li>
            <li className="nav-item m-2">
              <Link to="/jobs">Find Jobs</Link>
            </li>
            <li className="nav-item m-2">
              <Link to="/scheme">Schemes</Link>
            </li>

            <li className="nav-item m-2">
              <Link to="/grievance">Grievance</Link>
            </li>

            
            <li className="nav-item m-2">
              <Link to="/chat">ChatBot</Link>
            </li>


            <li className="nav-item m-2">
              <Link to="/blogs">Blogs</Link>
            </li>
            
          </ul>
          <button class="btn btn-primary me-md-2" type="button">
          <Link class = "text_b" to="/blog">Register</Link>
          </button>
          <button class="btn btn-primary me-md-2" type="button">
          <Link class = "text_b" to="/login">Login</Link>
          </button>
        </div>
      </div>
    </nav>






  );
};
export default Navbar;