'use client'

import React, { useState, useEffect } from "react";


const Carousel1 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

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
        <>
        <section className="h-screen px-6 lg:px-12 bg-[#39286A] py-8 overflow-hidden">
                    <div className="flex flex-col items-center justify-start text-center">
                        <p className="inline-block px-6 py-2 rounded-full text-xs font-bold bg-[#F3F3F3] text-[#4C368C] mb-8">
                            Our Features
                        </p>
                        <h2 className="text-2xl lg:text-4xl font-bold text-white">
                            Explore Our Recent AI & Big Data Solutions Case Studies
                        </h2>
                    </div>
                    <div className="relative h-[90%] justify-center items-center flex flex-col overflow-hidden">
                        {/* Carousel Container */}
                        <div className="flex items-center justify-center overflow-hidden h-full w-full">
                            {divItes.map((item, index) => (
                                <div
                                    key={item.id}
                                    className={`absolute transition-all duration-500 ease-in-out flex flex-col items-start justify-between bg-[#4C368C] text-white text-left rounded-lg shadow-lg w-4/5 lg:w-[520px] h-[85%] p-6 pb-0.5 ${getPositionClass(index)}`}
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
                                                        window.location.href = "/verifyng";
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
                        <div className="transform -translate-x-1/2 flex items-center justify-center space-x-4">
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
        </>
    )
}
export default Carousel1