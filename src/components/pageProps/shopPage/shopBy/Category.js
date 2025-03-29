import React from "react";

const Category = ({ setSelectedCategory }) => {
  const categories = ["New Arrivals", "Electronics", "Others"];

  return (
    <div className="cursor-pointer">
      <h3 className="font-bold mb-3">Shop by Category</h3>
      <ul className="flex flex-col gap-4 text-sm text-gray-600">
        {categories.map((category) => (
          <li
            key={category}
            onClick={() => setSelectedCategory(category)}
            className="border-b pb-2 hover:text-black cursor-pointer"
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
