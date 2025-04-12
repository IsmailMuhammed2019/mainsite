const Services1 = () => {
    return (
        <>
        <section className="flex flex-col lg:flex-row items-start mb-12 lg:items-start gap-8 lg:gap-12 px-6 lg:px-12 py-12">
                    {/* Left Content */}

                    <div className="bg-[#39286A] text-white w-full lg:w-1/2 p-6 lg:p-8 rounded-lg shadow-md">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {/* Box 1 */}
                            <div className="group flex flex-col items-center justify-center bg-[#4C368C] rounded-lg p-5 shadow-md h-full min-h-[220px] transition duration-300 ease-in-out hover:bg-white">
                                <div className="bg-[#39286A] group-hover:bg-[#EBEBEB] rounded-full p-4 mb-4 transition duration-300 ease-in-out">
                                    <img
                                        src="./imgs/1.svg"
                                        alt="Big Data Analysis"
                                        className="w-14 h-14 object-contain group-hover:fill-[#39286A] transition duration-300 ease-in-out"
                                    />
                                </div>
                                <h3 className="text-lg font-bold mb-2 text-center group-hover:text-[#4C368C] transition duration-300 ease-in-out">
                                    Big Data Analysis
                                </h3>
                                <p className="text-sm text-center group-hover:text-[#4C368C] transition duration-300 ease-in-out">
                                    Big data analysis empowers businesses with actionable insights and data-driven decision-making.
                                </p>
                            </div>

                            {/* Box 2 */}
                            <div className="group flex flex-col items-center justify-center bg-[#4C368C] rounded-lg p-5 shadow-md h-full min-h-[220px] transition duration-300 ease-in-out hover:bg-white">
                                <div className="bg-[#39286A] group-hover:bg-[#EBEBEB] rounded-full p-4 mb-4 transition duration-300 ease-in-out">
                                    <img
                                        src="./imgs/2.svg"
                                        alt="Data Security & Governance"
                                        className="w-14 h-14 object-contain group-hover:fill-[#39286A] transition duration-300 ease-in-out"
                                    />
                                </div>
                                <h3 className="text-lg font-bold mb-2 text-center group-hover:text-[#4C368C] transition duration-300 ease-in-out">
                                    Data Security & Governance
                                </h3>
                                <p className="text-sm text-center group-hover:text-[#4C368C] transition duration-300 ease-in-out">
                                    Protect your data with robust security measures and comprehensive governance, ensuring integrity, confidentiality, and compliance.
                                </p>
                            </div>

                            {/* Box 3 */}
                            <div className="group flex flex-col items-center justify-center bg-[#4C368C] rounded-lg p-5 shadow-md h-full min-h-[220px] transition duration-300 ease-in-out hover:bg-white">
                                <div className="bg-[#39286A] group-hover:bg-[#EBEBEB] rounded-full p-4 mb-4 transition duration-300 ease-in-out">
                                    <img
                                        src="./imgs/3.svg"
                                        alt="Machine Learning"
                                        className="w-14 h-14 object-contain group-hover:fill-[#39286A] transition duration-300 ease-in-out"
                                    />
                                </div>
                                <h3 className="text-lg font-bold mb-2 text-center group-hover:text-[#4C368C] transition duration-300 ease-in-out">
                                    Machine Learning
                                </h3>
                                <p className="text-sm text-center group-hover:text-[#4C368C] transition duration-300 ease-in-out">
                                    Machine learning enhances business processes through predictive analytics and automated solutions.
                                </p>
                            </div>

                            {/* Box 4 */}
                            <div className="group flex flex-col items-center justify-center bg-[#4C368C] rounded-lg p-5 shadow-md h-full min-h-[220px] transition duration-300 ease-in-out hover:bg-white">
                                <div className="bg-[#39286A] group-hover:bg-[#EBEBEB] rounded-full p-4 mb-4 transition duration-300 ease-in-out">
                                    <img
                                        src="./imgs/4.svg"
                                        alt="Predictive Analysis"
                                        className="w-14 h-14 object-contain group-hover:fill-[#39286A] transition duration-300 ease-in-out"
                                    />
                                </div>
                                <h3 className="text-lg font-bold mb-2 text-center group-hover:text-[#4C368C] transition duration-300 ease-in-out">
                                    Predictive Analysis
                                </h3>
                                <p className="text-sm text-center group-hover:text-[#4C368C] transition duration-300 ease-in-out">
                                    Harnessing data to anticipate future trends and optimize decision-making processes.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Right Image */}
                    <div className="flex flex-col justify-start items-start w-full lg:w-1/2 p-6 lg:p-12 lg:pt-1">
                        <p className="inline-block px-6 py-2 rounded-full text-xs font-bold bg-[#C5E0FF] text-[#4261CF] mb-8">
                            Services
                        </p>
                        <div className="flex flex-col justify-start item-start">

                            <h2 className="text-2xl lg:text-4xl font-bold text-[#4C368C] mb-8 mt-4">
                                We&apos;re Best in AI and Big Data Solution Industry with 10 Years of Experience
                            </h2>
                            <p className="text-sm lg:text-base text-gray-700 mb-6">
                                Leveraging a decade of expertise to deliver cutting-edge AI solutions that drive innovation and efficiency, we have consistently set industry standards. Our commitment to excellence and deep understanding of AI technologies enable us to provide tailored solutions that meet the unique needs of each client, ensuring sustained growth and competitive advantage.
                            </p>
                            <ul className="list-disc pl-6 text-sm lg:text-base text-gray-700 space-y-4">
                                <li>
                                    <span className="font-bold text-[#4C368C]">Proven Expertise:</span> With 10 years in the AI industry, we deliver reliable and innovative solutions.
                                </li>
                                <li>
                                    <span className="font-bold text-[#4C368C]">Customized Solutions:</span> We tailor AI solutions to meet your unique business needs.
                                </li>
                                <li>
                                    <span className="font-bold text-[#4C368C]">Cutting-Edge Technology:</span> We use the latest AI technologies to keep you ahead of the competition.
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
        </>
    )
};
export default Services1;