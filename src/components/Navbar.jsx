import React, { useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import { IoSearchOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Logo from "../assets/Exclusive.png"
import { FaBarsStaggered } from "react-icons/fa6";


<AiOutlineShoppingCart />




const Navbar = () => {
    const [show,setshow]=useState(false)
    return (
        <>
                <nav className=' py-7 border-b border-black'>
            <Container>
                    <Flex className={'flex justify-between relative z-10'}>
                        <div><a href="#"><img src={Logo} alt="" /></a></div>
                       <div className={`${show ? 'opacity-100 translate-y-0 visible':'opacity-0 -translate-y-3 invisible'}  transition-all duration-300 ease-in-out absolute top-5.5 left-52.25 lg:static bg-black lg:bg-white text-white lg:text-black p-6 lg:p-0 rounded-[14px]  lg:flex justify-center gap-60.75`}>
                         <ul className=' flex-col lg:flex-row text-center flex gap-2 lg:gap-12'>
                            <li className=' relative'>
                                <a className='under' href="#">Home</a>
                                </li>
                            <li className=' relative'><a className='under' href="#">Contact</a></li>
                            <li className=' relative'><a  className='under' href="#">About</a></li>
                            <li className=' relative'><a className='under' href="#">Sign Up</a></li>
                        </ul>
                        <Flex className={' mt-4 lg:mt-0 gap-6 justify-center items-center'}>
                            <div className=' relative'><input className=' text-black bg-[#F5F5F5] py-1.75 pl-4  pr-13.25 outline-none' type="text"  placeholder='What are you looking for?' />
                               <div className=' absolute top-[20%] right-3'> <IoSearchOutline className=' text-black text-[24px]' /></div>
                            </div>
                            <div className='flex gap-4 items-center'>
                               <div> <IoMdHeartEmpty className='text-[32px] lg:text-black' /></div>
                              <div>  <AiOutlineShoppingCart className=' text-[32px] lg:text-black' /></div>
                            </div>
                        </Flex>
                       </div>
                       <FaBarsStaggered onClick={()=>setshow(!show)} className=' text-3xl  lg:hidden' />

                       
                    </Flex>
            </Container>
                </nav>


        </>
    )
}

export default Navbar




