'use client';

import React from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const ContactUsForm = () => {
    return (
        <section className="bg-[#FCFAFF] py-12 px-6 lg:px-12">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Information */}
                <div className="flex flex-col space-y-6">
                    <h2 className="text-3xl lg:text-5xl font-bold text-[#4C368C]">Get in Touch</h2>
                    <p className="text-sm lg:text-base text-gray-700">
                        We'd love to hear from you! Whether you have a question about our services, need assistance, or just want to say hello, feel free to reach out.
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                            <img src="./imgs/phone.svg" alt="Phone" className="w-6 h-6" />
                            <p className="text-sm lg:text-base text-gray-700">+1 (123) 456-7890</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <img src="./imgs/email.svg" alt="Email" className="w-6 h-6" />
                            <p className="text-sm lg:text-base text-gray-700">contact@qsdynamics.com</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <img src="./imgs/location.svg" alt="Location" className="w-6 h-6" />
                            <p className="text-sm lg:text-base text-gray-700">123 Quantum Street, Tech City, USA</p>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
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

                        {/* Subject Field */}
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                Subject
                            </label>
                            <Input
                                id="subject"
                                type="text"
                                placeholder="Enter the subject"
                                className="w-full"
                            />
                        </div>

                        {/* Message Field */}
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                Message
                            </label>
                            <Textarea
                                id="message"
                                placeholder="Write your message here"
                                className="w-full"
                            />
                        </div>

                        {/* Submit Button */}
                        <div>
                            <Button type="submit" className="w-full bg-[#4C368C] text-white hover:bg-[#39286A]">
                                Send Message
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactUsForm;