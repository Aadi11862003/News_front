import React from 'react';
import img from '../images/n1.jpg'; // Adjust the path as needed

const navbar = () => {
  const handleClick = (e) => {
    e.preventDefault();
    window.location.href = "/login";
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-gray-900 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Bharat News</h1>
          <div className="flex items-center space-x-4">
            <select className="bg-gray-800 text-white px-4 py-2 rounded">
              <option>English</option>
              <option>Hindi</option>
              {/* Add more languages as needed */}
            </select>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex-grow bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${img})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold">Stay Updated with Bharat News</h1>
            <button onClick={handleClick} className="mt-4 bg-gray-800 text-white px-6 py-3 rounded">Explore More</button>
          </div>
        </div>
      </section>

      {/* Uncomment if needed */}
      {/* Trending News Section 
      <section className="container mx-auto p-6">
        <h2 className="text-3xl font-bold mb-4">Trending News</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <img src="news-thumbnail-url.jpg" alt="News" className="w-full h-48 object-cover rounded-t-lg" />
            <h3 className="text-xl font-semibold mt-4">News Title</h3>
            <p className="text-gray-700 mt-2">Short description of the news.</p>
          </div>
          
        </div>
      </section>

      
      <section className="container mx-auto p-6">
        <h2 className="text-3xl font-bold mb-4">Featured Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <img src="video-thumbnail-url.jpg" alt="Video" className="w-full h-48 object-cover rounded-t-lg" />
            <h3 className="text-xl font-semibold mt-4">Video Title</h3>
          </div>
          
        </div>
      </section> */}

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between">
          <p>&copy; 2023 Bharat News. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#">About Us</a>
            <a href="#">Contact</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default navbar;

