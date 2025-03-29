import React from "react";
import { useLocation } from "react-router-dom";

const ProductDetails = () => {
  const location = useLocation();
  const { item } = location.state || {};

  console.log("Product Details Item:", item);

  return (
    <div className="product-details flex flex-col md:flex-row gap-6 p-4">
      <div className="flex-1">
        <img
          src={
            item.img
              ? item.img.startsWith("http")
                ? item.img
                : `https://api-1-dpjz.onrender.com${item.img}`
              : "https://api-1-dpjz.onrender.com/default-image.jpg"
          }
          alt={item.productName}
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
      <div className="flex-1">
        <h1 className="text-2xl md:text-4xl font-bold mb-4">{item.productName}</h1>
        <p className="text-lg md:text-xl text-gray-700 mb-4">{item.description}</p>
        <p className="text-xl md:text-2xl font-semibold text-primeColor">
          Price: ₹{item.price ? item.price.toLocaleString("en-IN") : "N/A"}
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;