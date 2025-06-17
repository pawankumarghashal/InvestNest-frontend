import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav
      class="navbar navbar-expand-lg  border"
      style={{ backgroundColor: "#FFF" }}
    >
      <div class="container">
        <Link className="navbar-brand" to="/">
        <img
          src="Media\image\download.svg"
          alt="logo"
          style={{ width: "15" }}
        />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse"
          id="navbarSupportedContent"
          className="d-flex justify-content-start"
        >
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/signup">
                Signup
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active"  to="/about">
                About
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link active" to="/products">
                Products
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link active" to="/pricing">
                Pricing
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link active" to="/support">
                Support
              </Link>
            </li>

            <li class="nav-item">
              <a class="nav-link active" href="#">
                <i class="fa fa-bars" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
