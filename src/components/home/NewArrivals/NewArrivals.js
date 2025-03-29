import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NewArrivals = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://api-1-dpjz.onrender.com/products")
      .then((res) => res.json())
      .then((data) => {
        const uniqueProducts = data.filter(
          (product, index, self) =>
            index === self.findIndex((p) => p._id === product._id)
        );
        setProducts(uniqueProducts);
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      { breakpoint: 1025, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 769, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="w-full pb-16">
      <Heading heading="New Arrivals" />
      <Slider {...settings}>
        {products.map((product) => (
          <div className="px-2 flex justify-center" key={product._id}>
            <Product
              _id={product._id}
              img={
                product.image
                  ? product.image.includes("http")
                    ? product.image
                    : `https://api-1-dpjz.onrender.com${product.image}`
                  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1ZLkaEO7rCJW_eE2B-In48X_oMFTODjK8Go6UkI_5eZIELrGFqnHN14Y&s" 
              }
              productName={product.name}
              price={product.discountPrice || product.price}
              oldPrice={product.price}
              discount={product.discount > 0 ? product.discount : null}
              stock={product.stock}
              color="Mixed"
              badge={product.isBestSeller}
              des={product.description}
            />
          </div>
        ))}
      </Slider>
      <ToastContainer />
    </div>
  );
};

export default NewArrivals;
