import React from "react";

const ClientFeedback = () => {
  const feedbacks = [
    {
      img: "",
      name: "Nash Patrik",
      position: "CEO, Manpol",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ",
    },
    {
      img: "",
      name: "Miriam Barron",
      position: "CEO, Manpol",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ",
    },
    {
      img: "",
      name: "Bria Malone",
      position: "CEO, Manpol",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ",
    },
  ];
  return (
    <div className="px-5 lg:px-32 my-10 md:my-20 lg:my-32">
      <h1 className=" text-4xl lg:text-5xl font-bold text-center">
        Clients
        <span className=" text-[#7AB259]"> Feedback</span>
      </h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 lg:mt-16">
        {feedbacks.map((feedback, key) => (
          <div key={key} class="px-5 py-10 lg:py-16 rounded  border-2 ">
            <div className=" flex items-center gap-2">
              <div class="avatar">
                <div class="w-16 h-16 rounded-full">
                  <img
                    src="https://api.lorem.space/image/face?hash=92310"
                    alt=""
                  />
                </div>
              </div>
              <div>
                <h2 class=" text-xl font-bold">{feedback.name}</h2>
                <h3>{feedback.position} </h3>
              </div>
            </div>
            <p className=" mt-2">{feedback.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientFeedback;
