import React from "react";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import Links from "./Links";

const Home = () => {
  return (
    <div>
      <div
        className=" relative overflow-hidden "
        style={{
          backgroundColor: "#fbd062",
          minHeight: "60vh",
        }}
      >
        <Navbar />
        <Hero />
        {/* bg angler start */}
        <div
          style={{
            width: "150%",
          }}
          className=" absolute top-[52vh] h-96 bg-white rotate-[-6deg]"
        ></div>
        {/* bg angler end */}
      </div>
      <Links />
    </div>
  );
};

export default Home;
