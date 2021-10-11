import React from "react";

export default function Navbar({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a 
            className="nav-link" href="#about"
            onClick={() => handlePageChange("About")}
            className={currentPage === "About" ? "nav-link active" : "nav-link"
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a 
            className="nav-link" href="#projects"
            onClick={() => handlePageChange("Projects")}
            className={currentPage === "Projects" ? "nav-link active" : "nav-link"}
            >
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a 
            className="nav-link" href="#contact"
            onClick ={() => handlePageChange("Contact")}
            className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
            >
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a 
            className="nav-link" href="#resume"
            onClick = {() => handlePageChange("Contact")}
            className = {currentPage === "Contact" ? "nav-link-active" : "nav-link"}
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

