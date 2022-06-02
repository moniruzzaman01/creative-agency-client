import React from "react";

const Footer = () => {
  return (
    <div className=" bg-[#fbd062]">
      <div className=" p-10 h-full  lg:px-32 lg:flex gap-5 lg:flex-row-reverse">
        <form className=" w-1/2" action="">
          <input
            type="text"
            placeholder="Your Email Address"
            class="input mb-5 w-full max-w-lg"
          />
          <input
            type="text"
            placeholder="Your Name/Company's Name"
            class="input mb-5 w-full max-w-lg"
          />
          <textarea
            class="textarea mb-5 w-full max-w-lg"
            placeholder="Your Message"
          ></textarea>
          <button className="btn bg-gray-900">send</button>
        </form>
        <div className=" max-w-3xl mx-auto lg:w-1/2 ">
          <h1 className="text-4xl font-bold">
            Let us handle your project, professionally.
          </h1>
          <p className="py-6">
            With well written codes, we build amazing apps for all platforms,
            mobile and web apps in general.
          </p>
        </div>
      </div>
      <p className=" text-center pb-5">Copyright Moniruzzaman - 2022</p>
    </div>
  );
};

export default Footer;
