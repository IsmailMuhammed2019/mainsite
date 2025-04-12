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
import Hero from "@/components/hero";
import Features from "@/components/features";
import WhyChoose from "@/components/whychoose";
import Carousel1 from "@/components/carousel1";
import FAQs from "@/components/faq";
import Newsletter from "@/components/newsletter";
import Contact1 from "@/components/contact"; // Assuming you have a Contact component
import Footer from "@/components/footer";

const MainPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    



    return (
        <div className="flex flex-col min-h-screen font-sans">
            {/* Container */}
            <div className="container mx-auto px-4 lg:px-12">
                {/* Header */}
                <Header />

                {/* Hero Section */}
                <Hero />

                {/* Features Section */}
                <Features />

                {/* Why Choose Us Section */}
                <WhyChoose />

                {/* Carousel Section */}
                <Carousel1 />

                {/* FAQ Section */}
                <FAQs />

                {/* Newsletter Section */}
                <Newsletter />

                {/* Contact Us Section */}
                <Contact1 />
            </div>
            <Footer />
        </div>
    );
};

export default MainPage;