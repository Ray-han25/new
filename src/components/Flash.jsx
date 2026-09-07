import React from 'react'
import Container from './Container'
import SectionHeder from './SectionHeder'
import Counter from './Counter'
import Flex from './Flex'
import Crad from './Crad'
import consol from '../assets/consol.png'
import __esModule from "react-slick";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Buttonall from './Buttonall'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className=" relative"
      onClick={onClick}
    > 
    
     <div className='absolute -top-104 right-36.75 w-12 h-12 rounded-full bg-[#f5f5f5] flex justify-center items-center'><FaArrowLeft className=' text-2xl ' /></div>
  

    
    
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
   <div  className=' text-black relative '
      onClick={onClick}>

   <div className='absolute -top-15.75 right-22 w-12 h-12 rounded-full bg-[#f5f5f5] flex justify-center items-center'> <FaArrowRight className=' text-black text-2xl ' /></div>

   </div>
  );
}

const Flash = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
     nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  }
  const Slider =__esModule.default||__esModule
 console.log(__esModule.default)
  return (
    <div className=' mt-41'>
      <Container>
        <Flex className={`gap-21.75 mb-10`}>
          <div><SectionHeder title="Today’s" Bigtext='Flash Sales' /></div>
          <div className='mt-14.5'> <Counter /></div>
        </Flex>
           <Slider {...settings}>



        <Crad
          cradImg={consol} cradText='HAVIT HV-G92 Gamepad' price='120' disPrice='160' review='88' Red_discoun='40'
        />
        <Crad
          cradImg={consol} cradText='HAVIT HV-G92 Gamepad' price='120' disPrice='160' review='88' Red_discoun='40'
        />
        <Crad
          cradImg={consol} cradText='HAVIT HV-G92 Gamepad' price='120' disPrice='160' review='88' Red_discoun='40'
        />
        <Crad
          cradImg={consol} cradText='HAVIT HV-G92 Gamepad' price='120' disPrice='160' review='88' Red_discoun='40'
        />
        <Crad
          cradImg={consol} cradText='HAVIT HV-G92 Gamepad' price='120' disPrice='160' review='88' Red_discoun='40'
        />
        <Crad
          cradImg={consol} cradText='HAVIT HV-G92 Gamepad' price='120' disPrice='160' review='88' Red_discoun='40'
        />
        <Crad
          cradImg={consol} cradText='HAVIT HV-G92 Gamepad' price='120' disPrice='160' review='88' Red_discoun='40'
        />
        <Crad
          cradImg={consol} cradText='HAVIT HV-G92 Gamepad' price='120' disPrice='160' review='88' Red_discoun='40'
        />
          </Slider> 
          <div className=' flex justify-center mt-9  border-b border-[#b3b3b3]'><Buttonall className={`mb-15`}  ButtonData={`View All Products`}/></div>
      </Container>
    </div>
  )
}

export default Flash