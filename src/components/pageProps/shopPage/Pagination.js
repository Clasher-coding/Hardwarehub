import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Product from "../../home/Products/Product";
import ProductBanner from "./ProductBanner";
import Loader from "../../home/Header/Loader/Loader"

const Pagination = ({ itemsPerPage, selectedCategory, selectedPriceRange }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [itemOffset, setItemOffset] = useState(0);
  const [sortOption, setSortOption] = useState("Best Sellers");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://api-1-dpjz.onrender.com/products");
        if (!response.ok) throw new Error("Failed to fetch products");

        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    let updatedProducts = [...products];

    // Filter by Category
    if (selectedCategory) {
      updatedProducts = updatedProducts.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Filter by Price Range
    if (selectedPriceRange) {
      const [minPrice, maxPrice] = selectedPriceRange;
      updatedProducts = updatedProducts.filter(
        (product) => product.price >= minPrice && product.price <= maxPrice
      );
    }

 
    if (sortOption === "All Products") {
      updatedProducts = [...products]; 
    } else if (sortOption === "Best Sellers") {
      updatedProducts.sort((a, b) => b.isBestSeller - a.isBestSeller);
    } else if (sortOption === "New Arrival") {
      updatedProducts.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
    } else if (sortOption === "Price: Low to High") {
      updatedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === "Price: High to Low") {
      updatedProducts.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(updatedProducts);
    setItemOffset(0); 
  }, [selectedCategory, selectedPriceRange, sortOption, products]);

  const endOffset = itemOffset + itemsPerPage; 
  const currentItems = filteredProducts.slice(itemOffset, endOffset); 
  const pageCount = Math.ceil(filteredProducts.length / itemsPerPage); 

  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage; 
    setItemOffset(newOffset);
  };

  return (
    <div className="container mx-auto p-4 mt-0 mb-10"> 
      <h2 className="text-xl font-bold text-center mb-6">Products</h2>

      <ProductBanner setSortOption={setSortOption} />

      {loading ? (
        <p className="text-center text-gray-500"><Loader/></p>
      ) : filteredProducts.length === 0 ? (
        <p className="text-center text-gray-500"><Loader/></p> 
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {currentItems.map((product) => (
              <div key={product._id} className="flex justify-center"> 
                <Product
                  _id={product._id}
                  img={`https://api-1-dpjz.onrender.com${product.image}`}
                  productName={product.name}
                  price={product.discountPrice || product.price} 
                  oldPrice={product.price}
                  discount={product.discount} 
                  stock={product.stock} 
                  color={product.color || "Mixed"}
                  badge={product.isBestSeller}
                  des={product.description}
                />
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex flex-col mdl:flex-row justify-center mdl:justify-between items-center mt-6">
            <ReactPaginate
              nextLabel=">"
              previousLabel="<"
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              marginPagesDisplayed={2}
              pageCount={pageCount}
              pageLinkClassName="w-9 h-9 border border-gray-300 hover:border-gray-500 duration-300 flex justify-center items-center"
              pageClassName="mr-4"
              containerClassName="flex text-base font-semibold py-6"
              activeClassName="bg-black text-white"
            />
            <p className="text-base font-normal text-gray-600">
              Showing {itemOffset + 1} to {Math.min(endOffset, filteredProducts.length)} of {filteredProducts.length} products
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default Pagination;
