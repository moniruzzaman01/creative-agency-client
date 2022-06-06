import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logos/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <div className="navbar px-5 md:px-10 lg:px-32 relative">
      <div className="brand">
        <img src={logo} alt="" />
      </div>
      {/* mobile nav */}
      <div>
        <label
          onClick={() => setMobileNav(!mobileNav)}
          class="btn bg-transparent border-none text-black hover:bg-transparent md:hidden lg:hidden cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-12 w-12"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        {mobileNav && (
          <div className=" absolute bg-[#fbd062] min-h-[35vh] w-screen left-0 top-[80px] text-center p-10 capitalize">
            <ul>
              <li className=" p-2">
                <Link to="/">home</Link>
              </li>
              <li className=" p-2">
                <Link to="/">our portfolio</Link>
              </li>
              <li className=" p-2">
                <Link to="/">contact us</Link>
              </li>
              <li className=" p-2">
                <Link to="/dashboard">Order</Link>
              </li>
              <li className=" p-2">
                <button className="btn bg-gray-900 w-full">Login</button>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="items hidden md:block lg:block capitalize">
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/">our portfolio</Link>
          </li>
          <li>
            <Link to="/">contact us</Link>
          </li>
          <li>
            <Link to="/dashboard">Order</Link>
          </li>
          <li>
            <Link to="/login">
              <button className="btn bg-gray-900">Login</button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
