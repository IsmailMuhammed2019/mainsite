import Link from 'next/link'; // Import Link from next/link

const Hero = () => {
    return (
        <>
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
                        <Link href="/contact">
                            <button className="bg-white text-[#4C368C] border border-[#4C368C] hover:border-gray-500 hover:text-white hover:bg-transparent cursor-pointer rounded-full px-6 py-2 font-semibold mb-10">
                                Contact Us
                            </button>
                        </Link>
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
        </>
    );
};

export default Hero;