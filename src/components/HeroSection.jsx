import React from 'react';

function HeroSection() {
  return (
    <div className="bg-gray-100 w-full h-[80vh] flex flex-col lg:flex-row items-center px-6 lg:px-16 py-8">
      {/* Left Text Section */}
      <div className="lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
          Discover the Best <span className="text-blue-600">Electronics</span> Deals
        </h1>
        <p className="text-gray-600 mt-4">
          Shop the latest electronics with unbeatable prices. From gadgets to
          home appliances, we’ve got it all!
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition">
          Shop Now
        </button>
      </div>

      {/* Right Image Section */}
      <div className="lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
        <img
          src="/images/electronics-banner.png"
          alt="Electronics Banner"
          className="w-full lg:w-3/4 h-auto object-cover"
        />
      </div>
    </div>
  );
}

export default HeroSection;
