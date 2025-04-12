import Contactusform from "@/components/contactusform";
import Footer from "@/components/footer";
import Header from "@/components/header";

const Contactus = () => {
    return (
        <div className="flex flex-col min-h-screen font-sans">
            {/* Container */}
            <div className="container mx-auto px-4 lg:px-12">
            <Header />
            <Contactusform />
            </div>
            <Footer />
            {/* Footer */}
        </div>
    )
}
export default Contactus;