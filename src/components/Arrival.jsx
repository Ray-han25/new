import React from 'react'
import Container from './Container'
import Flex from './Flex'
import imgarri from '../assets/Frame 684.png'
import imgfr from "../assets/Frame 685.png"
import spekar from '../assets/Frame 686.png'
import parfum from '../assets/Frame 687.png'
import SectionHeder from './SectionHeder'

const Arrival = () => {
  return (
    <>
    <div className='mb-34'>
<Container>
    <SectionHeder title='Featured' Bigtext='New Arrival'/>
<Flex className={` mt-15 gap-7.5`}>
<div><img src={imgarri} alt="" /></div>
<div>
    <img src={imgfr} alt="" />

    <Flex className={`gap-7.5 mt-7.5`}>
        <img src={spekar} alt="" />
        <img src={parfum} alt="" />
    </Flex>
</div>

</Flex>

</Container>

    </div>
    
    </>
  )
}

export default Arrival