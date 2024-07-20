import React from 'react';

const Discover = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-center mb-4 text-orange-600">
        Froker
      </h1>
      <p className="text-2xl font-semibold text-center mb-6 text-gray-700">
        Enjoy The Thrill of Exciting
        <br />
        Challenges & Social Shopping
      </p>
      <p className="text-xl text-center mb-4 text-gray-600">
        Rediscover Memories | Explore Recommendations!
      </p>
      <button className="px-6 py-3 bg-orange-600 text-white font-bold rounded-lg shadow-md hover:bg-orange-500 transition duration-300">
        Download App
      </button>
    </div>
  );
};

export default Discover;
