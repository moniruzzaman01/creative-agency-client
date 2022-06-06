import React from "react";

const Review = () => {
  return (
    <div className=" w-full h-[60vh] flex items-center">
      <div className=" md:w-2/3 lg:w-1/3 mx-auto">
        <form action="">
          <input
            type="text"
            placeholder="Your Name"
            class="input input-bordered w-full mb-3"
          />
          <input
            type="text"
            placeholder="Company's Name / Designation"
            class="input input-bordered w-full mb-3"
          />
          <textarea
            class="textarea textarea-bordered w-full"
            placeholder="Description"
          ></textarea>
          <button className=" btn bg-slate-900 px-10 mt-1">submit</button>
        </form>
      </div>
    </div>
  );
};

export default Review;
