import React from "react";

const Price = ({ setSelectedPriceRange }) => {
  const priceRanges = [
    [0, 49.99],
    [50, 99.99],
    [100, 199.99],
    [200, 399.99],
    [400, 599.99],
    [600, 1000],
  ];

  return (
    <div className="cursor-pointer mt-6">
      <h3 className="font-bold mb-3">Shop by Price</h3>
      <ul className="flex flex-col gap-4 text-sm text-gray-600">
        {priceRanges.map(([min, max], index) => (
          <li
            key={index}
            onClick={() => setSelectedPriceRange([min, max])}
            className="border-b pb-2 hover:text-black cursor-pointer"
          >
            ₹{min.toLocaleString("en-IN")} - ₹{max.toLocaleString("en-IN")}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Price;
