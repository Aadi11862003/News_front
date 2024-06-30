import React from 'react';

const Login = () => {
  const handleClick = (e) => {
    e.preventDefault();
    
    window.location.href = "/signup"; // Replace with your signup route
  };

  const handlecall = (e)=>{
    e.preventDefault();
    window.location.href = "/Video";
  }

  const handleForgotPassword = (e) => {
    e.preventDefault();
    // Implement your logic for handling forgot password functionality
    alert("Forgot Password functionality will be implemented here.");
  };

  return (
    <div className="login-container flex items-center justify-center min-h-screen bg-gray-100">
      {/* Customize background with gradient or image */}
      <style scoped>
        {`.login-container {
          background-color: #F1F5F9; /* Soft blue-gray background */
        }`}
      </style>

      <div className="login-form w-full max-w-md p-8 bg-white rounded shadow-md">
        <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">Login</h2>

        <form className="space-y-4">
          <div className="form-group">
            <label htmlFor="emailOrPhone" className="text-sm font-medium mb-2 block text-gray-700">
              Email or Phone Number
            </label>
            <input
              type="text"
              id="emailOrPhone"
              name="emailOrPhone"
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
            <button onClick={handlecall}
              type="submit"
              className="w-full px-4 py-2 rounded-md bg-gray-900 text-white font-medium hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button> 
          </div>
          
          {/* Forgot Password link */}
          <div className="text-right">
            <button onClick={handleForgotPassword} className="text-indigo-600 hover:text-indigo-800 focus:outline-none">
              Forgot Password?
            </button>
          </div>
        </form>
        
        {/* Sign up option for new users */}
        <div className="text-center text-gray-600 mt-4">
          <p>Don't have an account?</p>
          <button onClick={handleClick} className="text-indigo-600 hover:text-indigo-800 focus:outline-none">
            Sign Up
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default Login;




