const Hero = () => {
    return (
        <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 lg:px-12">
            {/* Hero Text */}
            <div className="max-w-4xl">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#4C368C] mb-6 mt-2">
                    <span className="text-[#4CAF50]">VerifyNg</span>  One verification <br />system for all...
                </h1>
                <p className="text-lg text-center sm:text-center text-gray-700 font-bold mb-12">
                    You can verify your identity in seconds for banks, schools, licenses, and <br /> more, ensuring a quick and secure process for all your verification needs.
                </p>
            </div>

            {/* Input and Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 rounded-full border border-[#4CAF50] bg-white pl-2 mb-12">
                <input
                    type="email"
                    placeholder="Enter your email address"
                    className="px-4 py-2 flex-grow text-[#4CAF50] border-none outline-none"
                />
                <button className="bg-[#4CAF50] text-white border border-[#4CAF50] rounded-full px-6 py-2 cursor-pointer transition duration-300 ease-in-out hover:bg-transparent hover:text-[#4CAF50]">
                    Join our waitlist
                </button>
            </div>

            {/* Hero Image */}
            <div className="mt-8">
                <img
                    src="./imgs/hero.png"
                    alt="Hero"
                    className="w-full max-w-3xl h-auto"
                />
            </div>
        </section>
    );
};

export default Hero;