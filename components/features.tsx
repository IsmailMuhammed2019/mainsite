const Features = () => {
    return (
        <>
        <section className="flex flex-col lg:flex-row items-stretch mt-12 lg:mb-12 gap-4 lg:p-12">
                    {/* Left Half with 4 Divs */}
                    <div className="w-full lg:w-1/2 flex justify-center h-full">
                        <img
                            src="./imgs/secong.png"
                            alt="Why Choose Us"
                            className="w-full h-full max-w-[750px] lg:max-w-[750px] object-cover"
                        />
                    </div>

                    {/* Right Half with Dynamic Content */}
                    <div className="flex flex-col justify-start items-start w-full lg:w-1/2 p-6 lg:p-12 lg:pt-1">
                        <p className="px-8 py-2 rounded-full text-xs font-bold bg-[#C5E0FF] text-[#4C368C] mb-4">About Us</p>
                        <h2 className="text-xl lg:text-6xl font-bold text-[#4C368C] mb-8 mt-6">
                            Our Excellent AI & Big Data Solutions for Your Business
                        </h2>
                        <p className="text-lg lg:text-lg text-gray-700 mt-8">
                            Our business enables you to streamline operations, enhance customer experiences, and drive innovative growth strategies by leveraging advanced analytics, automation, and machine learning technologies to deliver actionable insights and optimize performance across all departments.
                        </p>
                    </div>
                </section>
        </>
    )
}
export default Features
