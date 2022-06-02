import React from "react";
import stalk from "../../assets/logos/slack.png";
import airbnb from "../../assets/logos/airbnb.png";
import google from "../../assets/logos/google.png";
import uber from "../../assets/logos/uber.png";
import netflix from "../../assets/logos/netflix.png";

const Links = () => {
  const links = [stalk, airbnb, google, uber, netflix];
  return (
    <div className=" py-5 lg:py-10 px-5 lg:px-32">
      <ul className=" grid grid-cols-5 gap-5 lg:gap-20 items-center">
        {links.map((link, key) => (
          <li key={key} className="">
            <img src={link} alt="" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Links;
