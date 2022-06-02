import React from "react";
import ClientFeedback from "../ClientFeedback/ClientFeedback";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import OurWork from "../OurWork/OurWork";
import Services from "../Services/Services";
import Links from "./Links";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <div className=" overflow-hidden">
      <Navbar />
      <Header />
      <Links />
      <Services />
      <OurWork />
      <ClientFeedback />
      <Footer />
    </div>
  );
};

export default Home;
