import React from "react";

const ServiceList = () => {
  return (
    <div className=" overflow-x-scroll bg-white w-full rounded-xl p-3">
      <div className=" min-w-[450px]">
        <div className=" mb-2 bg-slate-200 w-full h-8 rounded-lg">
          <div className=" grid grid-cols-5 text-center">
            <p className=" text-xs leading-8 font-bold text-gray-500">Name</p>
            <p className=" text-xs leading-8 font-bold text-gray-500">
              Email ID
            </p>
            <p className=" text-xs leading-8 font-bold text-gray-500">
              Service
            </p>
            <p className=" text-xs leading-8 font-bold text-gray-500">
              Project Details
            </p>
            <p className=" text-xs leading-8 font-bold text-gray-500">Status</p>
          </div>
        </div>
        <div className="  w-full h-8 rounded-lg">
          <div className=" grid grid-cols-5 text-center">
            <p className=" text-xs leading-8 text-gray-500">Moniruzzaman</p>
            <p className=" text-xs leading-8 text-gray-500">Email ID</p>
            <p className=" text-xs leading-8 text-gray-500">Service</p>
            <p className=" text-xs leading-8 text-gray-500">Project Details</p>
            <p className=" text-xs leading-8 text-gray-500">Status</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceList;
