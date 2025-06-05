import React from 'react';

const LoginPage = ({ onBack }) => {
  return (
    <div className="h-screen w-full flex items-center justify-center ">
      <div className="bg-white p-8 mt-16 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Login
          </button>
          <button
            type="button"
            onClick={onBack}
            className="w-full mt-2 text-blue-600 hover:underline"
          >
            ← Back to Home
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
