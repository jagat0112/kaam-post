import React from "react";
import "./Navbar.css";
import NavItems from "./NavItems";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-top">
        <Link to="/" className="navbar-logo">
          {/* Replace with your logo */}
          NYC Kaam Kotha
        </Link>
        <div className="navbar-links">
          <Link to="/advertise" className="navbar-link">
            Advertise
          </Link>
          <Link to="/login" className="navbar-link">
            Sign up / Sign in
          </Link>
        </div>
      </div>
      <div className="navbar-bottom">
        <div className="navbar-bottom-links">
          <NavItems />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
