import React, { useState } from "react";
import img from "/assets/Image.png";
import Login from "../functionality/login";
import SignIn from "../functionality/signup";

function Welcome() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleSignupSuccess = () => {
    alert("Signup successful! Redirecting to login...");
    setShowSignup(false);
    setShowLogin(true); 
  };

  return (
    <div className="relative p-6 bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="container relative">
        <div className="grid min-h-[calc(100vh-2.5rem)] items-center lg:grid-cols-12 lg:gap-8">
        
          <div className="relative lg:col-span-5">
            <img
              src={img}
              alt="Hero Image"
              className="w-full h-auto max-w-full object-contain md:max-w-[50%] mx-auto"
            />
          </div>

          {/* Hero Content Section */}
          <div className="mx-auto max-w-2xl lg:col-span-7 lg:mx-0">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                Your All-in-One{" "}
                <span className="text-blue-600">Job Dashboard</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Streamline user management, monitor hiring workflows, and
                empower your admin team with an intuitive dashboard designed to
                keep everything under control. Whether you're creating users,
                viewing detailed reports, or overseeing hiring activities, our
                platform has you covered.
              </p>
              <p className="mt-4 text-lg text-yellow-400 animate-pulse">
                Don’t have an account? Sign up now!
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <button
                  onClick={() => setShowLogin(true)}
                  className="px-7 py-2 text-lg font-semibold text-white bg-[#9f1d1a]  hover:text-[#000] rounded-lg "
                >
                  LOGIN
                </button>
                <button
                  onClick={() => setShowSignup(true)}
                  className="px-7 py-3 text-lg font-semibold text-blue-600 border border-[#704208] rounded-lg hover:bg-brown-700 hover:text-[#fffe1d]"
                >
                  SIGN UP
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showLogin && <Login onClose={() => setShowLogin(false)} />}
      {showSignup && (
        <SignIn
          onClose={() => setShowSignup(false)}
          onSuccess={handleSignupSuccess}
        />
      )}
    </div>
  );
}

export default Welcome;
