import React from "react";
import hero from "../../assets/logos/Frame.png";

const Hero = () => {
  return (
    <div className=" px-5 md:px-10 pb-20 h-full items-center min-h-[60vh] lg:px-32 lg:flex lg:flex-row-reverse ">
      <img src={hero} className=" lg:max-w-xl mx-auto mb-10 lg:w-1/2" alt="" />
      <div className=" max-w-3xl mx-auto lg:w-1/2 ">
        <h1 className="text-4xl lg:text-5xl font-bold">
          Let’s Grow Your Brand To The Next Level
        </h1>
        <p className="py-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo
          ipsum duis laoreet maecenas. Feugiat
        </p>
        <button className="btn bg-gray-900">hire us</button>
      </div>
    </div>
  );
};

export default Hero;
