// src/components/Cart.js
import React from 'react';
import { useCart } from '../contexts/CartContext';
import { Link, useNavigate } from 'react-router-dom';

function Cart() {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  if (cartItems.length === 0) {
    return (
      <div>
        <h1 className="text-2xl font-bold mb-6">Your Cart is Empty</h1>
        <Link to="/" className="text-blue-500">Go Shopping</Link>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      <ul>
        {cartItems.map(item => (
          <li key={item.id} className="flex justify-between items-center mb-4">
            <div>
              <h2 className="font-bold">{item.name}</h2>
              <p>${item.price.toFixed(2)}</p>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <p className="font-bold text-lg">Total: ${totalPrice.toFixed(2)}</p>
      <div className="mt-4">
        <button
          onClick={() => navigate('/checkout')}
          className="bg-green-500 text-white px-4 py-2 rounded mr-2 hover:bg-green-600"
        >
          Proceed to Checkout
        </button>
        <button
          onClick={clearCart}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
}

export default Cart;
