import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logos/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <div className="navbar lg:px-32 relative">
      <div className="brand">
        <img src={logo} alt="" />
      </div>
      <div className="">
        <label onClick={() => setMobileNav(!mobileNav)} class=" lg:hidden">
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
          <div className=" absolute bg-[#fbd062] h-[35vh] w-screen left-0 top-[80px] text-center p-10 capitalize">
            <ul>
              <li className=" p-2">
                <Link to="/">home</Link>
              </li>
              <li className=" p-2">
                <Link to="/">our portfolio</Link>
              </li>
              <li className=" p-2">
                <Link to="/">our team</Link>
              </li>
              <li className=" p-2">
                <Link to="/">contact us</Link>
              </li>
              <li className=" p-2">
                <button className="btn bg-gray-900 w-full">Login</button>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="items hidden lg:block capitalize">
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
