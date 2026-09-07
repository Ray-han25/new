import React from 'react'
import Container from './Container'
import SectionHeder from './SectionHeder'
import Flex from './Flex'
import CatCompo from './CatCompo'
import __esModule from "react-slick";

const Category = () => {
    const Slider = __esModule.default || __esModule
    console.log(__esModule)
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 5,
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
                    <div className=' mt-17.75 mb-10  border-b border-[#b3b3b3] bg-[]'></div>




                </Container>

            </div>




        </>
    )
}

export default Category