import React, { useEffect, useState } from "react";

const ProductsOnSale = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://api-1-dpjz.onrender.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
     
      {/* <div className="flex flex-col gap-2">
        {products.length > 0 ? (
          products.map((item) => (
            <div
              key={item._id}
              className="flex items-center gap-4 border-b-[1px] border-b-gray-300 py-2"
            >
              <div>
                <img className="w-24" src={item.img} alt={item.productName} />
              </div>
              <div className="flex flex-col gap-2 font-titleFont">
                <p className="text-base font-medium">{item.productName}</p>
                <p className="text-sm font-semibold">${item.price}</p>
              </div>
            </div>
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div> */}
    </div>
  );
};

export default ProductsOnSale;
