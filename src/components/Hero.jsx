import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import heroImg from "../assets/hero.jpg";

import SliderModule from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = SliderModule.default || SliderModule;
const Hero = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
         appendDots: dots => (
      <div className=" relative">
        <ul className=" absolute -top-16.5 left-83.75" style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
         className=" w-3.5 h-3.5 rounded-full bg-gray-500"
      >
      </div>
    )
    };


    return (
        <>
            <Container>
                <Flex>
                    <div className=" w- border-r  border-black ">
                        <ul className=' flex flex-col gap-y-4 mt-8 mr-5.5 w-50'>
                            <li><a href="">Woman’s Fashion</a></li>
                            <li><a href="">Men’s Fashion</a></li>
                            <li><a href="">Electronics</a></li>
                            <li><a href="">Home & Lifestyle</a></li>
                            <li><a href="">Medicine</a></li>
                            <li><a href="">Sports & Outdoor</a></li>
                            <li><a href="">Baby’s & Toys</a></li>
                            <li><a href=""></a>Groceries &  </li>
                            <li><a href=""></a>Health & Beauty</li>
                        </ul>
                    </div>
                    <div className=' pt-10 pl-12.5 w-[80%]' >
                        <Slider {...settings}>
                            <div><img src={heroImg} alt="" /></div>
                            <div><img src={heroImg} alt="" /></div>
                            <div><img src={heroImg} alt="" /></div>
                            <div><img src={heroImg} alt="" /></div>
                            <div><img src={heroImg} alt="" /></div>
                            <div><img src={heroImg} alt="" /></div>
                        </Slider>
                    </div>
                </Flex>
            </Container>





        </>
    )
}

export default Hero

