import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logos/logo.png";
import google from "../../assets/google.png";

const Signup = () => {
  const navigate = useNavigate();

  return (
    <div className=" px-5 h-screen w-screen pt-[30%] md:pt-[20%] lg:pt-[10%]">
      <img
        onClick={() => navigate("/")}
        src={logo}
        alt=""
        className=" h-[8%] mx-auto mb-10 cursor-pointer"
      />
      <div className=" h-2/5 md:w-1/2 lg:h-1/2 border-2 rounded m-auto flex justify-center items-center ">
        <div className=" w-full p-10 ">
          <h2 className=" text-3xl text-center font-bold mb-5">Sign Up</h2>
          <button className=" btn btn-outline hover:bg-transparent hover:text-[#DB4437] hover:border-[#DB4437] rounded-full w-full relative">
            <img className="absolute left-0 h-9 ml-1" src={google} alt="" />
            Google signin
          </button>
          <div>
            <p className=" text-sm text-center mt-2">
              have an account?{" "}
              <Link className=" text-blue-600 underline" to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
