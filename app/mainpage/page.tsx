'use client'

import React, { useState } from "react";
import { Button } from "@/components/ui/button"; // Assuming shadcn/ui Button is set up
import { cn } from "@/lib/utils"; // Utility function for conditional classNames

const MainPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="flex flex-col min-h-screen font-sans">
            {/* Container */}
            <div className="container mx-auto px-4 lg:px-12">
                {/* Header */}
                <header className="bg-white text-[#4C368C] py-4 px-8">
                    <div className="flex items-center justify-between">
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
                            className={`${isMenuOpen ? "block" : "hidden"
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
                                className="border-[#4C368C] text-[#4C368C] hover:bg-[#4C368C] hover:text-white rounded-full px-3 py-1 sm:px-4 sm:py-2 cursor-pointer transition duration-300 ease-in-out"
                            >
                                Join Our Waitlist
                            </Button>
                        </div>
                    </div>
                </header>

                {/* Background Section */}
                <section
                    className="relative h-[500px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full bg-cover bg-center"
                    style={{
                        backgroundImage: "url('./imgs/background.png')",
                    }}
                >
                    {/* Overlay */}
                    <div
                        className="absolute inset-0 flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 lg:px-18"
                        style={{
                            background: "linear-gradient(180deg, #4C368C 0%, #39286A 100%)",
                            opacity: 0.9,
                        }}
                    >
                        {/* Left Content */}
                        <div className="text-center lg:text-left text-white max-w-lg">
                            <h1 className="text-4xl sm:text-6xl font-bold mb-6">
                                AI & Big Data Solutions for Your Business
                            </h1>
                            <p className="text-sm sm:text-base mb-8">
                                By leveraging AI & Big Data Solutions to enhance your business efficiency, you can
                                streamline operations, reduce costs, and improve overall productivity. Tap into the
                                world of the future AI to boost your productivity and reducing cost.
                            </p>
                            <button className="bg-white text-[#4C368C] rounded-full px-6 py-2 font-semibold mb-10">
                                Contact Us
                            </button>
                            <p className="text-sm sm:text-base mb-4">
                                Join our waitlist for our upcoming product
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-full border bg-white pl-4 pr-2 py-1">
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="px-4 py-2 flex-grow text-[#4C368C] border-none outline-none"
                                />
                                <button className="bg-[#4C368C] text-white border rounded-full px-6 py-2 cursor-pointer transition duration-300 ease-in-out hover:bg-white hover:text-[#4C368C] hover:border-[#4C368C]">
                                    Join Our Waitlist
                                </button>
                            </div>
                        </div>

                        {/* Right Content */}
                        <div className="hidden lg:block">
                            <img
                                src="./imgs/side.png"
                                alt="Side Illustration"
                                className="h-auto max-w-md"
                            />
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="flex flex-col lg:flex-row items-stretch mt-6 lg:mt-12 gap-4 lg:p-12">
                    {/* Left Half with 4 Divs */}
                    <div className="bg-[#39286A] text-white w-full lg:w-1/2 p-6 lg:p-12 rounded-lg shadow-md">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {/* Box 1 */}
                            <div className="group flex flex-col items-center justify-center bg-[#4C368C] rounded-lg p-6 shadow-md h-full min-h-[250px] transition duration-300 ease-in-out hover:bg-white">
                                <div className="bg-[#39286A] group-hover:bg-[#EBEBEB] rounded-full p-4 mb-4 transition duration-300 ease-in-out">
                                    <img
                                        src="./imgs/1.svg"
                                        alt="Big Data Analysis"
                                        className="w-16 h-16 object-contain group-hover:fill-[#39286A] transition duration-300 ease-in-out"
                                    />
                                </div>
                                <h3 className="text-lg font-bold mb-2 text-center group-hover:text-[#4C368C] transition duration-300 ease-in-out">
                                    Big Data Analysis
                                </h3>
                                <p className="text-sm text-center group-hover:text-[#4C368C] transition duration-300 ease-in-out">
                                    Big data analysis empowers businesses with actionable insights and data-driven decision-making.
                                </p>
                            </div>

                            {/* Box 2 */}
                            <div className="group flex flex-col items-center justify-center bg-[#4C368C] rounded-lg p-6 shadow-md h-full min-h-[250px] transition duration-300 ease-in-out hover:bg-white">
                                <div className="bg-[#39286A] group-hover:bg-[#EBEBEB] rounded-full p-4 mb-4 transition duration-300 ease-in-out">
                                    <img
                                        src="./imgs/2.svg"
                                        alt="Data Security & Governance"
                                        className="w-16 h-16 object-contain group-hover:fill-[#39286A] transition duration-300 ease-in-out"
                                    />
                                </div>
                                <h3 className="text-lg font-bold mb-2 text-center group-hover:text-[#4C368C] transition duration-300 ease-in-out">
                                    Data Security & Governance
                                </h3>
                                <p className="text-sm text-center group-hover:text-[#4C368C] transition duration-300 ease-in-out">
                                    Protect your data with robust security measures and comprehensive governance, ensuring integrity, confidentiality, and compliance.
                                </p>
                            </div>

                            {/* Box 3 */}
                            <div className="group flex flex-col items-center justify-center bg-[#4C368C] rounded-lg p-6 shadow-md h-full min-h-[250px] transition duration-300 ease-in-out hover:bg-white">
                                <div className="bg-[#39286A] group-hover:bg-[#EBEBEB] rounded-full p-4 mb-4 transition duration-300 ease-in-out">
                                    <img
                                        src="./imgs/3.svg"
                                        alt="Machine Learning"
                                        className="w-16 h-16 object-contain group-hover:fill-[#39286A] transition duration-300 ease-in-out"
                                    />
                                </div>
                                <h3 className="text-lg font-bold mb-2 text-center group-hover:text-[#4C368C] transition duration-300 ease-in-out">
                                    Machine Learning
                                </h3>
                                <p className="text-sm text-center group-hover:text-[#4C368C] transition duration-300 ease-in-out">
                                    Machine learning enhances business processes through predictive analytics and automated solutions.
                                </p>
                            </div>

                            {/* Box 4 */}
                            <div className="group flex flex-col items-center justify-center bg-[#4C368C] rounded-lg p-6 shadow-md h-full min-h-[250px] transition duration-300 ease-in-out hover:bg-white">
                                <div className="bg-[#39286A] group-hover:bg-[#EBEBEB] rounded-full p-4 mb-4 transition duration-300 ease-in-out">
                                    <img
                                        src="./imgs/4.svg"
                                        alt="Predictive Analysis"
                                        className="w-16 h-16 object-contain group-hover:fill-[#39286A] transition duration-300 ease-in-out"
                                    />
                                </div>
                                <h3 className="text-lg font-bold mb-2 text-center group-hover:text-[#4C368C] transition duration-300 ease-in-out">
                                    Predictive Analysis
                                </h3>
                                <p className="text-sm text-center group-hover:text-[#4C368C] transition duration-300 ease-in-out">
                                    Harnessing data to anticipate future trends and optimize decision-making processes.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Half with Text Content */}
                    <div className="flex flex-col justify-start items-start w-full lg:w-1/2 p-6 lg:p-12">
                        <p className="px-8 py-2 rounded-full bg-[#C5E0FF] text-[#4C368C] mb-4">About Us</p>
                        <h2 className="text-xl lg:text-6xl font-bold text-[#4C368C] mb-8 mt-6">
                            Our Excellent AI & Big Data Solutions for Your Business
                        </h2>
                        <p className="text-lg lg:text-lg text-gray-700 mt-8">
                            Our business enables you to streamline operations, enhance customer experiences, and drive innovative growth strategies by leveraging advanced analytics, automation, and machine learning technologies to deliver actionable insights and optimize performance across all departments.
                        </p>
                    </div>
                </section>
            </div>

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