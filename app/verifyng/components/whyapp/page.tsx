const WhyApp = () => {
    return (
        <div className="bg-[#FBFFFB] py-12 px-6 lg:px-12">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* First Div: Image */}
                <div>
                    <img
                        src="./imgs/imagess.png"
                        alt="About Us"
                        className="w-full h-auto rounded-lg "
                    />
                </div>

                {/* Second Div: Text Content */}
                <div className="flex flex-col space-y-6">
                    {/* About Us Label */}
                    <p className="bg-[#C5E0FF] text-sm mb-8 text-[#4261CF] font-semibold px-4 py-2 rounded-full inline-block w-fit">
                        About us
                    </p>

                    {/* Heading */}
                    <h2 className="text-3xl lg:text-5xl mt-8 font-bold text-[#4C368C]">
                        Why choose <span className="text-[#2F972B]">VerifyNG</span>
                    </h2>

                    {/* Paragraphs */}
                    <p className="text-sm lg:text-base text-gray-700">
                        Streamline your verification process with our solution, which generates verifications within seconds for multiple purposes, saving you time and hassle while ensuring security and convenience.
                    </p>
                    <p className="text-sm lg:text-base text-gray-700">
                        VerifyNG offers reliable, fast, and secure authentication for your personal and business needs.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WhyApp;