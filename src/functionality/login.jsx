import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://dummyjson.com/c/7480-ad0d-458d-9bf2",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: email, password: password }),
        }
      );

      if (response.ok) {
        const data = response;
        navigate("/profilesection");
        nav;
      } else {
        alert("Invalid credentials. Please try again.");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-blue-900 bg-opacity-30 flex items-center justify-center z-50">
      <div className="backdrop-blur-sm border-black border-[0.1rem] px-14 py-10 rounded-sm shadow-2xl max-w-sm w-full">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border-[2px] rounded-lg focus:ring-1 focus:ring-rose-800 focus:outline-none"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border-[2px] text-black rounded-md focus:ring-1 focus:ring-rose-800 focus:outline-none"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-800 rounded-sm hover:bg-blue-900"
          >
            Done
          </button>
        </form>
        <button
          onClick={onClose}
          className="mt-4 w-full px-4 py-2 bg-red-500 text-black rounded-lg"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default Login;
