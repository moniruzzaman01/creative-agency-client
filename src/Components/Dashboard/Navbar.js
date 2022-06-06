import React from "react";

const Navbar = () => {
  return (
    <div className=" h-[7vh] bg-white flex items-center ml-52">
      <div className=" flex justify-between items-center w-full px-3">
        <div className=" flex-1">
          <div className=" text-xl font-bold">Order</div>
        </div>
        <div className=" flex-1 text-right">
          <div className=" flex justify-end items-center gap-3">
            <div>
              <h4 className=" font-bold mb-[-5px]">John Doe</h4>
              <p className=" text-xs">admin</p>
            </div>
            <div className="avatar online">
              <div className="w-10 rounded-full">
                <img
                  src="https://api.lorem.space/image/face?hash=92310"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
