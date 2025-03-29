import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import {
  bannerImgOne,
  bannerImgTwo,
} from "../../assets/images";
import Image from "../designLayouts/Image";

const Banner = () => {
  const [dotActive, setDocActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (prev, next) => {
      setDocActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "7%",
          transform: "translateY(-50%)",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "30px",
                color: "#ffff00",
                borderRight: "3px #262626 solid",
                padding: "8px 0",
                cursor: "pointer",
              }
            : {
                width: "30px",
                color: "transparent",
                borderRight: "3px white solid",
                padding: "8px 0",
                cursor: "pointer",
              }
        }
      >
        0{i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: true,
          appendDots: (dots) => (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "2%",
                transform: "translateY(-50%)",
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={
                i === dotActive
                  ? {
                      width: "25px",
                      color: "#262626",
                      borderRight: "3px #262626 solid",
                      cursor: "pointer",
                      fontSize: "12px",
                    }
                  : {
                      width: "25px",
                      color: "transparent",
                      borderRight: "3px white solid",
                      cursor: "pointer",
                      fontSize: "12px",
                    }
              }
            >
              0{i + 1}
            </div>
          ),
        },
      },
    ],
  };
  return (
    <div className="w-full bg-white">
      <Slider {...settings}>
        <Link to="/offer">
          <div style={{ position: "relative" }}>
            <Image imgSrc={bannerImgOne} />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-5 bg-opacity-50 rounded-lg sm:w-full sm:h-full sm:p-3">
              <h2 className="font-semibold text-xl md:text-2xl lg:text-3xl sm:text-lg">🚀 New Arrivals</h2>
              <p className="text-sm md:text-base lg:text-lg mb-2 sm:text-xs">Check out our latest collection now!</p>
              <p className="text-xs md:text-sm lg:text-base opacity-90 mb-4 sm:text-xxs">
                Explore high-quality products, hand-picked for you. Limited-time offers available!
              </p>
              <button
                className="mt-3 px-4 py-2 text-sm md:text-base font-bold text-white bg-orange-500 rounded-md hover:bg-orange-600 transition sm:px-2 sm:py-1 sm:text-xs"
                onClick={() => (window.location.href = "/shop")}
              >
                Shop Now
              </button>
            </div>
          </div>
        </Link>
        <Link to="/offer">
          <div style={{ position: "relative" }}>
            <Image imgSrc={bannerImgTwo} />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-5 bg-opacity-50 rounded-lg sm:w-full sm:h-full sm:p-3">
              <h2 className="font-semibold text-xl md:text-2xl lg:text-3xl sm:text-lg">⚙ Best Sellers</h2>
              <p className="text-sm md:text-base lg:text-lg mb-2 sm:text-xs">Check out our latest collection now!</p>
              <p className="text-xs md:text-sm lg:text-base opacity-90 mb-4 sm:text-xxs">
                Explore high-quality products, hand-picked for you. Limited-time offers available!
              </p>
              <button
                className="mt-3 px-4 py-2 text-sm md:text-base font-bold text-white bg-orange-500 rounded-md hover:bg-orange-600 transition sm:px-2 sm:py-1 sm:text-xs"
                onClick={() => (window.location.href = "/shop")}
              >
                Shop Now
              </button>
            </div>
          </div>
        </Link>
      </Slider>
    </div>
  );
};

export default Banner;
