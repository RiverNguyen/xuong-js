import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "font-awesome/css/font-awesome.min.css";
import { Link } from "react-router-dom";

const BannerImg = () => {
    const settings1 = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
    };
    return (
        <>
            <div className="slider-container slide-img">
                <Slider {...settings1}>
                    <div className="slide-item">
                        <img
                            className="w-100"
                            src="https://ananas.vn/wp-content/uploads/Web1920-1.jpeg"
                            alt=""
                        />
                    </div>
                    <div className="slide-item">
                        <img
                            className="w-100"
                            src="https://ananas.vn/wp-content/uploads/Hi-im-Mule_1920x1050-Desktop.jpg"
                            alt=""
                        />
                    </div>
                    <div className="slide-item">
                        <img
                            className="w-100"
                            src="https://ananas.vn/wp-content/uploads/Banner_Clothing.jpg"
                            alt=""
                        />
                    </div>
                </Slider>
            </div>
        </>
    );
};

export default BannerImg;
