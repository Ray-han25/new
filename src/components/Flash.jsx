import React from 'react'
import Container from './Container'
import SectionHeder from './SectionHeder'
import Counter from './Counter'
import Flex from './Flex'
import Crad from './Crad'
import consol from '../assets/consol.png'

const Flash = () => {
  return (
    <div className=' mt-41'>
      <Container>
        <Flex className={`gap-21.75 mb-10`}>
          <div><SectionHeder title="Today’s" Bigtext='Flash Sales' /></div>
         <div className='mt-14.5'> <Counter /></div>
        </Flex>
        <Crad
        cradImg={consol} cradText='HAVIT HV-G92 Gamepad' price='120' disPrice='160' review='88'
        />
      </Container>
    </div>
  )
}

export default Flash