import "./footer.scss";
import { flag0, flag1, flag2, flag3, flag4, flag5, flag6, flag7, flag8, flag9,
    secure1, secure2, secure3, secure4, secure5, secure6, secure7, secure8, secure9, 
    HoviaWhite, Insta, Pint, TrustPilot } from "../assets/images";

function Footer() {
    return (
        <section id="footer-features">
            <div className="container">
                <div className="main-footer">
                    <div className="top-content">
                        <div className="brand-logo">
                            <img className="hovia-logo" src={HoviaWhite} alt="hovia"/>
                        </div>
                        <div className="social-media">
                            <img className="insta" src={Insta} alt="Instagram"/>
                            <img className="pint" src={Pint} alt="Pinterest"/>
                        </div>
                    </div>
                    <hr />
                    <div className="footer-links row">
                        {/* Column1 */}
                        <div className="column-1 col">
                            <img className="trustpilot" src={TrustPilot} alt="trustpilot"/>
                            <div className="comm-box">
                                <div className="comm-text-area">
                                    <h3>Commercial Wallpaper</h3>
                                    <p>We enrich the spaces where people live, work and play, 
                                    by providing modern and industry-leading wallpaper designs.</p>
                                    <button className="learn-more-btn"><a href="learnmore">Learn more</a></button>
                                </div>
                            </div>
                        </div>
                        {/* Column2 */}
                        <div className="column-2 col">
                            <h3 className="footer-titles">Company info</h3>
                            <ul className="list">
                                <li><a href="contactus">Contact us</a></li>
                                <li><a href="about">About</a></li>
                                <li><a href="blog">Blog</a></li>
                            </ul>
                        </div>
                        {/* Column3 */}
                        <div className="column-3 col">
                            <h3 className="footer-titles">Product info</h3>
                            <ul className="list">
                                <li><a href="Howitworks">How it works</a></li>
                                <li><a href="Measurement&Installation">Measurement & Installation</a></li>
                                <li><a href="Papertypes">Paper types</a></li>
                                <li><a href="Delivery&returns">Delivery & returns</a></li>
                                <li><a href="faq">Frequently asked questions</a></li>
                                <li><a href="Ordersamples">Order samples</a></li>
                            </ul>
                        </div>
                        {/* Column4 */}
                        <div className="column-4 col">
                            <div className="shop-worldwide">
                                <h3 className="footer-titles">Shop worldwide</h3>
                                <div className="flag-box">
                                    <img src={flag0} alt="flag0"/>
                                    <img src={flag1} alt="flag1"/>
                                    <img src={flag2} alt="flag2"/>
                                    <img src={flag3} alt="flag3"/>
                                    <img src={flag4} alt="flag4"/>
                                    <img src={flag5} alt="flag5"/>
                                    <img src={flag6} alt="flag6"/>
                                    <img src={flag7} alt="flag7"/>
                                    <img src={flag8} alt="flag8"/>
                                    <img src={flag9} alt="flag9"/>
                                </div>
                            </div>
                            <div className="secure-shopping">
                                <h3 className="footer-titles">Secure shopping</h3>
                                    <div className="norton-space">
                                        <img className="norton" src={secure1} alt="secure1"/>
                                    </div>
                                <div className="security-box">
                                    <img src={secure2} alt="secure2"/>
                                    <img src={secure3} alt="secure3"/>
                                    <img src={secure4} alt="secure4"/>
                                    <img src={secure5} alt="secure5"/>
                                    <img src={secure6} alt="secure6"/>
                                    <img src={secure7} alt="secure7"/>
                                    <img src={secure8} alt="secure8"/>
                                    <img src={secure9} alt="secure9"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="policy-list">
                        <ul className="list-1">
                            <li><a href="Terms&Conditions">Terms & Conditions</a></li>
                            <li><a href="Privacypolicy">Privacy policy</a></li>
                            <li><a href="Returnspolicy">Returns policy</a></li>
                        </ul>
                    </div>

                    <div className="business-info row">
                        <p className="latest-date-footer col">
                        &copy; Hovia {new Date().getFullYear()}. 43 Bridgewater Street, Liverpool, Merseyside, England, L1 0AR, Registered in England Company Number: 07473316
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;