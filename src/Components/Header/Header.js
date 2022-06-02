import React from "react";
import Hero from "../Hero/Hero";

const Header = () => {
  return (
    <>
      <div
        className=" overflow-hidden "
        style={{
          backgroundColor: "#fbd062",
          minHeight: "55vh",
        }}
      >
        <Hero />
      </div>
      {/* bg angler start */}
      <div
        style={{
          width: "120%",
          height: "16vh",
          marginLeft: "-20px",
        }}
        className="bg-white rotate-[-6deg] mt-[-10vh]"
      ></div>
      {/* bg angler end */}
    </>
  );
};

export default Header;
