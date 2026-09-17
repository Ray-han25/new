import React from 'react'
import Container from './Container'
import jbu from '../assets/Frame 600.png'
import CounterJbu from './CounterJbu'


const Jbu = () => {
       return (
              <div><Container>
                     <div className=' relative'> <img src={jbu} alt="" />
                            <div className=' absolute top-19 lg:top-68 left-3 lg:left-14'>
                                   <CounterJbu />
                            </div>

                     </div>
              </Container>
              </div>
       )
}

export default Jbu