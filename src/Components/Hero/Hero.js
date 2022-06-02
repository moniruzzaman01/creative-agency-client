import React from "react";
import hero from "../../assets/logos/Frame.png";

const Hero = () => {
  return (
    <div className="pb-10 lg:px-32 lg:flex lg:flex-row-reverse lg:py-20">
      <img src={hero} className=" max-w-xl mx-auto mb-10 lg:w-1/2" alt="" />
      <div className=" max-w-3xl mx-auto lg:w-1/2 ">
        <h1 className="text-5xl font-bold">
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
