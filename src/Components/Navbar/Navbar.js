import React from "react";
import "./Navbar.css";
import logo from "../../assets/logos/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar lg:px-32">
      <div className="brand">
        <img src={logo} alt="" />
      </div>
      <div className="items">
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/">our portfolio</Link>
          </li>
          <li>
            <Link to="/">our team</Link>
          </li>
          <li>
            <Link to="/">contact us</Link>
          </li>
          <li>
            <button className="btn bg-gray-900">Login</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
