const Contact1 = () => {
    return (
        <>
        <section className="px-6 lg:px-12 py-12 bg-white mt-8">
                    <div className="flex flex-col items-center text-center">
                        {/* Heading */}
                        <h2 className="text-3xl lg:text-5xl font-bold text-black mb-6">Wish to get in touch?</h2>
                        {/* Subtext */}
                        <p className="text-sm lg:text-base text-gray-600 mb-8">
                            Kindly reach out to us for any enquiries, partnership, or more.
                        </p>
                        {/* Button */}
                        <button className="bg-[#4CAF50] text-white px-6 py-3 rounded-full font-semibold cursor-pointer transition duration-300 hover:bg-green-600 mb-6">
                            Contact Us
                        </button>
                        {/* Image */}
                        <img
                            src="./imgs/contact.png"
                            alt="Contact Us"
                            className="w-full max-w-[300px] lg:max-w-full mt-8"
                        />
                    </div>
                </section>
        </>
    );
}
export default Contact1;