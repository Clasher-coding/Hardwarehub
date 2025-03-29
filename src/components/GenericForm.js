import React, { useState, useEffect } from "react";
import { Button, Box } from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";

const GenericForm = ({
  formData,
  handleChange,
  handleFileChange,
  handleSubmit,
  editing,
}) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch categories from an API or define them statically
    const fetchCategories = async () => {
      const response = await fetch("http://localhost:5001/api/categories");
      const data = await response.json();
      setCategories(data);
    };
    fetchCategories();
  }, []);

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        required
        className="border p-2 mb-2 w-full"
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        required
        className="border p-2 mb-2 w-full"
      />
      <input
        type="number"
        name="price"
        value={formData.price}
        onChange={handleChange}
        placeholder="Price"
        required
        className="border p-2 mb-2 w-full"
      />
      <input
        type="number"
        name="stock"
        value={formData.stock}
        onChange={handleChange}
        placeholder="Stock"
        required
        className="border p-2 mb-2 w-full"
      />
      <select
        name="category"
        value={formData.category}
        onChange={handleChange}
        required
        className="border p-2 mb-2 w-full"
      >
        <option value="Electronics">Electronics</option>
        <option value="HardWare">Hardware Tools</option>
        <option value="Others">Others</option>
        {categories.map((category) => (
          <option key={category.id} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
      <input
        type="number"
        name="discount"
        value={formData.discount}
        onChange={handleChange}
        placeholder="Discount"
        className="border p-2 mb-2 w-full"
      />
      <Button
        variant="contained"
        component="label"
        sx={{
          backgroundColor: "#808080",
          color: "#fff",
          "&:hover": { backgroundColor: "#6b6b6b" },
        }}
        className="mb-2"
        startIcon={<AttachFileIcon />}
      >
        Choose File
        <input
          type="file"
          name="image"
          onChange={handleFileChange}
          accept="image/*"
          hidden
        />
      </Button>

      {formData.image && (
        <p className="text-sm text-gray-600">
          Selected File: {formData.image.name || formData.image}
        </p>
      )}
      <Box mt={2}>
        <button type="submit" className="bg-gray-500 text-white px-4 py-2">
          {editing ? "Update Product" : "Add Product"}
        </button>
      </Box>
    </form>
  );
};

export default GenericForm;
