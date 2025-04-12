'use client';

import React from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'; // Assuming you have ShadCN's carousel component set up

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "John Doe",
            position: "CEO, TechCorp",
            message: "Quantum Space Dynamics has revolutionized our operations. Their AI solutions have significantly enhanced our efficiency and decision-making processes.",
            image: "./imgs/test1.jpeg",
        },
        {
            id: 2,
            name: "Jane Smith",
            position: "CTO, InnovateX",
            message: "The team at Quantum Space Dynamics is exceptional. Their cutting-edge technology and support have driven our growth to new heights.",
            image: "./imgs/test2.jpg",
        },
        {
            id: 3,
            name: "Michael Brown",
            position: "Manager, DataPro",
            message: "We&apos;ve seen incredible results since partnering with Quantum Space Dynamics. Their AI solutions are truly transformative.",
            image: "./imgs/test3.jpeg",
        },
        {
            id: 4,
            name: "Emily Davis",
            position: "Founder, AIStart",
            message: "Their expertise in AI and Big Data is unmatched. Quantum Space Dynamics has been a game-changer for our business.",
            image: "./imgs/test5.jpeg",
        },
        {
            id: 5,
            name: "Chris Wilson",
            position: "Director, FutureTech",
            message: "The support and innovation provided by Quantum Space Dynamics have exceeded our expectations. Highly recommended!",
            image: "./imgs/test4.jpeg",
        },
    ];

    return (
        <section className="bg-[#FCFAFF] py-12 px-6 lg:px-12">
            {/* Section Header */}
            <div className="text-center mb-12 flex flex-col items-center">
                <div>
                <p className="text-sm font-bold text-[#4CAF50] rounded-full px-8 py-2 bg-[#C3E4C5] mb-8">Testimonial</p>
                </div>
                <h2 className="text-3xl lg:text-5xl font-bold text-[#4C368C] mb-4">What Say Our Clients!</h2>
                <p className="text-sm lg:text-base text-gray-700">
                    Hear from our clients about their experiences and successes with our AI solutions. Discover how we&apos;ve transformed their operations, enhanced their <br/> efficiency, and driven their growth with our cutting-edge technology and dedicated support.
                </p>
            </div>

            {/* Carousel */}
            <Carousel className="w-full mx-auto">
                <CarouselContent className="flex justify-center">
                    {testimonials.map((testimonial) => (
                        <CarouselItem key={testimonial.id} className="flex justify-center">
                            <div
                                className="bg-gradient-to-b from-[#6145B0] via-[#341B7C] to-[#341B7C] lg-px-12 rounded-lg p-6 text-white shadow-md w-[350px] h-[200px] mx-4"
                            >
                                {/* Image and Name */}
                                <div className="flex items-center mb-4">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full object-cover mr-4"
                                    />
                                    <div>
                                        <h3 className="text-lg font-bold">{testimonial.name}</h3>
                                        <p className="text-sm italic">{testimonial.position}</p>
                                    </div>
                                </div>
                                {/* Message */}
                                <p className="text-sm">{testimonial.message}</p>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                {/* Controls at the Bottom */}
                <div className="flex justify-center items-center mt-4 space-x-4">
                    <CarouselPrevious className="bg-[#4C368C] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-[#39286A] transition duration-300">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </CarouselPrevious>
                    <CarouselNext className="bg-[#4C368C] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-[#39286A] transition duration-300">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </CarouselNext>
                </div>
            </Carousel>
        </section>
    );
};

export default Testimonials;