const Oursolutions = () => {
    return (
        <div className="bg-white py-12 px-6 lg:px-12">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* First Div: Text Content */}
                <div className="flex flex-col space-y-6">
                    {/* Small Heading */}
                    <p className="text-sm font-semibold text-[#4CAF50] bg-[#C3E4C5]">Our Solution</p>

                    {/* Main Heading */}
                    <h2 className="text-3xl lg:text-5xl font-bold text-[#4C368C]">
                        Protect your identity and secure your digital world
                    </h2>

                    {/* Paragraphs */}
                    <p className="text-sm lg:text-base text-gray-700">
                        Verify your identities with ease. Whether it’s personal verification or business authentication, we ensure accuracy and real-time results.
                    </p>
                    <p className="text-sm lg:text-base text-gray-700">
                        VerifyNG provides reliable identity verification services. Our platform ensures that your business transactions are secure and that you are dealing with verified identities.
                    </p>
                </div>

                {/* Second Div: Image */}
                <div className="bg-black">
                    <img
                        src="./imgs/connect.png"
                        alt="Connect"
                        className="w-full h-auto rounded-lg shadow-md"
                    />
                </div>
            </div>
        </div>
    );
};

export default Oursolutions;