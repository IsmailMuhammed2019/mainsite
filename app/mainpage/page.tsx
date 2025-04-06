'use client'

import React, { useState } from "react";
import { Button } from "@/components/ui/button"; // Assuming shadcn/ui Button is set up
import { cn } from "@/lib/utils"; // Utility function for conditional classNames

const MainPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* Header */}
      <header className="bg-white text-[#4C368C] py-4 shadow-md">
        <div className="container mx-auto flex items-center justify-between px-6 lg:px-12">
          {/* Logo and Title */}
          <div className="flex items-center space-x-3">
            <img
              src="./imgs/qsd.png"
              alt="Quantum Space Dynamics Logo"
              className="h-6 w-6 sm:h-8 sm:w-8" // Responsive logo size
            />
            <div>
              <h1 className="text-sm sm:text-sm font-semibold">Quantum Space Dynamics</h1>
              <p className="text-xs sm:text-xs text-gray-600 italic">
                a solution for all...
              </p>
            </div>
          </div>

          {/* Burger Menu Button */}
          <button
            className="lg:hidden text-[#4C368C] focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>

          {/* Menus */}
          <nav
            className={`${
              isMenuOpen ? "block" : "hidden"
            } lg:flex lg:flex-grow lg:justify-center lg:items-center lg:space-x-6`}
          >
            <ul className="flex flex-col lg:flex-row lg:space-x-6 space-y-4 lg:space-y-0 mt-4 lg:mt-0">
              <li>
                <a
                  href="#home"
                  className="text-sm px-2 py-1 border border-transparent rounded transition duration-300 hover:text-gray-500 hover:border-[#4C368C] hover:rounded-lg"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-sm px-2 py-1 border border-transparent rounded transition duration-300 hover:text-gray-500 hover:border-[#4C368C] hover:rounded-lg"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-sm px-2 py-1 border border-transparent rounded transition duration-300 hover:text-gray-500 hover:border-[#4C368C] hover:rounded-lg"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-sm px-2 py-1 border border-transparent rounded transition duration-300 hover:text-gray-500 hover:border-[#4C368C] hover:rounded-lg"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Waitlist Button */}
          <div className="hidden lg:block mt-4 sm:mt-0">
            <Button
              variant="outline"
              className="border-[#4C368C] text-[#4C368C] hover:bg-[#4C368C] hover:text-white rounded-lg px-3 py-1 sm:px-4 sm:py-2 cursor-pointer transition duration-300 ease-in-out"
            >
              Join Our Waitlist
            </Button>
          </div>
        </div>
      </header>

      {/* Background Section */}
      <div
        className="relative h-[500px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full bg-cover bg-center px-6 lg:px-12"
        style={{
          backgroundImage: "url('./imgs/background.png')",
        }}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(0deg, #4C368C 0%, #39286A 100%)",
            opacity: 0.7,
          }}
        ></div>
      </div>

      {/* Hero Section */}
      <main className="flex-grow">
        <section className="bg-gray-100 py-10 sm:py-20 px-6 lg:px-12">
          <div className="container mx-auto text-center">
            <h1 className="text-2xl sm:text-4xl font-bold mb-4">Welcome to Our Website</h1>
            <p className="text-sm sm:text-lg text-gray-700 mb-6">
              We provide the best solutions for your business needs.
            </p>
            <Button
              variant="default"
              className="bg-[#4C368C] text-white hover:bg-[#3b2c6e] px-4 py-2 sm:px-6 sm:py-3"
            >
              Get Started
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#4C368C] text-white py-4 px-6 lg:px-12">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Quantum Space Dynamics. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default MainPage;