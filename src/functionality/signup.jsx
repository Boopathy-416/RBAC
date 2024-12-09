import React, { useState } from "react";

const SignIn = ({ onClose, onSuccess }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        "https://dummyjson.com/c/b441-9c2f-4759-afe4",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, password }),
        }
      );

      if (response.ok) {
        onSuccess("Signup successful! Redirecting to login...");
        setTimeout(() => {
          onClose();
        }, 5000);
      } else {
        alert("Signup failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during signup:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-blue-900 bg-opacity-30 flex items-center justify-center z-50">
      <div className="backdrop-blur-sm border-black border-[0.1rem] px-14 py-10 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
        <form className="space-y-4" onSubmit={handleSignup}>
          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your name"
            />
          </div>
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
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
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
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className={`w-full px-4 py-2 text-white bg-blue-800 rounded-lg hover:bg-blue-900 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Processing..." : "Done"}
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

export default SignIn;
