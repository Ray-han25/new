import React, { useState } from "react";
import Container from "./Container";
import Flex from "./Flex";
import heroImg from "../assets/hero.jpg";

import SliderModule from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiCategoryAlt } from "react-icons/bi";


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
         className=" hidden lg:block w-3.5 h-3.5 rounded-full bg-gray-500"
      >
      </div>
    )
    };
    const [show ,setshow]=useState(false)
    console.log(show)


    return (
        <>
            <Container> 
                <Flex   className=" relative z-10 mt-2 w-fit gap-2 items-center justify-center lg:hidden">
                    <BiCategoryAlt onClick={()=>setshow(!show)}  className="  text-3xl text-black " /><span>Category</span></Flex>

                <Flex >
                    <div className={`${show? "opacity- translate-y-0 visible": "opacity-100 -translate-y-3 invisible"} lg:mt-3 lg:opacity-100 lg:visible absolute z-10top-0 left-0 lg:static p-3 bg-black text-white lg:text-black rounded-[14px] lg:rounded-none  lg:bg-white lg:p-0 lg:block lg:border-r  border-black  `}>
                        <ul className='    flex flex-col gap-y-1 lg:gap-y-4 lg:mt-8 lg:mr-5.5 w-37 lg:w-50'>
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
                    <div className=' relative pt-10 pl-27 lg:pl-12.5 w-[80%]' >
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

