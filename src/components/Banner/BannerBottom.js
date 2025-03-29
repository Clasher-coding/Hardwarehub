import React from "react";
import { MdLocalShipping } from "react-icons/md";
import { CgRedo } from "react-icons/cg";

const BannerBottom = () => {
  return (
    <div className="w-full bg-white border-b-[1px] py-6 border-b-gray-200 px-4">
      <div className="max-w-container mx-auto h-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-4 w-full md:w-[30%] h-full p-4 shadow-lg hover:shadow-xl duration-300 rounded-lg bg-gray-50">
          <span className="font-bold font-titleFont w-8 text-center text-lg">2</span>
          <p className="text-lightText text-lg font-medium">Two years warranty</p>
        </div>
        <div className="flex items-center gap-4 w-full md:w-[30%] h-full p-4 shadow-lg hover:shadow-xl duration-300 rounded-lg bg-gray-50">
          <span className="text-2xl text-center w-8">
            <MdLocalShipping />
          </span>
          <p className="text-lightText text-lg font-medium">Free shipping</p>
        </div>
        <div className="flex items-center gap-4 w-full md:w-[30%] h-full p-4 shadow-lg hover:shadow-xl duration-300 rounded-lg bg-gray-50">
          <span className="text-3xl text-center w-8">
            <CgRedo />
          </span>
          <p className="text-lightText text-lg font-medium">Return policy in 30 days</p>
        </div>
      </div>
    </div>
  );
};

export default BannerBottom;
