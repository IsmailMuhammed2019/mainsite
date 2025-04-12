import Footer from "@/components/footer";
import Header from "@/components/header";
import Newsletter from "@/components/newsletter";
import Services1 from "@/components/services1";
import Testimonials from "@/components/testimonials";

const Services = () => {
    return (
        <div className="flex flex-col min-h-screen font-sans">
            {/* Container */}
            <div className="container mx-auto px-4 lg:px-12">
            <Header />
            <Services1 />   
            <Testimonials />
            <Newsletter />
            </div>
            <Footer />
            {/* Footer */}
        </div>
        
    )
}
export default Services;