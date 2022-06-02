import React from "react";
import Hero from "../Hero/Hero";
import OurWork from "../OurWork/OurWork";
import Services from "../Services/Services";
import Links from "./Links";

const Home = () => {
  return (
    <div className=" overflow-hidden">
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
          height: "15vh",
          marginLeft: "-20px",
        }}
        className="bg-white rotate-[-6deg] mt-[-10vh]"
      ></div>
      {/* bg angler end */}
      <Links />
      <Services />
      <OurWork />
    </div>
  );
};

export default Home;
