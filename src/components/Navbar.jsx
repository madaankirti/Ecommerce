import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 flex justify-between items-center shadow-lg">
      {/* Logo Section */}
      <div>
        <h1 className="text-2xl font-bold text-yellow-300">
          <Link to="/">MyStore</Link>
        </h1>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-6">
        <Link to="/" className="text-white hover:text-gray-200">
          Home
        </Link>
        <Link to="/categories" className="text-white hover:text-gray-200">
          Categories
        </Link>
        <Link to="/about" className="text-white hover:text-gray-200">
          About
        </Link>
        <Link to="/contact" className="text-white hover:text-gray-200">
          Contact
        </Link>
      </div>

      {/* Search Bar */}
      <div className="hidden md:flex">
        <input
          type="text"
          placeholder="Search products..."
          className="px-4 py-2 rounded-l-lg text-black focus:outline-none"
        />
        <button className="px-4 py-2 bg-blue-700 text-white rounded-r-lg hover:bg-blue-800 transition">
          Search
        </button>
      </div>

      {/* Cart Section */}
      <div className="relative text-white hover:text-gray-200">
        <Link to="/cart" className="flex items-center space-x-2">
          {/* Cart Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8" // Larger cart icon
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-2 5m0 0h12m-12 0a1 1 0 001 1h12a1 1 0 001-1m-5-5V8"
            />
          </svg>

          {/* Badge */}
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
            0
          </span>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
