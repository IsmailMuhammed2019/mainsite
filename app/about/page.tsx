import Features from "@/components/features";
import Footer from "@/components/footer";
import Founders from "@/components/founders";
import Header from "@/components/header";
import Newsletter from "@/components/newsletter";
import WhyChoose from "@/components/whychoose";

const About = () => {
    return (
        <div className="flex flex-col min-h-screen font-sans">
            {/* Container */}
            <div className="container mx-auto px-4 lg:px-12">
                <Header />
                <Features />
                <WhyChoose />
                <Founders />
                <Newsletter />
            </div>
            <Footer />
            </div>
    )
}
export default About;