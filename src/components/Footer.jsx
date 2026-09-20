import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Logo from "../assets/logo (2).png"
import { VscSend } from "react-icons/vsc";
import qr from '../assets/Qr Code.png'
import google from '../assets/Frame 718.png'
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";








const Footer = () => {
  return (
    <>
      <div className='pb-15 pt-20 bg-black'>
        <Container>
          <Flex className='flex-wrap justify-between'>
            <Flex className='flex-col gap-y-6'>
              <div className='w-29.5' ><img src={Logo} alt="Logo" /></div>
              <h2 className=' text-white text-[20px] font-normal font-famailyP'>Subscribe</h2>
              <p className=' text-white text-[16px] font-famailyP font-normal'>Get 10% off your first order</p>
              <Flex className=' pr-19 justify-center items-center w-54.25 h-12 rounded-sm border border-white '>
                <input className='pl-4 lg:pl-18 py-4 text-white border-none outline-none' type="text" placeholder='Enter your email' />
                <div className=' text-2xl text-white '><VscSend /></div></Flex>
            </Flex >
            <Flex className=' text-white flex-col gap-y-4'>
              <h2 className='mb-2.5 text-[20px] font-medium font-famailyP'>Support</h2>
              <p className='w-43.75 text-[16px] font-normal font-famailyP'>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
              <p className=' text-[16px] font-normal font-famailyP'>exclusive@gmail.com</p>
              <p className=' text-[16px] font-normal font-famailyP'>+88015-88888-9999</p>
            </Flex>
            <Flex className=' text-white flex-col gap-y-4'>
              <h2 className='mb-2.5 text-[20px] font-medium font-famailyP'>Account</h2>
              <p className='w-43.75 text-[16px] font-normal font-famailyP'>My Account</p>
              <p className=' text-[16px] font-normal font-famailyP'>Login / Register</p>
              <p className=' text-[16px] font-normal font-famailyP'>Cart</p>
              <p className=' text-[16px] font-normal font-famailyP'>Wishlist</p>
              <p className=' text-[16px] font-normal font-famailyP'>Shop</p>
            </Flex>
            <Flex className=' text-white flex-col gap-y-4'>
              <h2 className='mb-2.5 text-[20px] font-medium font-famailyP'>Quick Link</h2>
              <p className='w-43.75 text-[16px] font-normal font-famailyP'>Privacy Policy</p>
              <p className=' text-[16px] font-normal font-famailyP'>Terms Of Use</p>
              <p className=' text-[16px] font-normal font-famailyP'>FAQ</p>
              <p className=' text-[16px] font-normal font-famailyP'>Contact</p>
            </Flex>
            <div className=' text-white'>
              <h2 className='mb-2.5 text-[20px] font-medium font-famailyP'>Download App</h2>
              <p className=' text-[#a2a2a2] text-[12px] font-normal font-famailyP mb-2'>Save $3 with App New User Only</p>
              <Flex className='gap-1.5 mb-4'>
                <div><img src={qr} alt="" /></div>
                <div><img src={google} alt="" /></div>
              </Flex>
              <Flex className='gap-6'> 
                <div className=' w-10 h-10 rounded-full bg-black flex justify-center duration-1000 items-center group hover:bg-white '>
                  <FaFacebook className=' duration-1000 hover:text-[#0167fb] text-[30px] '/>

                </div>
                <div className=' w-10 h-10 rounded-full bg-black flex justify-center duration-1000 items-center group hover:bg-white '>
                  <FaSquareXTwitter className=' duration-1000 hover:text-black text-[30px] '/>

                </div>
                <div className=' w-10 h-10 rounded-full bg-black flex justify-center duration-1000 items-center group hover:bg-white '>
                  <FaInstagram className=' duration-1000 hover:text-[#e41d72] text-[30px] '/>

                </div>
                <div className=' w-10 h-10 rounded-full bg-black flex justify-center duration-1000 items-center group hover:bg-white '>
                  <FaLinkedin className=' duration-1000 hover:text-[#0167fb] text-[30px] '/>
                </div>

              </Flex>

            </div>

          </Flex>
        </Container>
      </div>

    </>
  )
}

export default Footer