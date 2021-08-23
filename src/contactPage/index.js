import Nav from "./navigation/nav";
import Enquiries from "./enquiries/enquiries";
import Contact from "./contactForm/contact";
import Footer from "./footer/footer";
import "./index.scss";

const ContactPage = () => {
    return (
        <>
            <Nav />
            <Enquiries />
            <Contact />
            <Footer />
        </>
    )
}

export default ContactPage;