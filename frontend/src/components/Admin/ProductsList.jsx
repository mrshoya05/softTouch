import React, { useState } from "react";

const ProductsList = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: "$1200", category: "Electronics" },
    { id: 2, name: "Phone", price: "$800", category: "Electronics" },
    { id: 3, name: "Chair", price: "$150", category: "Furniture" },
  ]);

  // Handle adding a new product
  const handleAddProduct = () => {
    const newProduct = {
      id: products.length + 1,
      name: "New Product",
      price: "$0",
      category: "Category",
    };
    setProducts([...products, newProduct]);
  };

  // Handle deleting a product
  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center text-indigo-600">Product Management</h2>
      
      <div className="flex justify-end mb-4">
        <button
          onClick={handleAddProduct}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Add New Product
        </button>
      </div>

      <div className="overflow-x-auto shadow-lg rounded-lg border">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-indigo-100">
              <th className="text-left p-4 font-medium text-gray-600">ID</th>
              <th className="text-left p-4 font-medium text-gray-600">Name</th>
              <th className="text-left p-4 font-medium text-gray-600">Price</th>
              <th className="text-left p-4 font-medium text-gray-600">Category</th>
              <th className="text-left p-4 font-medium text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b hover:bg-indigo-50">
                <td className="p-4 text-gray-700">{product.id}</td>
                <td className="p-4 text-gray-700">{product.name}</td>
                <td className="p-4 text-gray-700">{product.price}</td>
                <td className="p-4 text-gray-700">{product.category}</td>
                <td className="p-4 text-gray-700">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 mr-2">
                    Upload
                  </button>
                  <button
                    onClick={() => handleDeleteProduct(product.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductsList;
