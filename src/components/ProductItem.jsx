// src/components/ProductItem.js
import React from 'react';
import { useCart } from '../contexts/CartContext';

function ProductItem({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="border p-4 rounded">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
      <h2 className="font-bold text-lg">{product.name}</h2>
      <p className="text-gray-700">${product.price.toFixed(2)}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductItem;
