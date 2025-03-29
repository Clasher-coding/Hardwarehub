import React, { useState } from "react";

const ProductViewModal = ({ product, isOpen, onClose }) => {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  const toggleDescription = () => {
    setIsDescriptionExpanded((prev) => !prev);
  };

  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-xl font-bold mb-4">Product Details</h2>
        <p><strong>Name:</strong> {product.name}</p>
        <p>
          <strong>Description:</strong>{" "}
          {isDescriptionExpanded || product.description.length <= 20
            ? product.description
            : `${product.description.slice(0, 20)}...`}
          {product.description.length > 20 && (
            <span
              onClick={toggleDescription}
              style={{ color: "gray", cursor: "pointer", marginLeft: "5px" }}
            >
              {isDescriptionExpanded ? "See Less" : "See More"}
            </span>
          )}
        </p>
        <p><strong>Price:</strong> ${product.price}</p>
        <p><strong>Stock:</strong> {product.stock}</p>
        <p><strong>Category:</strong> {product.category}</p>
        <p><strong>Discount:</strong> {product.discount}%</p>
        <img
          src={`http://localhost:5001${product.image}`}
          alt={product.name}
          style={{
            width: "100%",
            height: "auto", // Maintain aspect ratio
            objectFit: "contain", // Ensure the image is fully visible
            border: "1px solid #ddd", // Optional: Add a border for better visibility
            borderRadius: "4px", // Optional: Add rounded corners
          }}
          className="mt-4"
        />
        <button
          onClick={onClose}
          className="bg-gray-500 text-white px-4 py-2 mt-4"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ProductViewModal;
