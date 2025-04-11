'use client'

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button"; // Assuming shadcn/ui Button is set up
import { cn } from "@/lib/utils"; // Utility function for conditional classNames
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const MainPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const divItes = [
        {
            id: 1,
            title: "AI & Big Data Solutions",
            subText: "We utilize machine learning to improve processes and provide predictive insights.",
            img: "./imgs/first.png",
        },
        {
            id: 2,
            title: "Optimized Security",
            subText: "We implement advanced AI & Big Data Solutions to enhance and safeguard your business's security.",
            img: "./imgs/sec.png",
        },
        {
            id: 3,
            title: "Predictive Learning",
            subText: "We utilize machine learning to improve processes and provide predictive insights.",
            img: "./imgs/third.png",
        },
    ];
    const carouselItems = [
        {
            id: 1,
            title: "MACHINE LEARNING",
            subText: "We utilize machine learning to improve processes and provide predictive insights.",
            img: "./imgs/first.png",
        },
        {
            id: 2,
            title: "OPTIMIZED SECURITY",
            subText: "We implement advanced AI & Big Data Solutions to enhance and safeguard your business's security.",
            img: "./imgs/sec.png",
        },
        {
            id: 3,
            title: "PREDICTIVE LEARNING",
            subText: "We utilize machine learning to improve processes and provide predictive insights.",
            img: "./imgs/third.png",
        },
    ];

    // Autoplay functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
        }, 3000); // Change slide every 3 seconds
        return () => clearInterval(interval);
    }, [carouselItems.length]);

    const getPositionClass = (index: number) => {
        const totalItems = carouselItems.length;
        const diff = (index - currentIndex + totalItems) % totalItems;

        if (diff === 0) return "scale-100 z-10 opacity-100"; // Active item
        if (diff === 1 || diff === totalItems - 1) return "scale-75 z-5 opacity-50"; // Next or previous item
        return "scale-50 z-0 opacity-0"; // Hidden items
    };

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
                    className="relative h-[500px] sm:h-[400px] md:h-[500px] mb-12 lg:h-[600px] w-full bg-cover bg-center"
                    style={{
                        backgroundImage: "url('./imgs/background.png')",
                    }}
                >
                    {/* Overlay */}
                    <div
                        className="absolute inset-0 flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 lg:px-18"
                        style={{
                            background: "linear-gradient(180deg, #4C368C 0%, #ffffff 100%)",
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
                <section className="flex flex-col lg:flex-row items-stretch mt-12 lg:mb-12 gap-4 lg:p-12">
                    {/* Left Half with 4 Divs */}
                    <div className="w-full lg:w-1/2 flex justify-center h-full">
                        <img
                            src="./imgs/secong.png"
                            alt="Why Choose Us"
                            className="w-full h-full max-w-[750px] lg:max-w-[750px] object-cover"
                        />
                    </div>

                    {/* Right Half with Dynamic Content */}
                    <div className="flex flex-col justify-start items-start w-full lg:w-1/2 p-6 lg:p-12 lg:pt-1">
                        <p className="px-8 py-2 rounded-full text-xs font-bold bg-[#C5E0FF] text-[#4C368C] mb-4">About Us</p>
                        <h2 className="text-xl lg:text-6xl font-bold text-[#4C368C] mb-8 mt-6">
                            Our Excellent AI & Big Data Solutions for Your Business
                        </h2>
                        <p className="text-lg lg:text-lg text-gray-700 mt-8">
                            Our business enables you to streamline operations, enhance customer experiences, and drive innovative growth strategies by leveraging advanced analytics, automation, and machine learning technologies to deliver actionable insights and optimize performance across all departments.
                        </p>
                    </div>
                </section>

                {/* Why Choose Us Section */}
                <section className="flex flex-col lg:flex-row items-start mb-12 lg:items-start gap-8 lg:gap-12 px-6 lg:px-12 py-12">
                    {/* Left Content */}
                    <div className="flex flex-col justify-start items-start w-full lg:w-1/2 p-6 lg:p-12 lg:pt-1">
                        <p className="inline-block px-6 py-2 rounded-full text-xs font-bold bg-[#C3E4C5] text-[#4CAF50] mb-8">
                            Why Choose Us
                        </p>
                        <div className="flex flex-col justify-start item-start">

                            <h2 className="text-2xl lg:text-4xl font-bold text-[#4C368C] mb-8 mt-4">
                                We're Best in AI and Big Data Solution Industry with 10 Years of Experience
                            </h2>
                            <p className="text-sm lg:text-base text-gray-700 mb-6">
                                Leveraging a decade of expertise to deliver cutting-edge AI solutions that drive innovation and efficiency, we have consistently set industry standards. Our commitment to excellence and deep understanding of AI technologies enable us to provide tailored solutions that meet the unique needs of each client, ensuring sustained growth and competitive advantage.
                            </p>
                            <ul className="list-disc pl-6 text-sm lg:text-base text-gray-700 space-y-4">
                                <li>
                                    <span className="font-bold text-[#4C368C]">Proven Expertise:</span> With 10 years in the AI industry, we deliver reliable and innovative solutions.
                                </li>
                                <li>
                                    <span className="font-bold text-[#4C368C]">Customized Solutions:</span> We tailor AI solutions to meet your unique business needs.
                                </li>
                                <li>
                                    <span className="font-bold text-[#4C368C]">Cutting-Edge Technology:</span> We use the latest AI technologies to keep you ahead of the competition.
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Image */}

                    <div className="bg-[#39286A] text-white w-full lg:w-1/2 p-6 lg:p-8 rounded-lg shadow-md">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {/* Box 1 */}
                            <div className="group flex flex-col items-center justify-center bg-[#4C368C] rounded-lg p-5 shadow-md h-full min-h-[220px] transition duration-300 ease-in-out hover:bg-white">
                                <div className="bg-[#39286A] group-hover:bg-[#EBEBEB] rounded-full p-4 mb-4 transition duration-300 ease-in-out">
                                    <img
                                        src="./imgs/1.svg"
                                        alt="Big Data Analysis"
                                        className="w-14 h-14 object-contain group-hover:fill-[#39286A] transition duration-300 ease-in-out"
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
                            <div className="group flex flex-col items-center justify-center bg-[#4C368C] rounded-lg p-5 shadow-md h-full min-h-[220px] transition duration-300 ease-in-out hover:bg-white">
                                <div className="bg-[#39286A] group-hover:bg-[#EBEBEB] rounded-full p-4 mb-4 transition duration-300 ease-in-out">
                                    <img
                                        src="./imgs/2.svg"
                                        alt="Data Security & Governance"
                                        className="w-14 h-14 object-contain group-hover:fill-[#39286A] transition duration-300 ease-in-out"
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
                            <div className="group flex flex-col items-center justify-center bg-[#4C368C] rounded-lg p-5 shadow-md h-full min-h-[220px] transition duration-300 ease-in-out hover:bg-white">
                                <div className="bg-[#39286A] group-hover:bg-[#EBEBEB] rounded-full p-4 mb-4 transition duration-300 ease-in-out">
                                    <img
                                        src="./imgs/3.svg"
                                        alt="Machine Learning"
                                        className="w-14 h-14 object-contain group-hover:fill-[#39286A] transition duration-300 ease-in-out"
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
                            <div className="group flex flex-col items-center justify-center bg-[#4C368C] rounded-lg p-5 shadow-md h-full min-h-[220px] transition duration-300 ease-in-out hover:bg-white">
                                <div className="bg-[#39286A] group-hover:bg-[#EBEBEB] rounded-full p-4 mb-4 transition duration-300 ease-in-out">
                                    <img
                                        src="./imgs/4.svg"
                                        alt="Predictive Analysis"
                                        className="w-14 h-14 object-contain group-hover:fill-[#39286A] transition duration-300 ease-in-out"
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
                </section>

                {/* Carousel Section */}
                <section className="h-screen px-6 lg:px-12 bg-[#39286A] py-8">
                    <div className="flex flex-col items-center justify-start text-center">
                        <p className="inline-block px-6 py-2 rounded-full text-xs font-bold bg-[#F3F3F3] text-[#4C368C] mb-8">
                            Our Features
                        </p>
                        <h2 className="text-2xl lg:text-4xl font-bold text-white">
                            Explore Our Recent AI & Big Data Solutions Case Studies
                        </h2>
                    </div>
                    <div className="relative h-[90%] justify-center items-center flex flex-col">
                        {/* Carousel Container */}
                        <div className="flex items-center justify-center overflow-hidden h-full">
                            {divItes.map((item, index) => (
                                <div
                                    key={item.id}
                                    className={`absolute transition-all duration-500 ease-in-out flex flex-col items-start justify-between bg-[#4C368C] text-white text-left rounded-lg shadow-lg w-4/5 lg:w-[520px] h-[85%] p-6 pb-0.5 ${getPositionClass(index)
                                        }`}
                                    style={{
                                        transform: `translateX(${(index - currentIndex) * 100}%)`,
                                    }}
                                >
                                    <div className="flex flex-col">
                                        <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                                            {item.title}
                                        </h3>
                                        <p className="text-base lg:text-lg mb-4">
                                            {item.subText}
                                        </p>
                                        <div>
                                            <button
                                                className={`px-6 py-2 inline-block rounded-full font-semibold transition duration-300 bg-white text-[#4C368C] border border-transparent hover:bg-transparent hover:border-white hover:text-white cursor-pointer`}
                                                onClick={() => {
                                                    if (item.id === 2) {
                                                        window.location.href = "/verify";
                                                    }
                                                }}
                                            >
                                                {item.id === 2 ? "View More" : "Coming Soon"}
                                            </button>
                                        </div>
                                    </div>
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="w-full h-[80%] object-cover"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Controls */}
                        <div className="transform -translate-x-1/2 flex items-center justify-center space-x-4 ">
                            <button
                                onClick={() =>
                                    setCurrentIndex(
                                        (prevIndex) =>
                                            (prevIndex - 1 + divItes.length) % divItes.length
                                    )
                                }
                                className="flex items-center justify-center bg-[#7968A9] text-white w-10 h-10 rounded-full shadow-md hover:bg-gradient-to-r hover:from-[#7879F1] hover:via-[#45468B] hover:to-[#4C368C] transition duration-300"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 19l-7-7 7-7"
                                    />
                                </svg>
                            </button>
                            <button
                                onClick={() =>
                                    setCurrentIndex((prevIndex) => (prevIndex + 1) % divItes.length)
                                }
                                className="flex items-center justify-center bg-[#7968A9] text-white w-10 h-10 rounded-full shadow-md hover:bg-gradient-to-r hover:from-[#7879F1] hover:via-[#45468B] hover:to-[#4C368C] transition duration-300"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </section>
                {/* FAQ Section */}
                <section className="px-6 lg:px-12 py-12 bg-white">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl lg:text-4xl font-bold text-[#4C368C] mb-4">Frequently Asked Questions</h2>
                        <p className="text-gray-600 text-base lg:text-lg">
                            Find answers to the most common questions about our AI & Big Data Solutions.
                        </p>
                    </div>
                    <Accordion type="single" collapsible className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-sm font-medium text-[#4C368C] bg-gray-100 rounded-lg px-4 py-3 border-0 flex justify-between items-center max-w-[400px]">
                                What is Artificial Intelligence (AI)?
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 text-[#4C368C]"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-700 px-4 py-3 max-w-[400px] text-sm">
                                Artificial Intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think, learn, and make decisions like humans.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="text-sm font-medium text-[#4C368C] bg-gray-100 rounded-lg px-4 py-3 border-0 flex justify-between items-center max-w-[400px]">
                                How can AI & Big Data Solutions benefit my business?
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 text-[#4C368C]"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-700 px-4 py-3 max-w-[400px] text-sm">
                                AI and Big Data Solutions can help your business by automating processes, providing predictive insights, improving customer experiences, and optimizing decision-making.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger className="text-sm font-medium text-[#4C368C] bg-gray-100 rounded-lg px-4 py-3 border-0 flex justify-between items-center max-w-[400px]">
                                What is machine learning?
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 text-[#4C368C]"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-700 px-4 py-3 max-w-[400px] text-sm">
                                Machine learning is a subset of AI that enables systems to learn and improve from experience without being explicitly programmed.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger className="text-sm font-medium text-[#4C368C] bg-gray-100 rounded-lg px-4 py-3 border-0 flex justify-between items-center max-w-[400px]">
                                How does machine learning improve decision-making?
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 text-[#4C368C]"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-700 px-4 py-3 max-w-[400px] text-sm">
                                Machine learning improves decision-making by analyzing large datasets, identifying patterns, and providing predictive insights to guide strategic actions.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5">
                            <AccordionTrigger className="text-sm font-medium text-[#4C368C] bg-gray-100 rounded-lg px-4 py-3 border-0 flex justify-between items-center max-w-[400px]">
                                What is big data?
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 text-[#4C368C]"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-700 px-4 py-3 max-w-[400px] text-sm">
                                Big data refers to large and complex datasets that require advanced tools and techniques to store, process, and analyze for actionable insights.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-6">
                            <AccordionTrigger className="text-sm font-medium text-[#4C368C] bg-gray-100 rounded-lg px-4 py-3 border-0 flex justify-between items-center max-w-[400px]">
                                How can big data analysis help my business?
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 text-[#4C368C]"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-700 px-4 py-3 max-w-[400px] text-sm">
                                Big data analysis helps businesses uncover trends, identify opportunities, and make data-driven decisions to improve efficiency and profitability.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-7">
                            <AccordionTrigger className="text-sm font-medium text-[#4C368C] bg-gray-100 rounded-lg px-4 py-3 border-0 flex justify-between items-center max-w-[400px]">
                                What are the security implications of using AI and big data?
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 text-[#4C368C]"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-700 px-4 py-3 max-w-[400px] text-sm">
                                Using AI and big data requires robust security measures to protect sensitive information, ensure compliance, and mitigate risks of data breaches.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-8">
                            <AccordionTrigger className="text-sm font-medium text-[#4C368C] bg-gray-100 rounded-lg px-4 py-3 border-0 flex justify-between items-center max-w-[400px]">
                                How do I get started with AI, machine learning, and big data solutions?
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 text-[#4C368C]"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-700 px-4 py-3 max-w-[400px] text-sm">
                                To get started, consult with experts in AI, machine learning, and big data to assess your business needs, identify opportunities, and implement tailored solutions.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </section>
            </div>
        </div>
    );
};

export default MainPage;