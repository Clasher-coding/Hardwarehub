import React, { useEffect, useState } from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";

const BestSellers = () => {
  const [bestSellers, setBestSellers] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4); 

  useEffect(() => {
    const fetchBestSellers = async () => {
      try {
        const response = await fetch("https://api-1-dpjz.onrender.com/products/bestsellers");
        const data = await response.json();
        const uniqueBestSellers = data.filter(
          (product, index, self) =>
            index === self.findIndex((p) => p._id === product._id)
        );
        setBestSellers(uniqueBestSellers);
      } catch (error) {
        console.error("Error fetching bestsellers:", error);
      }
    };
    fetchBestSellers();
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4); 
  };

  return (
    <div className="w-full pb-20">
      <Heading heading="Our Bestsellers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        {bestSellers.slice(0, visibleCount).map((product) => (
          <Product
            key={product._id}
            _id={product._id}
            img={`https://api-1-dpjz.onrender.com${product.image}`}
            productName={product.name}
            price={product.discountPrice || product.price} 
            oldPrice={product.price} 
            discount={product.discount} 
            stock={product.stock} 
            color={product.color}
            badge={product.isBestSeller}
            des={product.description}
            category="bestSeller" 
          />
        ))}
      </div>
      {visibleCount < bestSellers.length && (
        <div className="text-center mt-8">
          <button
            onClick={handleLoadMore}
            className="px-6 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default BestSellers;
