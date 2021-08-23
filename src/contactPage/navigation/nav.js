import "./nav.scss";
import { dropDownArrow, UKflag, RightArrow, HoviaBlack, Search, Wishlist, Photo, Truck, Calender, Trust } from "../assets/images";
import { Twirl as Hamburger } from 'hamburger-react';
import SimpleSlider from "./slider";

const Nav = () => {
    return (
        <section id="nav">
            <div className="nav-bar">
                {/* Top nav */}
                <div className="top-nav">
                    <div className="top-nav-wrapper">
                            {/* Links on the left of header */}
                        <nav>
                            <div className="burger-menu">
                                <Hamburger size={20} />
                            </div>
                            <div className="navigation-links-1">
                                <ul className="links-list">
                                    <li className="language-select">
                                        <img className="flag" src={UKflag} alt="UK flag" />
                                        <span className="flag"></span>
                                        <span className="lang-code">EN </span>
                                        | 
                                        <span className="currency-code"> GBP</span>
                                        <img className="right-arrow" src={RightArrow} alt="arrow pointing right" />
                                    </li>
                                    <li className="commercial link">
                                        <span className="commercial-text">
                                            Commercial
                                        </span>
                                    </li>
                                    <li className="contact link">
                                        <span className="contact-text">
                                            Contact
                                            <img className="drop-down-icon" src={dropDownArrow} alt="arrow pointing down"/>
                                        </span>
                                    </li>
                                    <li className="info link">
                                        <span className="info-text">
                                            Help & Info
                                            <img className="drop-down-icon" src={dropDownArrow} alt="arrow pointing down"/>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                            {/* Section end */}

                        {/* Hovia logo on header */}
                        <div className="top-logo">
                            <img className="hovia-logo" src={HoviaBlack} alt="logo"/>
                        </div>
                        {/* Section end */}

                        {/* Search bar on header */}
                        <form className="search-bar">
                            <input className="search-input" type="text" placeholder="Search designs"/>
                            <span className="search-icon"><img src={Search} alt="search-icon"/></span>
                            <img className="wishlist-icon" src={Wishlist} alt="wishlist"/>
                        </form>
                        
                        <div className="sml-search-wish">
                            <div className="search-icon-sml">
                                <span className="search-icon"><img src={Search} alt="search-icon"/></span>
                            </div>
                            <div className="wish-list-sml">
                                <img className="wishlist-icon" src={Wishlist} alt="wishlist"/>
                            </div>
                        </div>
                        {/* Section end */}

                    </div>
                </div>
                {/* Top Nav ends */}

                {/* Sub Nav */}
                <div className="sub-nav">
                    <div className="sub-nav-wrapper">
                    {/* Sub Nav links */}
                        <nav className="navigation-links-2">
                            <ul className="links-list">
                                <li className="category link">
                                    <span className="text">
                                        Shop by category
                                        <img className="drop-down-icon" src={dropDownArrow} alt="arrow pointing down"/>
                                    </span>
                                </li>
                                <li className="children link">
                                    <span className="text">
                                        Shop by children's
                                        <img className="drop-down-icon" src={dropDownArrow} alt="arrow pointing down"/>
                                    </span>
                                </li>
                                <li className="colour link">
                                    <span className="text">
                                        Shop by colour
                                        <img className="drop-down-icon" src={dropDownArrow} alt="arrow pointing down"/>
                                    </span>
                                </li>
                                <li className="style link">
                                    <span className="text">
                                        Shop by style
                                        <img className="drop-down-icon" src={dropDownArrow} alt="arrow pointing down"/>
                                    </span>
                                </li>
                                <li className="room link">
                                    <span className="text">
                                        Shop by room
                                        <img className="drop-down-icon" src={dropDownArrow} alt="arrow pointing down"/>
                                    </span>
                                </li>
                                {/* Customer photos button */}
                                <div className="gallery-btn">
                                    <button className="customer-photos-btn">
                                    Customer photos
                                    <span className="photos-icon"><img src={Photo} alt="photos-icon"/></span>
                                    </button>
                                </div>
                                {/* Section end */}
                            </ul>
                        </nav>
                    </div>
                </div>
                {/* Sub Nav end */}

                {/* usp bar */}
                <div className="usp-bar">
                    <div className="usp-wrapper">
                        {/* usp bar text */}
                        <ul className="text-list">
                            <li className="trustpilot">
                                <img src={Trust} alt="trustpilot"/>
                            </li>
                            <li className="shipping-text text">
                                <img className="del-truck icons" src={Truck} alt="Delivery truck"/>
                                Free shipping worldwide
                            </li>
                            <li className="estimated-time-text text">
                                <img className="calender icons" src={Calender} alt="Calender"/>
                                With you in 3-5 working days
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="slider">
                    <SimpleSlider />
                </div>
                {/* usp bar end */}
            </div>
        </section>
    );
};

export default Nav;