import React from "react";

const Services = () => {
  const service = [
    {
      img: "",
      title: "Web & Mobile design",
      desc: "We craft stunning and amazing web UI, using a well drrafted UX to fit your product.",
    },
    {
      img: "",
      title: "Graphic design",
      desc: "Amazing flyers, social media posts and brand representations that would make your brand stand out.",
    },
    {
      img: "",
      title: "Web development",
      desc: "With well written codes, we build amazing apps for all platforms, mobile and web apps in general.",
    },
  ];
  return (
    <div className=" lg:px-32 my-20 lg:my-32">
      <h1 className="text-5xl font-bold text-center">
        Provide awesome <span className=" text-[#7AB259]">services</span>
      </h1>
      <div className=" grid grid-cols-3 gap-5 mt-16">
        {service.map((service, key) => (
          <div key={key} class="card shadow-lg ">
            <div class="card-body items-center text-center">
              <div class="avatar">
                <div class="w-24 rounded-full">
                  <img
                    src="https://api.lorem.space/image/face?hash=92310"
                    alt=""
                  />
                </div>
              </div>
              <h2 class="card-title mt-4">{service.title}</h2>
              <p>{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
