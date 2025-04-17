const Appdownloads = () => {
    return (
        <div className="bg-white py-12 px-6 lg:px-12 mt-12 rounded-lg shadow-md">
            <div className="bg-[#F8F7F6] p-8 rounded-lg grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Div */}
                <div className="flex flex-col space-y-6 justify-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#4C368C]">
                        Be one of the first users of the app
                    </h2>
                    <p className="text-sm lg:text-base text-gray-700">
                        We are offering you an opportunity to be one of the first people to experience the VerifyNG App. Click on “join our waitlist” below to reserve a spot.
                    </p>
                    <div className="flex space-x-4">
                        <img
                            src="./imgs/verify1.png"
                            alt="Android Store"
                            className="h-8 w-auto cursor-pointer" // Reduced size
                        />
                        <img
                            src="./imgs/verify2.png"
                            alt="Apple Store"
                            className="h-8 w-auto cursor-pointer" // Reduced size
                        />
                    </div>
                </div>

                {/* Right Div */}
                <div className="flex justify-center items-center">
                    <img
                        src="./imgs/188.png"
                        alt="App Preview"
                        className="w-full max-w-lg h-auto object-contain" // Increased size
                    />
                </div>
            </div>
        </div>
    );
};

export default Appdownloads;