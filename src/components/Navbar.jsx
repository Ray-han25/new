import React from 'react'
import Container from './Container'
import Flex from './Flex'
import { IoSearchOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Logo from "../assets/Exclusive.png"


<AiOutlineShoppingCart />




const Navbar = () => {
    return (
        <>
            <Container>
                <nav className=' py-7'>
                    <Flex className={'flex justify-between'}>

                        <div><img src={Logo} alt="" /></div>
                        <ul className=' flex gap-12'>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Sign Up</a></li>
                        </ul>
                        <Flex className={' gap-6 justify-center items-center'}>
                            <div className=' relative'><input className=' bg-[#F5F5F5] py-1.75 pl-4  pr-13.25 outline-none' type="text" placeholder='What are you looking for?' />
                               <div className=' absolute top-[20%] right-3'> <IoSearchOutline className=' text-black text-[24px]' /></div>
                            </div>
                            <div className='flex gap-4 items-center'>
                               <div> <IoMdHeartEmpty className='text-[32px] text-black' /></div>
                              <div>  <AiOutlineShoppingCart className=' text-[32px] text-black' /></div>
                            </div>

                        </Flex>

                    </Flex>
                </nav>
            </Container>


        </>
    )
}

export default Navbar