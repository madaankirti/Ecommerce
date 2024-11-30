// src/components/ProductList.js
import React from 'react';
import products from '../data/product';
import ProductItem from "./ProductItem";

function ProductList() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Products</h1>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 my-6 px-6">
        {products.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
