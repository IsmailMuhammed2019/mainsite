const OurFeatures = () => {
    return (
        <div className="bg-[#1E881A] py-12 px-6 lg:px-12">
            <div className="container mx-auto text-center space-y-8">
                {/* Title Section */}
                <div>
                    <p className="bg-[#28A428] text-white font-semibold px-4 py-2 text-sm rounded-full inline-block">
                        Our Features
                    </p>
                    <h2 className="text-3xl lg:text-5xl font-bold text-white mt-8">
                        Amazing features <br />we have to offer
                    </h2>
                </div>

                {/* Features Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                    {/* Feature 1 */}
                    <div className="bg-[#349B30] p-6 pb-1 rounded-lg shadow-md text-white">
                        <h3 className="text-2xl font-bold mb-4 text-left">
                            The Ultimate Identity <br />Verification Service
                        </h3>
                        <p className="text-sm mb-4 text-left">
                            Build digital trust into every customer interaction with our advanced Real Identity Platform. Powered by fast, fair, and accurate AI, it combines a wide range of global identity verifications and signals. Our user-friendly orchestration studio allows you to easily leverage these tools, delivering secure and seamless customer experiences.
                        </p>
                        <div className="flex justify-center mt-4">
                            <img
                                src="./imgs/sec.png"
                                alt="Connect"
                                className="w-full max-h-[400px] object-contain rounded-lg shadow-md"
                            />
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="flex flex-col gap-4 rounded-lg shadow-md text-white">
                        {/* Top Section */}
                        <div className="bg-[#349B30] p-4 rounded-lg flex flex-col flex-grow">
                            <h3 className="text-xl font-bold mb-2">Verify identities with ease.</h3>
                            <p className="text-sm mb-4">
                                Whether it’s personal verification or business authentication, we ensure accuracy and real-time results.
                            </p>
                            <div className="flex justify-center flex-grow">
                                <img
                                    src="./imgs/smally.png"
                                    alt="Connect"
                                    className="w-full max-h-[200px] object-contain rounded-lg shadow-md"
                                />
                            </div>
                        </div>

                        {/* Bottom Section */}
                        <div className="bg-[#349B30] p-4 rounded-lg flex flex-col flex-grow">
                            <h3 className="text-xl font-bold mb-2">High Resolution Image Capture</h3>
                            <p className="text-sm">
                                High-resolution image capture ensures that every detail is meticulously recorded, providing exceptional clarity and precision for applications that demand the highest level of accuracy.
                            </p>
                        </div>
                    </div>
                </div>

                {/* New Two Divs Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                    {/* Left Div */}
                    <div className="bg-[#349B30] p-6 rounded-lg shadow-md text-white flex flex-col">
                        <h3 className="text-xl font-bold mb-4">Photo Vs ID Verification</h3>
                        <p className="text-sm">
                            Capturing a live photo of the user and comparing it to the image on their government-issued ID. This process ensures authenticity, reduces the risk of identity fraud, and enhances security by confirming that the person presenting the ID is its rightful owner.
                        </p>
                    </div>

                    {/* Right Div */}
                    <div className="bg-[#349B30] p-6 rounded-lg shadow-md text-white flex flex-col">
                        <h3 className="text-xl font-bold mb-4">Fully Secured</h3>
                        <p className="text-sm">
                            Ensures that sensitive information remains protected from unauthorized access, safeguarding the integrity and confidentiality of your organization&apos;s assets.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurFeatures;