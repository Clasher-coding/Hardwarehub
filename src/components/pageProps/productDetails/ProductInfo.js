import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/orebiSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductInfo = ({ productInfo }) => {
  const dispatch = useDispatch();
  const [showFullDescription, setShowFullDescription] = useState(false);

  const handleToggleDescription = () => {
    setShowFullDescription((prev) => !prev);
  };

  const handleAddToCart = () => {
    if (productInfo.stock > 0) {
      dispatch(
        addToCart({
          _id: productInfo.id,
          name: productInfo.productName,
          quantity: 1,
          image: productInfo.img,
          badge: productInfo.badge,
          price: productInfo.price,
          colors: productInfo.color,
        })
      );
      toast.success("Product added to cart successfully!");
    } else {
      toast.error("This product is out of stock and cannot be added to the cart.");
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-4xl font-semibold">{productInfo.productName}</h2>
      <p className="text-xl font-semibold">
        {productInfo.discount > 0 && (
          <span className="text-green-500 mr-2">
            {productInfo.discount}% OFF 
          </span>
        )}
        {productInfo.oldPrice && (
          <span className="text-gray-500 line-through mr-2">
            ₹{productInfo.oldPrice.toLocaleString("en-IN")} 
          </span>
        )}
        ₹{productInfo.price ? productInfo.price.toLocaleString("en-IN") : "N/A"} 
      </p>
      <p className="text-base text-gray-600">
        {productInfo.des && productInfo.des.length > 50 && !showFullDescription
          ? `${productInfo.des.slice(0, 50)}... `
          : productInfo.des || "No description available"}
        {productInfo.des && productInfo.des.length > 50 && (
          <span
            onClick={handleToggleDescription}
            className="text-blue-500 cursor-pointer"
          >
            {showFullDescription ? "see less" : "see more"}
          </span>
        )}
      </p>
      <p className="text-sm text-gray-600">
        Stock: {productInfo.stock > 0 ? productInfo.stock : <span className="text-red-500 font-bold">Out of Stock</span>}
      </p>
      <p className="text-sm">Be the first to leave a review.</p>
      <p className="font-medium text-lg">
        <span className="font-normal">Colors:</span> {productInfo.color}
      </p>
      <button
        onClick={handleAddToCart}
        className="w-full py-4 bg-primeColor hover:bg-black duration-300 text-white text-lg font-titleFont"
      >
        Add to Cart
      </button>
      <p className="font-normal text-sm">
        <span className="text-base font-medium"> Categories:</span> Power Tools,
        Hand Tools, Accessories
        <br />
        <span className="text-base font-medium"> Tags:</span> Best Seller,
        Durable, High-Quality
        <br />
        <span className="text-base font-medium"> SKU:</span> N/A
      </p>
    </div>
  );
};

export default ProductInfo;
