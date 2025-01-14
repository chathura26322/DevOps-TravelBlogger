import React from "react";

function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100vh] bg-gray-100 ">
      <form className="flex flex-col space-y-4 bg-white p-6  rounded-[15px] shadow-md max-w-sm md:max-w-md">
        <label htmlFor="email" className="text-gray-700">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email here"
          className="p-2 border border-gray-300 rounded"
        />
        <label htmlFor="password" className="text-gray-700">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password here"
          className="p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="bg-[#f4d03f] text-white py-2 px-4 rounded hover:bg-[#b4992e]"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;