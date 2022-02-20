import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './imgSlider.css';

function ImgSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    }

    return (
        <Slider dots={true} {...settings} className="container__imgSlider">
            
            <div className="wrap__Slider">
                <img className='image__Slider' src='/images/slider-badging.jpg' alt="" />
            </div>
            <div className="wrap__Slider">
                <img className='image__Slider' src='/images/slider-badag.jpg' alt="" />
            </div>
            
        </Slider>
    )
}

export default ImgSlider