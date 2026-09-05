import React from 'react'
import Container from './Container'
import SectionHeder from './SectionHeder'
import Counter from './Counter'
import Flex from './Flex'
import Crad from './Crad'
import consol from '../assets/consol.png'
import __esModule from "react-slick";

const Flash = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  }
 console.log()
  return (
    <div className=' mt-41'>
      <Container>
        <Flex className={`gap-21.75 mb-10`}>
          <div><SectionHeder title="Today’s" Bigtext='Flash Sales' /></div>
          <div className='mt-14.5'> <Counter /></div>
        </Flex>
          {/* <Slider {...settings}>



        <Crad
          cradImg={consol} cradText='HAVIT HV-G92 Gamepad' price='120' disPrice='160' review='88' Red_discoun='40'
        />
          </Slider> */}
      </Container>
    </div>
  )
}

export default Flash