import React from "react";

const Order = () => {
  return (
    <div className=" w-full h-[60vh] flex items-center">
      <div className=" md:w-2/3 lg:w-1/3 mx-auto">
        <form action="">
          <input
            type="text"
            placeholder="Your Name / Company Name"
            class="input input-bordered w-full mb-3"
          />
          <input
            type="text"
            placeholder="Your Email Address"
            class="input input-bordered w-full mb-3"
          />
          <input
            type="text"
            placeholder="Project Title"
            class="input input-bordered w-full mb-3"
          />
          <textarea
            class="textarea textarea-bordered w-full mb-1"
            placeholder="Project Details"
          ></textarea>
          <div className=" flex justify-between items-center gap-2 mb-3">
            <input
              type="text"
              placeholder="Price"
              class="input input-bordered w-full"
            />
            <input
              type="file"
              placeholder="Type here"
              class=" flex w-full text-sm 
              file:bg-white
      file:mr-4 file:py-3 file:px-4
      file:rounded-lg file:border-0 file:cursor-pointer"
            />
          </div>
          <button className=" btn bg-slate-900 px-10"> Send</button>
        </form>
      </div>
    </div>
  );
};

export default Order;
