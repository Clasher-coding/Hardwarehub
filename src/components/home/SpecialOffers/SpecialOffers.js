import React, { useEffect, useState } from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import ReactPaginate from "react-paginate";
import Loader from "../Header/Loader/Loader";

const SpecialOffers = () => {
  const [products, setProducts] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 4;

  useEffect(() => {
    fetch("https://api-1-dpjz.onrender.com/products")
      .then((res) => res.json())
      .then((data) => {
        const specialOffers = data.filter((product) => product.isSpecialOffer);
        setProducts(specialOffers);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(products.slice(itemOffset, endOffset));
  }, [itemOffset, products]);

  const pageCount = Math.ceil(products.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage;
    setItemOffset(newOffset);
  };

  return (
    <div className="w-full pb-20">
      <Heading heading="Special Offers" />
      {loading ? (
        <Loader />
      ) : currentItems.length === 0 ? (
        <p className="text-center text-gray-500">No special offers available! 🚨</p>
      ) : (
        <>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
            {currentItems.map((product) => (
              <Product
                key={product._id}
                _id={product._id}
                img={
                  product.image
                    ? product.image.includes("http")
                      ? product.image
                      : `https://api-1-dpjz.onrender.com${product.image}`
                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1ZLkaEO7rCJW_eE2B-In48X_oMFTODjK8Go6UkI_5eZIELrGFqnHN14Y&s" 
                }
                productName={product.name}
                price={product.discountPrice || product.price}
                oldPrice={product.price}
                discount={product.discount}
                stock={product.stock}
                color="Black"
                badge={true}
                des={product.description}
              />
            ))}
          </div>
          <div className="flex justify-center mt-6">
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
          </div>
        </>
      )}
    </div>
  );
};

export default SpecialOffers;
