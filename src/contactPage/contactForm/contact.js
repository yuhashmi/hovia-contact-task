import "./contact.scss";

const Contact = () => {
    return (
        <section id="contact">
            <div className="container">
                <div className="form-wrapper">
                    <div className="text">
                        <h2 className="contact-team title">Contact our team</h2>
                        <p className="instructions">Please complete our contact form below and one of our 
                        team will be in touch shortly to assist you with your enquiry.</p>
                    </div>
                    <div className="form-content">
                        <form className="contact-form">
                            <div className="top-inputs">
                                <div className="name">
                                    <label for="fname">First name *</label>
                                    <input className="name-input" type="text" name="fname" placeholder="First Name" />
                                </div>
                                <div className="name">
                                    <label for="lname">Last name *</label>
                                    <input className="name-input" type="text" name="lname" placeholder="Last Name" />
                                </div>
                            </div>
                            <div className="email">
                                <label for="email">Email address *</label>
                                <input className="form-control" type="email" name="email" placeholder="Email address" />
                            </div>
                            <div className="reason">
                                <label for="reason">Reason for contact *</label>
                                <select className="form-control select-menu" name="reason" id="reason">
                                    <option value="" selected disabled hidden>Select the most relevant option</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                            </div>
                            <div className="message">
                                <label for="message">Message *</label>
                                <textarea className="form-control message-box" name="message" rows="4" placeholder="Type your message here" />
                            </div>
                            <div className="submit-btn">
                                <input className="submit" type="submit" value="Submit request" />
                            </div>
                        </form>
                        <div className="phone-contact">
                            <div className="phone-text">
                                <h4>Need to contact by phone?</h4>
                                <p>To contact us by phone, use the number below:</p>
                                <p>+44 (0)151 708 5400</p>
                                <p>Available hours: Mon - Fri: 9:00am - 5:00pm GMT</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;