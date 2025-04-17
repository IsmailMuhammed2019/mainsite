'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'; // Assuming you're using shadcn's Card component

const AppCounter = () => {
    const [timeLeft, setTimeLeft] = useState({
        months: 0,
        days: 0,
        hours: 0,
        minutes: 0,
    });

    useEffect(() => {
        const targetDate = new Date('2025-12-31T23:59:59'); // Set your target launch date here
        const interval = setInterval(() => {
            const now = new Date();
            const difference = targetDate.getTime() - now.getTime();

            const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30));
            const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

            setTimeLeft({ months, days, hours, minutes });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-white py-12 px-6 lg:px-12 mt-12 rounded-lg shadow-md">
            <div className="bg-[#181818] p-8 rounded-lg grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Div */}
                <div className="flex flex-col space-y-6 text-white">
                    <h2 className="text-3xl lg:text-5xl font-bold">
                        Countdown to launch of <span className="text-[#4CAF50]">VerifyNG</span>
                    </h2>
                    <div>
                        <button className="bg-[#4CAF50] text-white px-6 py-3 rounded-full font-semibold transition duration-300 hover:bg-transparent hover:border-[#4CAF50] hover:text-[#4CAF50] border border-transparent">
                            Join Our Waitlist
                        </button>
                    </div>
                </div>

                {/* Right Div */}
                <div className="flex justify-center items-center text-white">
                    <div className="grid grid-cols-4 gap-4 text-center">
                        {/* Months */}
                        <Card className="bg-[#2C2C2C] text-white">
                            <CardHeader>
                                <CardTitle className="text-4xl font-bold">{timeLeft.months}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm">Months</p>
                            </CardContent>
                        </Card>

                        {/* Days */}
                        <Card className="bg-[#2C2C2C] text-white">
                            <CardHeader>
                                <CardTitle className="text-4xl font-bold">{timeLeft.days}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm">Days</p>
                            </CardContent>
                        </Card>

                        {/* Hours */}
                        <Card className="bg-[#2C2C2C] text-white">
                            <CardHeader>
                                <CardTitle className="text-4xl font-bold">{timeLeft.hours}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm">Hours</p>
                            </CardContent>
                        </Card>

                        {/* Minutes */}
                        <Card className="bg-[#2C2C2C] text-white">
                            <CardHeader>
                                <CardTitle className="text-4xl font-bold">{timeLeft.minutes}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm">Minutes</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppCounter;