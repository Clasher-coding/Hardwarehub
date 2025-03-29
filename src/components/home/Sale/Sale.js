import React from "react";
import { Link } from "react-router-dom";
import {
  saleImgOne,
  saleImgTwo,
  saleImgThree,
} from "../../../assets/images/index";
import Image from "../../designLayouts/Image";

const Sale = () => {
  return (
    <div className="py-20 flex flex-wrap md:flex-nowrap items-center justify-between gap-3 lg:gap-5">
      <div className="w-full md:w-1/2 flex justify-center relative group">
        <Link to="/offer" className="relative">
          <Image
            className="h-[300px] w-[900px] object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
            imgSrc={saleImgOne}
          />
        </Link>
      </div>
      <div className="w-full md:w-1/4 flex justify-center relative group">
        <Link to="/shop" className="relative">
          <Image
            className="h-[300px] w-[300px] object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
            imgSrc={saleImgTwo}
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white p-4 rounded-lg shadow-lg text-center">
              <span className="text-black text-sm font-semibold block mb-2">New Hammer Set</span>
              <Link
                to="/shop"
                className="bg-white text-black px-3 py-1 rounded-md underline"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </Link>
      </div>
      <div className="w-full md:w-1/4 flex justify-center relative group">
        <Link to="/shop" className="relative">
          <Image
            className="h-[300px] w-[300px] object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
            imgSrc={saleImgThree}
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white p-4 rounded-lg shadow-lg text-center">
              <span className="text-black text-sm font-semibold block mb-2">New Collection</span>
              <Link
                to="/shop"
                className="bg-white text-black px-3 py-1 rounded-md underline"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sale;
