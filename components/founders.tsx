'use client'

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button"; // Assuming shadcn/ui Button is set up
import { cn } from "@/lib/utils"; // Utility function for conditional classNames
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";


const Founders = () => {
    return (
        <section className="px-6 lg:px-12 py-12 bg-white mt-8 flex justify-center items-center flex-col">
                    <p className="inline-block px-6 py-2 rounded-full text-xs font-bold bg-[#4C368C] text-[#F3F3F3] mb-8">
                        Our Founders
                    </p>
                    <div className="w-full max-w-6xl">
                        <Carousel className="w-full mx-auto">
                            <CarouselContent>
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <CarouselItem key={index}>
                                        <div className="p-4">
                                            <Card className="bg-gray-100">
                                                <CardContent className="flex flex-col lg:flex-row items-center justify-between p-6 gap-6 bg-gray-100">
                                                    {/* Left Content */}
                                                    <div className="flex-1 p-6">
                                                        <h2 className="text-3xl lg:text-5xl font-bold text-[#4C368C] mb-4">Meet The Founders</h2>
                                                        <p className="text-base lg:text-lg text-gray-700 mb-6">
                                                            Meet our experienced team members, dedicated to delivering innovative AI & Big Data solutions and driving your business success with their extensive knowledge, proven expertise, and a passion for excellence.
                                                        </p>
                                                        <div className="justify-center items-center mt-8 flex flex-col">
                                                            <h2 className="text-xl lg:text-xl font-bold text-[#4C368C]">Dr. Didi Hart</h2>
                                                            <p className="text-sm text-gray-500 mt-2">Founder & CEO</p>
                                                        </div>
                                                    </div>
                                                    {/* Right Content */}
                                                    <div className="flex-1">
                                                        <img
                                                            src="./imgs/didi.png"
                                                            alt="Founder"
                                                            className="w-full h-auto rounded-lg"
                                                        />
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            {/* Controls at the Bottom */}
                            <div className="flex justify-center items-center mt-4 space-x-4">
                                <CarouselPrevious className="bg-[#4C368C] text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#39286A] transition duration-300">
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
                                <CarouselNext className="bg-[#4C368C] text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#39286A] transition duration-300">
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
                    </div>
                </section>
    )
}
export default Founders;