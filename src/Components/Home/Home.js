import React from "react";
import Header from "../Header/Header";
import OurWork from "../OurWork/OurWork";
import Services from "../Services/Services";
import Links from "./Links";

const Home = () => {
  return (
    <div className=" overflow-hidden">
      <Header />
      <Links />
      <Services />
      <OurWork />
    </div>
  );
};

export default Home;
