import React from 'react';

const Home = () => {
  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-orange-500 mb-4">Welcome to Froker Blogs</h1>
        <p className="text-lg text-gray-600 mb-6">Your one-stop destination for insightful articles and engaging stories.</p>
        {/* <button className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-600 transition duration-300">
          Explore Now
        </button> */}
      </div>
    </div>
  );
};

export default Home;
