"use client";

import Link from 'next/link';
import React from 'react';

export default function SignUpPage() {
  return (
    <div className="min-h-screen text-[#2D2D2D] flex items-center justify-center bg-[#F9F7F2] p-4">
      <div className="max-w-md w-full bg-[#EFEBE0] rounded-xl shadow-lg p-8">
        
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#2D2D2D]">Create Account</h2>
          <p className="text-[#2D2D2D] mt-2">Join our platform today</p>
        </div>

        <form className="space-y-4">
          {/* Role Selection */}
          <div>
            <label className="block text-sm font-medium text-[#2D2D2D] mb-1">Select Role</label>
            <select className="w-full px-4 py-2 border border-[#EFEBE0] rounded-lg focus:ring-2 focus:ring-[#FFB703] focus:outline-none bg-[#F9F7F2]">
              {/* <option value="admin">Admin</option> */}
              <option value="publisher">Publisher</option>
              <option value="student">Student</option>
            </select>
          </div>

          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-[#2D2D2D] mb-1">Username</label>
            <input 
              type="text" 
              placeholder="johndoe123" 
              className="w-full px-4 py-2 border border-[#EFEBE0] rounded-lg focus:ring-2 focus:ring-[#FFB703] focus:outline-none bg-[#F9F7F2]"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-[#2D2D2D] mb-1">Gmail</label>
            <input 
              type="email" 
              placeholder="example@gmail.com" 
              className="w-full px-4 py-2 border border-[#EFEBE0] rounded-lg focus:ring-2 focus:ring-[#FFB703] focus:outline-none bg-[#F9F7F2]"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-[#2D2D2D] mb-1">Password</label>
            <input 
              type="password" 
              placeholder="Create a strong password" 
              className="w-full px-4 py-2 border border-[#EFEBE0] rounded-lg focus:ring-2 focus:ring-[#FFB703] focus:outline-none bg-[#F9F7F2]"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-[#2D2D2D] mb-1">Confirm Password</label>
            <input 
              type="password" 
              placeholder="Repeat your password" 
              className="w-full px-4 py-2 border border-[#EFEBE0] rounded-lg focus:ring-2 focus:ring-[#FFB703] focus:outline-none bg-[#F9F7F2]"
            />
          </div>

          {/* Sign Up Button */}
          <button 
            type="button"
            className="w-full bg-[#E63946] text-white font-semibold py-2 rounded-lg hover:bg-[#E63946] hover:opacity-90 transition duration-200 mt-2"
          >
            Create Account
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-[#2D2D2D]">
          Already have an account? <Link href="/login" className="text-[#E63946] cursor-pointer hover:underline">Log In</Link>
        </p>
      </div>
    </div>
  );
}