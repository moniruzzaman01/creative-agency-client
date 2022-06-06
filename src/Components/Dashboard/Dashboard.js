import React from "react";
import logo from "../../assets/logos/logo.png";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faLock,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div className=" sticky top-0 z-50">
        <div className=" absolute bg-white min-h-screen w-52">
          <div className=" w-[70%] mx-auto h-16 flex items-center">
            <img src={logo} alt="" />
          </div>
          <div className=" w-2/3 mx-auto mt-10">
            <ul>
              <li className=" my-3 text-gray-700 text-sm">
                <Link to="/dashboard">
                  <FontAwesomeIcon className=" mr-2" icon={faShoppingCart} />
                  Order
                </Link>
              </li>
              <li className=" my-3 text-gray-700 text-sm">
                <Link to="/dashboard/service-list">
                  <FontAwesomeIcon className=" mr-2" icon={faLock} />
                  Service List
                </Link>
              </li>
              <li className=" my-3 text-gray-700 text-sm">
                <Link to="/dashboard/review">
                  <FontAwesomeIcon className=" mr-2" icon={faComment} />
                  Review
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" sticky top-0">
        <Navbar />
      </div>
      <div className=" min-h-[93vh] bg-slate-200 ml-52 p-5">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
