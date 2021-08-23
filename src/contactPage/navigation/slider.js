import React from "react";
import Slider from "react-slick";
import { Truck, Calender, Trust } from "../assets/images";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./nav.scss";

export default function SimpleSlider() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="slider-usp">
            <div className="slider-wrapper">
                <Slider {...settings}>
                <div className="content">
                    <p>
                        <img src={Trust} alt="trustpilot"/>
                    </p>
                </div>
                <div className="content">
                    <p>
                    <img className="del-truck icons" src={Truck} alt="Delivery truck"/>
                    Free shipping worldwide
                    </p>
                </div>  
                <div className="content">
                    <p>
                    <img className="calender icons" src={Calender} alt="Calender"/>
                    With you in 3-5 working days
                    </p>
                </div>
                </Slider>
            </div>
        </div>
    );
}