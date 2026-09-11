import React from 'react'
import Container from './Container'
import SectionHeder from './SectionHeder'
import __esModule from "react-slick";
import ProductsCrad from './ProductsCrad';
import catfoood from '../assets/Frame 604.png'
import Buttonall from './Buttonall';
import Flex from './Flex';

const Productsall = () => {
      const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
  };
  const Slider=__esModule.default||__esModule

  return (
    <>
<Container>
<div className=' mb-15 mt-20'><SectionHeder className={``} title='Our Products' Bigtext='Explore Our Products' /></div>
<Slider {...settings}>
    <div >
        <ProductsCrad className={`mb-15`} cradImg={catfoood}  cradText='Breed Dry Dog Food' price='100' review='35'/>
        <ProductsCrad className={`mb-15`} cradImg={catfoood}  cradText='Breed Dry Dog Food' price='100' review='35'/>
     
    </div>
    <div>
        <ProductsCrad className={`mb-15`} cradImg={catfoood}  cradText='Breed Dry Dog Food' price='100' review='35'/>
        <ProductsCrad className={`mb-15`} cradImg={catfoood}  cradText='Breed Dry Dog Food' price='100' review='35'/>
     
    </div>
    <div>
        <ProductsCrad className={`mb-15`} cradImg={catfoood}  cradText='Breed Dry Dog Food' price='100' review='35'/>
        <ProductsCrad className={`mb-15`} cradImg={catfoood}  cradText='Breed Dry Dog Food' price='100' review='35'/>
     
    </div>
    <div>
        <ProductsCrad className={`mb-15`} cradImg={catfoood}  cradText='Breed Dry Dog Food' price='100' review='35'/>
        <ProductsCrad className={`mb-15`} cradImg={catfoood}  cradText='Breed Dry Dog Food' price='100' review='35'/>
     
    </div>
    <div>
        <ProductsCrad className={`mb-15`} cradImg={catfoood}  cradText='Breed Dry Dog Food' price='100' review='35'/>
        <ProductsCrad className={`mb-15`} cradImg={catfoood}  cradText='Breed Dry Dog Food' price='100' review='35'/>
     
    </div>
    <div>
        <ProductsCrad className={`mb-15`} cradImg={catfoood}  cradText='Breed Dry Dog Food' price='100' review='35'/>
        <ProductsCrad className={`mb-15`} cradImg={catfoood}  cradText='Breed Dry Dog Food' price='100' review='35'/>
     
    </div>
    <div>
        <ProductsCrad className={`mb-15`} cradImg={catfoood}  cradText='Breed Dry Dog Food' price='100' review='35'/>
        <ProductsCrad className={`mb-15`} cradImg={catfoood}  cradText='Breed Dry Dog Food' price='100' review='35'/>
     
    </div>
    <div>
        <ProductsCrad className={`mb-15`} cradImg={catfoood}  cradText='Breed Dry Dog Food' price='100' review='35'/>
        <ProductsCrad className={`mb-15`} cradImg={catfoood}  cradText='Breed Dry Dog Food' price='100' review='35'/>
     
    </div>
    <div>
        <ProductsCrad className={`mb-15`} cradImg={catfoood}  cradText='Breed Dry Dog Food' price='100' review='35'/>
        <ProductsCrad className={`mb-15`} cradImg={catfoood}  cradText='Breed Dry Dog Food' price='100' review='35'/>
    </div>
</Slider>
<Flex className=' justify-center'>
    <Buttonall ButtonData={`View All Products`}/>
</Flex>
</Container>


    </>
  )
}

export default Productsall