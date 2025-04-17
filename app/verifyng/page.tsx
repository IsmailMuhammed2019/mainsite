
import Contact1 from "@/components/contact";
import Footer1 from "./components/footer1";
import Header1 from "./components/header1";
import Hero from "./components/hero";
import Oursolutions from "./components/oursolution/page";
import WhyApp from "./components/whyapp/page";
import OurFeatures from "./components/ourfeatures/page";
import Appdownloads from "./components/appdownload/page";
import AppCounter from "./components/appcounter/page";


const Verifyng = () => {
    return (
        <div className="flex flex-col min-h-screen font-sans">
            {/* Container */}
            <div className="container mx-auto px-4 lg:px-12">
                <Header1 />
                <Hero />
                <WhyApp />
                <Oursolutions />
                <OurFeatures />
                <Appdownloads />
                <AppCounter />
                <Contact1 />
                <Footer1 />
            </div>
        </div>
    )
}
export default Verifyng;