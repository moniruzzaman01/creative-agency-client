import React from "react";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <div
      style={{
        backgroundColor: "#fbd062",
      }}
    >
      <Navbar />
      <Hero />
    </div>
  );
};

export default Home;
