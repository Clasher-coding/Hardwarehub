import React from "react";
// import { BsSuitHeartFill } from "react-icons/bs";
// import { GiReturnArrow } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineLabelImportant } from "react-icons/md";
import Image from "../../designLayouts/Image";
import Badge from "./Badge";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/orebiSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product = (props) => {
  const dispatch = useDispatch();
  const _id = props.productName;
  const idString = (_id) => {
    return String(_id).toLowerCase().split(" ").join("");
  };
  const rootId = idString(_id);

  const navigate = useNavigate();
  const productItem = { ...props, category: props.category }; 
  const handleProductDetails = () => {
    navigate(`/product/${rootId}`, {
      state: {
        item: {
          ...productItem,
          img: productItem.img.startsWith("http") ? productItem.img : `https://api-1-dpjz.onrender.com${productItem.img}`,
        },
      },
    });
  };

  const handleAddToCart = () => {
    if (props.stock > 0) {
      dispatch(
        addToCart({
          _id: props._id,
          name: props.productName,
          quantity: 1,
          image: props.img,
          badge: props.badge,
          price: props.price,
          colors: props.color,
        })
      );
      toast.success("Product added to cart successfully!");
    } else {
      toast.error("This product is out of stock and cannot be added to the cart.");
    }
  };

  return (
    <div className="w-full max-w-[300px] h-[400px] relative group mx-auto"> 
      <div className="w-full h-[250px] relative overflow-hidden"> 
        <div>
          <Image
            className="w-full h-full object-cover"
            imgSrc={
              props.img
                ? props.img.startsWith("http")
                  ? props.img
                  : `https://api-1-dpjz.onrender.com${props.img}`
                : "https://api-1-dpjz.onrender.com/default-image.jpg" 
            }
          />
        </div>
        <div className="absolute top-6 left-8">
          {props.badge && <Badge text="New" />}
        </div>
        <div className="w-full h-32 absolute bg-white -bottom-[130px] group-hover:bottom-0 duration-700">
          <ul className="w-full h-full flex flex-col items-end justify-center gap-2 font-titleFont px-2 border-l border-r">
            {/* <li className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full">
              Compare
              <span>
                <GiReturnArrow />
              </span>
            </li> */}
            <li
              onClick={handleAddToCart}
              className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full"
            >
              Add to Cart
              <span>
                <FaShoppingCart />
              </span>
            </li>
            <li
              onClick={handleProductDetails}
              className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full"
            >
              View Details
              <span className="text-lg">
                <MdOutlineLabelImportant />
              </span>
            </li>
            {/* <li className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full">
              Add to Wish List
              <span>
                <BsSuitHeartFill />
              </span>
            </li> */}
          </ul>
        </div>
      </div>
      <div className="w-full h-[150px] py-6 flex flex-col gap-1 border-[1px] border-t-0 px-4">
        <div className="flex items-center justify-between font-titleFont">
          <h2 className="text-lg text-primeColor font-bold">
            {props.productName}
          </h2>
          <div className="text-right">
            {props.discount > 0 && (
              <p className="text-green-500 text-[12px]">
                {props.discount}% OFF
              </p>
            )}
            {props.oldPrice && (
              <p className="text-[#767676] text-[12px] line-through">
                ₹{props.oldPrice.toLocaleString("en-IN")} 
              </p>
            )}
            <p className="text-[#767676] text-[14px]">
              ₹{props.price ? props.price.toLocaleString("en-IN") : "N/A"}
            </p>
          </div>
        </div>
        <div>
          <p className="text-[#767676] text-[14px]">{props.color}</p>
          <p className="text-[#767676] text-[12px]">
            Stock: {props.stock > 0 ? props.stock : <span className="text-red-500">Out of Stock</span>}
          </p>
          <p className="text-[#767676] text-[12px]">
            {props.des && props.des.length > 10 ? `${props.des.slice(0, 20)}...see more` : props.des}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
