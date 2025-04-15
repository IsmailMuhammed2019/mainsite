import Footer1 from "./components/footer1";
import Header1 from "./components/header1";
import Hero from "./components/hero";


const Verifyng = () => {
    return (
        <div className="flex flex-col min-h-screen font-sans">
            {/* Container */}
            <div className="container mx-auto px-4 lg:px-12">
                <Header1 />
                <Hero />
                <Footer1 />
            </div>
        </div>
    )
}
export default Verifyng;