import React from "react";
import { Button } from "@/components/ui/button"; // Assuming shadcn/ui Button is set up
import { cn } from "@/lib/utils"; // Utility function for conditional classNames

const MainPage = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* Header */}
      <header className="bg-white text-[#4C368C] py-4 shadow-md">
        <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
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
          {/* Menus */}
          <nav className="flex-grow mt-4 sm:mt-0">
            <ul className="flex flex-wrap justify-center space-x-4 sm:space-x-6">
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
          <div className="mt-4 sm:mt-0">
            <Button
              variant="outline"
              className="border-[#4C368C] text-[#4C368C] hover:bg-[#4C368C] hover:text-white rounded-lg px-3 py-1 sm:px-4 sm:py-2 cursor-pointer transition duration-300 ease-in-out"
            >
              Join Our Waitlist
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-grow">
        <section className="bg-gray-100 py-10 sm:py-20">
          <div className="container mx-auto text-center px-4">
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
      <footer className="bg-[#4C368C] text-white py-4">
        <div className="container mx-auto text-center px-4">
          <p>&copy; {new Date().getFullYear()} Quantum Space Dynamics. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default MainPage;