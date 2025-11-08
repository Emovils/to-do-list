"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // ✅ import router

export default function SignupPage() {
  const router = useRouter(); // ✅ initialize router

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("User signed up with:", formData);

    // ✅ Redirect to Login page after signup
    router.push("/");
  };

  return (
    <div className="flex min-h-screen font-sans bg-gradient-to-tr from-sky-100 to-blue-200">
      {/* Left side - Signup form */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 bg-white/70 backdrop-blur-sm p-10 rounded-r-3xl shadow-2xl">
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent mb-6">
          Create Account
        </h1>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-sm space-y-4 text-gray-700"
        >
          <div>
            <label className="block text-sm font-semibold mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Create password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              placeholder="Confirm password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 mt-4 bg-sky-500 text-white font-semibold rounded-lg hover:bg-sky-600 transition"
          >
            Sign Up
          </button>

          <p className="text-sm text-center mt-4">
            Already have an account?{" "}
            <Link href="/" className="text-sky-600 font-semibold hover:underline">
              Log in
            </Link>
          </p>
        </form>
      </div>

      {/* Right side - Beach image */}
      <div className="hidden md:flex w-1/2 relative">
        <Image
          src="/beach 2.png"
          alt="Beach Illustration"
          fill
          className="object-cover rounded-l-3xl"
          priority
        />
      </div>
    </div>
  );
}
