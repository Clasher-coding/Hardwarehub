import { useState, useEffect } from "react";

const useSearch = (products) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [bestSellers, setBestSellers] = useState([]);

  useEffect(() => {
    const fetchBestSellers = async () => {
      try {
        const response = await fetch("https://api-1-dpjz.onrender.com/products");
        const data = await response.json();
        setBestSellers(data);
      } catch (error) {
        console.error("Error fetching bestsellers:", error);
      }
    };
    fetchBestSellers();
  }, []);

  useEffect(() => {
    if (Array.isArray(products) && Array.isArray(bestSellers)) {
      const allProducts = [...products, ...bestSellers];
      const filtered = allProducts.filter(
        (item) =>
          item.name &&
          item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  }, [searchQuery, products, bestSellers]);

  return {
    searchQuery,
    setSearchQuery,
    filteredProducts,
    setShowSearchBar,
  };
};

export default useSearch;
