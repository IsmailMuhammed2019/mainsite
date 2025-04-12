'use client';

import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin } from 'lucide-react'; // Importing icons from Lucide

const ContactUsForm = () => {
    return (
        <section className="bg-[#FCFAFF] py-12 px-6 lg:px-12">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Information */}
                <div className="flex flex-col space-y-6">
                    <h2 className="text-3xl lg:text-5xl font-bold text-[#4C368C]">Join Our Waitlist</h2>
                    <p className="text-sm lg:text-base text-gray-700">
                        Be the first to experience our cutting-edge AI solutions. Join our waitlist today and stay updated on our latest innovations and offerings.
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                            <Phone className="w-6 h-6 text-[#4C368C]" /> {/* Phone Icon */}
                            <p className="text-sm lg:text-base text-gray-700">+1 (123) 456-7890</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Mail className="w-6 h-6 text-[#4C368C]" /> {/* Email Icon */}
                            <p className="text-sm lg:text-base text-gray-700">contact@qsdynamics.com</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <MapPin className="w-6 h-6 text-[#4C368C]" /> {/* Location Icon */}
                            <p className="text-sm lg:text-base text-gray-700">123 Quantum Street, Tech City, USA</p>
                        </div>
                    </div>
                </div>

                {/* Join Waitlist Form */}
                <div className="bg-white p-8 rounded-lg shadow-md">
                    <form className="space-y-6">
                        {/* Name Field */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                Name
                            </label>
                            <Input
                                id="name"
                                type="text"
                                placeholder="Enter your name"
                                className="w-full"
                            />
                        </div>

                        {/* Email Field */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                Email
                            </label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                className="w-full"
                            />
                        </div>

                        {/* Phone Number Field */}
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                Phone Number
                            </label>
                            <Input
                                id="phone"
                                type="tel"
                                placeholder="Enter your phone number"
                                className="w-full"
                            />
                        </div>

                        {/* Company Name Field */}
                        <div>
                            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                                Company Name
                            </label>
                            <Input
                                id="company"
                                type="text"
                                placeholder="Enter your company name"
                                className="w-full"
                            />
                        </div>

                        {/* Industry Field */}
                        <div>
                            <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
                                Industry
                            </label>
                            <Input
                                id="industry"
                                type="text"
                                placeholder="Enter your industry"
                                className="w-full"
                            />
                        </div>

                        {/* Submit Button */}
                        <div>
                            <Button type="submit" className="w-full bg-[#4C368C] text-white hover:bg-[#39286A]">
                                Join Waitlist
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactUsForm;