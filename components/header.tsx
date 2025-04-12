'use client';

import React, { useState } from 'react';
import Link from 'next/link'; // Import Link from next/link
import { Button } from '@/components/ui/button'; // Assuming the Button component is from shadcn/ui

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
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
                            <Link
                                href="/"
                                className="text-sm px-2 py-1 border border-transparent rounded transition duration-300 hover:text-gray-500 hover:border-[#4C368C] hover:rounded-lg"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/about"
                                className="text-sm px-2 py-1 border border-transparent rounded transition duration-300 hover:text-gray-500 hover:border-[#4C368C] hover:rounded-lg"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/services"
                                className="text-sm px-2 py-1 border border-transparent rounded transition duration-300 hover:text-gray-500 hover:border-[#4C368C] hover:rounded-lg"
                            >
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/contact"
                                className="text-sm px-2 py-1 border border-transparent rounded transition duration-300 hover:text-gray-500 hover:border-[#4C368C] hover:rounded-lg"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Waitlist Button */}
                <div className="hidden lg:block mt-4 sm:mt-0">
                    <Link href="/contact">
                        <Button
                            variant="outline"
                            className="border-[#4C368C] text-[#4C368C] hover:bg-[#4C368C] hover:text-white rounded-full px-3 py-1 sm:px-4 sm:py-2 cursor-pointer transition duration-300 ease-in-out"
                        >
                            Join Our Waitlist
                        </Button>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;