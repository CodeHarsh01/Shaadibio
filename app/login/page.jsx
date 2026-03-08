"use client";
import { useAuth } from "@/context/Authcontext";
import { useState } from "react";

import { toast, Toaster } from "sonner";

export default function Page() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const { login, signup, forgotPassword } = useAuth();


  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await login(email, password);
      toast.success("Login successful 🎉");
      window.location.href="/"
    } catch (error) {
      toast.error(error.message || "Login failed");
    }

    setLoading(false);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await signup(email, password, name);
       window.location.href="/"
      toast.success("Account created successfully 🎉");
    } catch (error) {
      toast.error(error.message || "Signup failed");
    }

    setLoading(false);
  };

  const handleForgotPassword = async () => {
    if (!email) {
      toast.error("Enter your email first");
      return;
    }

    try {
      await forgotPassword(email);
      toast.success("Password reset link sent to email");
    } catch (error) {
      toast.error(error.message || "Something went wrong");
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">
      <Toaster position="top-right" richColors={true} />
      <div className="relative w-full max-w-4xl bg-white shadow-2xl rounded-2xl overflow-hidden md:h-[550px]">

        {/* ================= MOBILE VIEW ================= */}
        <div className="md:hidden p-6">
          <div className="flex justify-center mb-6 space-x-4">
            <button
              onClick={() => setIsSignUp(false)}
              className={`px-4 py-2 rounded-full ${!isSignUp ? "bg-red-500 text-white" : "bg-gray-200"
                }`}
            >
              Sign In
            </button>

            <button
              onClick={() => setIsSignUp(true)}
              className={`px-4 py-2 rounded-full ${isSignUp ? "bg-red-500 text-white" : "bg-gray-200"
                }`}
            >
              Sign Up
            </button>
          </div>

          <form
            onSubmit={isSignUp ? handleSignUp : handleSignIn}
            className="space-y-4"
          >
            <h1 className="text-xl font-semibold text-center">
              {isSignUp ? "Create Account" : "Sign In"}
            </h1>

            {isSignUp && (
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 bg-gray-100 rounded-md"
              />
            )}

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 bg-gray-100 rounded-md"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 bg-gray-100 rounded-md"
            />

            {!isSignUp && (
              <p
                onClick={handleForgotPassword}
                className="text-sm text-red-500 cursor-pointer"
              >
                Forgot password?
              </p>
            )}

            <button className="w-full bg-[#E11D48] text-white py-2 rounded-full">
              {loading ? "Loading..." : isSignUp ? "Sign Up" : "Sign In"}
            </button>
          </form>
        </div>

        {/* ================= DESKTOP VIEW ================= */}
        <div className="hidden md:block">

          {/* SIGN IN */}
          <div
            className={`absolute top-0 left-0 w-1/2 h-full flex items-center justify-center transition-all duration-700
            ${isSignUp ? "translate-x-full opacity-0" : "translate-x-0 opacity-100 z-20"}`}
          >
            <form onSubmit={handleSignIn} className="w-3/4 space-y-4">
              <h1 className="text-2xl font-semibold">Sign In</h1>

              <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 bg-gray-100 rounded-md"
              />

              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 bg-gray-100 rounded-md"
              />

              <p
                onClick={handleForgotPassword}
                className="text-sm text-red-500 cursor-pointer"
              >
                Forgot password?
              </p>

              <button className="w-full bg-[#E11D48] text-white py-2 rounded-full">
                {loading ? "Loading..." : "Sign In"}
              </button>
            </form>
          </div>

          {/* SIGN UP */}
          <div
            className={`absolute top-0 left-0 w-1/2 h-full flex items-center justify-center transition-all duration-700
            ${isSignUp ? "translate-x-full opacity-100 z-20" : "translate-x-0 opacity-0"}`}
          >
            <form onSubmit={handleSignUp} className="w-3/4 space-y-4">
              <h1 className="text-2xl font-semibold">Create Account</h1>

              <input
                type="text"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 bg-gray-100 rounded-md"
              />

              <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 bg-gray-100 rounded-md"
              />

              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 bg-gray-100 rounded-md"
              />

              <button className="w-full bg-[#E11D48] text-white py-2 rounded-full">
                {loading ? "Loading..." : "Sign Up"}
              </button>
            </form>
          </div>

          {/* OVERLAY */}
          <div
            className={`absolute top-0 left-1/2 w-1/2 h-full bg-gradient-to-r from-red-500 to-pink-500 text-white flex flex-col items-center justify-center text-center px-8 transition-all duration-700
            ${isSignUp ? "-translate-x-full" : "translate-x-0"}`}
          >
            {isSignUp ? (
              <>
                <h1 className="text-2xl font-semibold">Welcome Back!</h1>
                <p className="mt-3 text-sm">
                  To stay connected, please login with your details
                </p>
                <button
                  onClick={() => setIsSignUp(false)}
                  className="mt-6 border border-white px-6 py-2 rounded-full hover:bg-white hover:text-red-500 transition"
                >
                  Sign In
                </button>
              </>
            ) : (
              <>
                <h1 className="text-2xl font-semibold">Hello, Friend!</h1>
                <p className="mt-3 text-sm">
                  Enter your details and start your journey
                </p>
                <button
                  onClick={() => setIsSignUp(true)}
                  className="mt-6 border border-white px-6 py-2 rounded-full hover:bg-white hover:text-red-500 transition"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}