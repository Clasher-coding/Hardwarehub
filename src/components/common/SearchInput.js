import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Loader from "../home/Header/Loader/Loader";

const SearchInput = ({
  searchQuery,
  setSearchQuery,
  filteredProducts,
  setShowSearchBar,
}) => {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative w-full lg:w-[600px] h-[50px] text-base text-primeColor bg-white flex items-center gap-2 justify-between px-6 rounded-xl">
      <input
        className="flex-1 h-full outline-none placeholder:text-[#C4C4C4] placeholder:text-[14px]"
        type="text"
        onChange={handleSearch}
        value={searchQuery}
        placeholder="Search your products here"
      />
      <FaSearch className="w-5 h-5" />
      {searchQuery && (
        <div
          className={`w-full mx-auto h-96 bg-white top-16 absolute left-0 z-50 overflow-y-scroll shadow-2xl scrollbar-hide cursor-pointer`}
        >
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => (
              <div
                onClick={() =>
                  navigate(
                    `/product/${item.name.toLowerCase().split(" ").join("")}`,
                    {
                      state: {
                        item: {
                          ...item,
                          img: `https://api-1-dpjz.onrender.com${item.image}`,
                          productName: item.name,
                          des: item.description,
                        },
                      },
                    }
                  ) &
                  setShowSearchBar(true) &
                  setSearchQuery("")
                }
                key={item._id}
                className="max-w-[600px] h-28 bg-gray-100 mb-3 flex items-center gap-3"
              >
                <img
                  className="w-24"
                  src={`https://api-1-dpjz.onrender.com${item.image}`}
                  alt="productImg"
                />
                <div className="flex flex-col gap-1">
                  <p className="font-semibold text-lg">{item.name}</p>
                  <p className="text-xs">
                    {isExpanded
                      ? item.description
                      : item.description?.slice(0, 50) +
                        (item.description?.length > 50 ? "..." : "")}

                    {!isExpanded && item.description?.length > 50 && (
                      <button
                        className="text-blue-500 ml-1 underline"
                        onClick={() => setIsExpanded(true)}
                      >
                        See More
                      </button>
                    )}
                  </p>
                  <p className="text-sm">
                    Price:{" "}
                    <span className="text-primeColor font-semibold">
                      ${item.price}
                    </span>
                  </p>
                </div>
              </div>
            ))
          ) : (
            <Loader />
          )}
        </div>
      )}
    </div>
  );
};

export default SearchInput;
