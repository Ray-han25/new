import React from 'react'
import Flex from './Flex'
import { FaRegStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
const Crad = ({ cradImg, cradText, price, disPrice, review,Red_discoun, }) => {
    return (
        <>
            <div className='w-67.5 group'>
                <div className=' relative w-fit overflow-hidden '>
                    <Flex className=' w-56.75 h-62.5 bg-[#f5f5f5]  items-center justify-center relative'>
                        <img className=' align-middle' src={cradImg} alt="" />
                        <div className=' absolute top-3 left-3 flex gap-28.25 '>
                            <div className=' py-1 pb-1 pl-3 pr-4 h-fit text-white bg-p rounded-sm'>-{Red_discoun}%</div>
                            <div>
                                <div className=' w-6 h-6 bg-white flex items-center justify-center text-black rounded-full'><CiHeart /></div>
                                <div className=' w-6 h-6 bg-white flex items-center justify-center text-black rounded-full mt-2'> <FaEye /></div>

                            </div>
                        </div>
                    </Flex>
                    <button className=' w-full h-10.5 bg-black text-white absolute left-0 -bottom-11 group-hover:bottom-0  duration-300 rounded-sm'> Add To Cart</button>
                </div>
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