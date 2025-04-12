'use client'

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button"; // Assuming shadcn/ui Button is set up
import { cn } from "@/lib/utils"; // Utility function for conditional classNames
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import Header from "@/components/header"; // Assuming you have a Header component
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const FAQs = () => {
    return (
        <>
        <section className="px-6 lg:px-12 py-12 bg-white mt-8 flex justify-center items-center flex-col">
                    <div className="flex flex-col items-center justify-start text-center mb-8">
                        <p className="inline-block px-6 py-2 rounded-full text-xs font-bold bg-[#4C368C] text-[#F3F3F3] mb-8">
                            Popular FAQs
                        </p>
                        <h2 className="text-2xl lg:text-4xl font-bold text-[#4C368C] mb-4">Frequently Asked Questions</h2>
                    </div>
                    <Accordion type="single" collapsible className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-sm font-medium text-[#4C368C] cursor-pointer bg-gray-100 rounded-lg px-6 py-4 border-0 flex justify-between items-center max-w-[500px] min-h-[80px]">
                                What is Artificial Intelligence (AI)?
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-[#4C368C]"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-700 px-6 py-4 max-w-[500px] text-sm">
                                Artificial Intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think, learn, and make decisions like humans.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="text-sm font-medium cursor-pointer text-[#4C368C] bg-gray-100 rounded-lg px-6 py-4 border-0 flex justify-between items-center max-w-[500px] min-h-[80px]">
                                How can AI & Big Data Solutions benefit my business?
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-[#4C368C]"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-700 px-6 py-4 max-w-[500px] text-sm">
                                AI and Big Data Solutions can help your business by automating processes, providing predictive insights, improving customer experiences, and optimizing decision-making.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger className="text-sm cursor-pointer font-medium text-[#4C368C] bg-gray-100 rounded-lg px-6 py-4 border-0 flex justify-between items-center max-w-[500px] min-h-[80px]">
                                What is machine learning?
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-[#4C368C]"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-700 px-6 py-4 max-w-[500px] text-sm">
                                Machine learning is a subset of AI that enables systems to learn and improve from experience without being explicitly programmed.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger className="text-sm cursor-pointer font-medium text-[#4C368C] bg-gray-100 rounded-lg px-6 py-4 border-0 flex justify-between items-center max-w-[500px] min-h-[80px]">
                                How does machine learning improve decision-making?
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-[#4C368C]"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-700 px-6 py-4 max-w-[500px] text-sm">
                                Machine learning improves decision-making by analyzing large datasets, identifying patterns, and providing predictive insights to guide strategic actions.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5">
                            <AccordionTrigger className="text-sm cursor-pointer font-medium text-[#4C368C] bg-gray-100 rounded-lg px-6 py-4 border-0 flex justify-between items-center max-w-[500px] min-h-[80px]">
                                What is big data?
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-[#4C368C]"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-700 px-6 py-4 max-w-[500px] text-sm">
                                Big data refers to large and complex datasets that require advanced tools and techniques to store, process, and analyze for actionable insights.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-6">
                            <AccordionTrigger className="text-sm cursor-pointer font-medium text-[#4C368C] bg-gray-100 rounded-lg px-6 py-4 border-0 flex justify-between items-center max-w-[500px] min-h-[80px]">
                                How can big data analysis help my business?
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-[#4C368C]"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-700 px-6 py-4 max-w-[500px] text-sm">
                                Big data analysis helps businesses uncover trends, identify opportunities, and make data-driven decisions to improve efficiency and profitability.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-7">
                            <AccordionTrigger className="text-sm cursor-pointer font-medium text-[#4C368C] bg-gray-100 rounded-lg px-6 py-4 border-0 flex justify-between items-center max-w-[500px] min-h-[80px]">
                                What are the security implications of using AI and big data?
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-[#4C368C]"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-700 px-6 py-4 max-w-[500px] text-sm">
                                Using AI and big data requires robust security measures to protect sensitive information, ensure compliance, and mitigate risks of data breaches.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-8">
                            <AccordionTrigger className="text-sm cursor-pointer font-medium text-[#4C368C] bg-gray-100 rounded-lg px-6 py-4 border-0 flex justify-between items-center max-w-[500px] min-h-[80px]">
                                How do I get started with AI, machine learning, and big data solutions?
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-[#4C368C]"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-700 px-6 py-4 max-w-[500px] text-sm">
                                To get started, consult with experts in AI, machine learning, and big data to assess your business needs, identify opportunities, and implement tailored solutions.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </section>
        </>
    )
}
export default FAQs;