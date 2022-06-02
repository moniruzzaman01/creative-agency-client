import React from "react";
import ClientFeedback from "../ClientFeedback/ClientFeedback";
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
      <ClientFeedback />
    </div>
  );
};

export default Home;
