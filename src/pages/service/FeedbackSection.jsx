import React from "react";
import bg from "../../assets/images/bg.jpg"
// import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function FeedbackSection() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000
    };
    return (
        <section id='service'
            className=""
        >


            {/* 🔥 Content (above overlay) */}
            <div className="flex flex-wrap justify-center items-center mt-10">
                {/* Heading */}
                <div>
                    <h1 className="text-black text-4xl md:text-5xl font-extrabold text-center mt-1.5">
                        Our Customers Feedback
                    </h1>
                    <p className="text-gray-500 text-base">
                        Two assure edward whence the was. Who worthy yet ten boy denote wonder.<br />
                        Weeks views her sight old tears sorry.
                    </p>
                </div>

                {/* Slider1 */}
                <div className="max-w-3xl mx-auto mt-20">
                    <Slider {...settings}>
                        <div>
                            <p className="text-gray-500 m-7 text-base mt-10">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet cursus volutpat.<br />
                                Aliquam sit amet ligula et justo tincidunt laoreet non vitae lorem. Aliquam porttitor tellus <br />
                                enim, eget commodo augue porta ut. Maecenas lobortis ligula vel tellus sagittis <br />
                                ullamcorperv vestibulum pellentesque cursutu. <br />
                                <span className="text-black mt-5">Richard Christian</span>
                            </p>
                        </div>
                    </Slider>

                </div>

            </div>
        </section >

    );
}