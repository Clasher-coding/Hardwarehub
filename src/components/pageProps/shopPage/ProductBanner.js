import React from "react";

const ProductBanner = ({ setSortOption }) => {
  return (
    <div className="flex justify-end mb-4">
      <label className="mr-2 font-medium text-gray-700">Sort by:</label>
      <select
        onChange={(e) => setSortOption(e.target.value)}
        className="border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
      >
        <option value="All Products">All Products</option>
        <option value="Best Sellers">Best Sellers</option>
        <option value="New Arrival">New Arrival</option>
        <option value="Price: Low to High">Price: Low to High</option>
        <option value="Price: High to Low">Price: High to Low</option>
      </select>
    </div>
  );
};

export default ProductBanner;
