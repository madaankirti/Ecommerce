// src/components/Checkout.js
import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';

function Checkout() {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', address: '', card: '' });

  const handleInputChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Here you would process the payment
    clearCart();
    navigate('/');
    alert('Purchase successful!');
  };

  if (cartItems.length === 0) {
    return <p>Your cart is empty.</p>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleInputChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Address</label>
          <input
            name="address"
            value={form.address}
            onChange={handleInputChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Credit Card</label>
          <input
            name="card"
            value={form.card}
            onChange={handleInputChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Place Order
        </button>
      </form>
    </div>
  );
}

export default Checkout;
