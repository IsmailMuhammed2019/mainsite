const Footer = () => {
    return (
        <>
            <footer className="bg-[#39286A] text-white py-12 mt-8">
                <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-12 gap-8">
                    {/* First Div */}
                    <div className="md:col-span-4 flex flex-col items-start">
                        <div className="flex items-center space-x-3 mb-12">
                            <img
                                src="./imgs/qsd.png"
                                alt="Quantum Space Dynamics Logo"
                                className="h-8 w-8"
                            />
                            <div>
                                <h1 className="text-lg font-semibold">Quantum Space Dynamics</h1>
                                <p className="text-sm italic">a solution for all...</p>
                            </div>
                        </div>
                        <div className="flex space-x-4">
                            <img
                                src="./imgs/app.png"
                                alt="App Store"
                                className="h-6 w-auto cursor-pointer"
                            />
                            <img
                                src="./imgs/android.png"
                                alt="Google Play"
                                className="h-6 w-auto cursor-pointer"
                            />
                        </div>
                    </div>

                    {/* Second Div */}
                    <div className="md:col-span-2 flex flex-col space-y-2">
                        <h3 className="text-lg font-semibold mb-4">Links</h3>
                        <a href="#about" className="text-sm hover:underline">About Us</a>
                        <a href="#app" className="text-sm hover:underline">Our App</a>
                        <a href="#privacy" className="text-sm hover:underline">Privacy Policy</a>
                    </div>

                    {/* Third Div */}
                    <div className="md:col-span-2 flex flex-col space-y-2">
                        <h3 className="text-lg font-semibold mb-4">Support</h3>
                        <a href="#faq" className="text-sm hover:underline">Help/FAQ</a>
                        <a href="#payment" className="text-sm hover:underline">Payment</a>
                        <a href="#terms" className="text-sm hover:underline">Terms of Use</a>
                    </div>

                    {/* Fourth Div */}
                    <div className="md:col-span-2 flex flex-col space-y-2">
                        <h3 className="text-lg font-semibold mb-4">Explore</h3>
                        <a href="#features" className="text-sm hover:underline">Features</a>
                        <a href="#partnerships" className="text-sm hover:underline">Partnerships</a>
                    </div>

                    {/* Fifth Div */}
                    <div className="md:col-span-2 flex flex-col space-y-4">
                        <h3 className="text-lg font-semibold">Stay In Touch</h3>
                        <div className="flex space-x-4">
                            <img
                                src="./imgs/facebook.svg"
                                alt="Facebook"
                                className="h-6 w-6 cursor-pointer"
                            />
                            <img
                                src="./imgs/twitter.svg"
                                alt="Twitter"
                                className="h-6 w-6 cursor-pointer"
                            />
                            <img
                                src="./imgs/linkedin.svg"
                                alt="LinkedIn"
                                className="h-6 w-6 cursor-pointer"
                            />
                        </div>
                        <div>
                            <select
                                className="bg-[#39286A] text-white border border-white rounded mt-8 px-2 py-1 text-sm"
                            >
                                <option value="en">EN</option>
                                <option value="fr">FR</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom Text */}
                <div className="mt-8 border-t border-gray-600 pt-4 text-center text-sm text-gray-400">
                    © Quantum Space Dynamics All Rights Reserved. Designed By QSD Solutions
                </div>
            </footer>
        </>
    );
};

export default Footer;