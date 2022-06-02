import React from "react";

const Footer = () => {
  return (
    <div className=" bg-[#fbd062]">
      <div className=" px-5 py-10 lg:p-20 min-h-[40vh]  lg:px-32 lg:flex gap-5">
        <div className=" max-w-3xl mx-auto lg:w-1/2 ">
          <h1 className=" text-3xl lg:text-4xl font-bold">
            Let us handle your project, professionally.
          </h1>
          <p className="py-6">
            With well written codes, we build amazing apps for all platforms,
            mobile and web apps in general.
          </p>
        </div>
        <form className=" pt-5 lg:w-1/2" action="">
          <input
            type="text"
            placeholder="Your Email Address"
            class="input mb-5 w-full block md:max-w-lg lg:max-w-2xl"
          />
          <input
            type="text"
            placeholder="Your Name/Company's Name"
            class="input mb-5 w-full block md:max-w-lg lg:max-w-2xl"
          />
          <textarea
            class="textarea mb-5 w-full block md:max-w-lg lg:max-w-2xl"
            placeholder="Your Message"
          ></textarea>
          <button className="btn w-full lg:max-w-2xl bg-gray-900">send</button>
        </form>
      </div>
      <p className=" text-center pb-5">
        Copyright{" "}
        <span className=" font-bold text-green-500">Moniruzzaman</span> - 2022
      </p>
    </div>
  );
};

export default Footer;
