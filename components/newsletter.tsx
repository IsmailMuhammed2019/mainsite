const Newsletter = () => {
    return (
        <>
        <section className="px-6 lg:px-12 py-12 bg-[#1F1F1F] text-white mt-8 rounded-lg">
                    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                        {/* Left Side */}
                        <div className="w-full lg:w-1/3 flex justify-center">
                            <img
                                src="./imgs/newsletter.png"
                                alt="Newsletter"
                                className="w-full h-auto max-w-[300px] lg:max-w-[350px] rounded-lg"
                            />
                        </div>

                        {/* Right Side */}
                        <div className="w-full lg:w-2/3 flex flex-col items-start lg:px-8">
                            <p className="text-sm font-bold text-[#4C368C] mb-10 px-8 py-2 bg-white rounded-full">Newsletter</p>
                            <h2 className="text-2xl lg:text-4xl font-bold mb-8">Let's Subscribe the Newsletter</h2>
                            <div className="w-full bg-white rounded-full flex items-center px-4 py-2 mb-4">
                                <input
                                    type="email"
                                    placeholder="Enter Email"
                                    className="flex-grow text-sm text-[#4C368C] bg-transparent outline-none border-none pl-4 font-bold"
                                />
                                <img
                                    src="./imgs/send.svg"
                                    alt="Send Icon"
                                    className="h-6 w-6 cursor-pointer"
                                />
                            </div>
                            <p className="text-sm text-gray-300">
                                Subscribe to our newsletter for exclusive insights, expert tips, and industry news delivered straight to your inbox.
                            </p>
                        </div>
                    </div>
                </section></>
    )
}
export default Newsletter;