import React from 'react'
import Container from './Container'
import SectionHeder from './SectionHeder'
import Flex from './Flex'
import CatCompo from './CatCompo'
import __esModule from "react-slick";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className=" relative"
      onClick={onClick}
    > 
     <div className='absolute -top-60 right-36.75 w-12 h-12 rounded-full bg-[#f5f5f5] text-black flex justify-center items-center duration-300 hover:text-white  hover:bg-black'><FaArrowLeft className='  text-2xl ' /></div>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
   <div  className=' text-black relative '
      onClick={onClick}>

   <div className='absolute -top-22.75 right-22 w-12 h-12 rounded-full bg-[#f5f5f5] flex justify-center items-center duration-300 hover:text-white text-black hover:bg-black'> <FaArrowRight className='  text-2xl ' /></div>

   </div>
  );
}

const Category = () => {
    const Slider = __esModule.default || __esModule;
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 5,
        nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
    };
    return (
        <>
            <div className='mt-20'>
                <Container>
                    <div className='mb-15'> <SectionHeder title='Categories' Bigtext='Browse By Category' /></div>
                    <Slider  {...settings}>
                        <CatCompo />
                        <CatCompo />
                        <CatCompo />
                        <CatCompo />
                        <CatCompo />
                        <CatCompo />
                        <CatCompo />
                        <CatCompo />
                        <CatCompo />
                        <CatCompo />
                        <CatCompo />
                        <CatCompo />
                        <CatCompo />
                        <CatCompo />
                        <CatCompo />
                        <CatCompo />
                        <CatCompo />
                        <CatCompo />
                    </Slider>
                    <div className=' mt-17.75 mb-17.5  border-b border-[#b3b3b3] bg-[]'></div>
                </Container>

            </div>




        </>
    )
}

export default Category