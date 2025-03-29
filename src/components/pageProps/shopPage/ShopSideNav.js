import React from "react";
import Category from "./shopBy/Category";
import Price from "./shopBy/Price";

const ShopSideNav = ({ setSelectedCategory, setSelectedPriceRange }) => {
  return (
    <div className="w-full flex flex-col gap-6">
      <Category setSelectedCategory={setSelectedCategory} />
      <Price setSelectedPriceRange={setSelectedPriceRange} />
    </div>
  );
};

export default ShopSideNav;
