"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // ✅ import this

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fadeIn, setFadeIn] = useState(false);
  const router = useRouter(); // ✅ initialize router

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Logging in with:", { email, password });

    // ✅ Redirect to the To-Do page after form submission
    router.push("/todo");
  };

  return (
    <div className="flex min-h-screen font-sans bg-gradient-to-tr from-blue-100 to-sky-200 overflow-hidden">
      {/* Left section - Login */}
      <div
        className={`flex flex-col justify-center items-center w-full md:w-1/2 bg-white/70 backdrop-blur-sm p-8 rounded-r-3xl shadow-2xl transform transition-all duration-700 ${
          fadeIn ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
        }`}
      >
        <h1 className="text-3xl font-bold text-sky-600 mb-6">Welcome Back 👋</h1>

        <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
          <div>
            <label className="block text-black-600 text-sm font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block text-black-600 text-sm font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 mt-4 bg-sky-500 text-white font-semibold rounded-lg hover:bg-sky-600 transition"
          >
            Log In
          </button>

          <p className="text-sm text-center mt-4 text-gray-600">
            Don’t have an account?{" "}
            <Link
              href="/signup"
              className="text-sky-600 font-semibold hover:underline"
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>

      {/* Right section - Illustration */}
      <div className="hidden md:flex w-1/2 relative">
        <Image
          src="/beach 2.png"
          alt="Beach Illustration"
          fill
          className="object-cover rounded-l-3xl transition-all duration-700"
          priority
        />
      </div>
    </div>
  );
}
