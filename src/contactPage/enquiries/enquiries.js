import "./enquiries.scss";

const Enquiries = () => {
    return (
        <section id="enquiries">
            <div className="container">
                <div className="breadcrumbs-wrapper">
                    <div className="breadcrumb-nav">
                        <ul class="breadcrumb">
                            <li><a href="home">Home</a></li>
                            <li>Contact us</li>
                        </ul>
                    </div>
                </div>
                <div className="enq-wrapper">
                    <div className="text">
                        <h2 className="contact-us title">Contact us</h2>
                        <p className="desc">You can quickly get answers to common questions and queries. If you still can’t find what you’re looking for then you can contact us directly.</p>
                        <h3 className="enquiry-title">How can we help?</h3>
                    </div>
                    <div className="dropdown-menus">
                        <nav>
                            <label for="touch"><span>Samples</span></label>               
                            <input type="checkbox" id="touch"/> 

                            <div class="slide">
                                <div className="order-samples">
                                    <div className="sample-text">
                                        <h4>How do I order samples?</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                        Ut enim ad minim veniam.</p>
                                    </div>
                                </div>
                                <div className="request">
                                    <div className="request-text">
                                        <h4>Still have questions?</h4>
                                        <button className="submit-request"><a href="submit-request">Submit request</a></button>
                                    </div>
                                </div>
                            </div>
                        </nav>
                        <nav>
                            <label><span>Delivery</span></label>               
                        </nav>
                        <nav>
                            <label><span>Design changes</span></label>               
                        </nav>
                        <nav>
                            <label><span>Commercial</span></label>               
                        </nav>
                        <nav>
                            <label><span>Press & marketing</span></label>               
                        </nav>
                        <nav>
                            <label><span>Something else</span></label>               
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Enquiries;