import React from 'react';

const Signup = () => {


  const submitcall = (e)=>{
    e.preventDefault();
    window.location.href = "/login";

  }
  return (
    <div className="signup-container flex items-center justify-center min-h-screen bg-gray-100">
      {/* Customize background with gradient or image */}
      <style scoped>
        {`.signup-container {
          background-color: #F1F5F9; /* Soft blue-gray background */
        }`}
      </style>

      <div className="signup-form w-full max-w-md p-8 bg-white rounded shadow-md">
        <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">Sign Up</h2>

        <form className="space-y-4">
          <div className="form-group">
            <label htmlFor="name" className="text-sm font-medium mb-2 block text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="appearance-none rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 w-full"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="text-sm font-medium mb-2 block text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="appearance-none rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 w-full"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="text-sm font-medium mb-2 block text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="appearance-none rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 w-full"
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword" className="text-sm font-medium mb-2 block text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              required
              className="appearance-none rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 w-full"
            />
          </div>

          <div className="form-group">
            <button
              type="submit"
              onClick={submitcall}
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white font-medium hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;

