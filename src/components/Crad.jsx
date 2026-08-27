import React from 'react'
import Flex from './Flex'
import { FaRegStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
const Crad = ({ cradImg, cradText, price, disPrice, review ,}) => {
    return (
        <>
            <div>
                <Flex className=' w-56.75 h-62.5 bg-[#f5f5f5]  items-center justify-center relative'>
                    <img className=' align-middle' src={cradImg} alt="" />
                    <div className=' absolute top-3 left-3 flex gap-31.25 '>
                        <div className=' w-13.75 h-6.5 bg-p rounded-sm'></div>
                        <div>
                            <div className=' w-6 h-6 bg-white flex items-center justify-center text-black rounded-full'><CiHeart /></div>
                            <div className=' w-6 h-6 bg-white flex items-center justify-center text-black rounded-full mt-2'> <FaEye/></div>
                           
                        </div>
                    </div>
                </Flex>
                <h2 className=' font-medium font-famailyP text-black mt-4 mb-2'>{cradText}</h2>
                <div className=' flex gap-3 mb-2'>
                    <h2 className=' text-p'>${price}</h2>
                    <h2>{disPrice}</h2>
                </div>
                <Flex className='items-center gap-2'>

                    <Flex className='text-amber-300'>
                        <FaRegStar />
                        <FaRegStar />
                        <FaRegStar />
                        <FaRegStar />
                        <FaRegStar />
                    </Flex>
                    <h2 className=' text-gray-'>({review})</h2>
                </Flex>
            </div>

        </>
    )
}

export default Crad