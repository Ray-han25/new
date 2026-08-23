import React from 'react'
import Container from './Container'
import Flex from './Flex'

const Header = () => {
    return (
        <div className=' bg-black p-3.75'>

            <Container>
                <Flex  className={ 'justify-center'}>
                <div className=' w-[70%]  flex  justify-end'>
                    <p className='  text-white'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <a href="#">ShopNow</a></p>
                </div>

                <div className=' w-[30%] flex justify-end '>
                    <select className='  text-white '>
                        <option value="English">English</option>
                        <option value="Bangla">Bangla</option>
                        <option value="Arabic">Arabic</option>
                    </select>
                </div>
            //  </Flex>
            </Container>


        </div>
    )
}

export default Header