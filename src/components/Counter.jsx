import React, { useEffect, useState } from 'react'
import { countDownDateAndTime } from 'countdown-date-time';
import Flex from './Flex';

const Counter = () => {

    const conduct_date = '2027-03-25 16:54:00';
    const [countdow, setcountdow] = useState({})
   
    console.log(countdow)
    
    useEffect(() => {
        setInterval(() => {
          const countDown = countDownDateAndTime(conduct_date);
            setcountdow(countDown)
        }, 1000);
    },[])

    return (
       <>
       <Flex className='gap-9'>
         <div>
            <h5 className=' text-[12px] font-normal font-famailyP'>Days</h5>
            <h2 className=' text-[32px] font-bold font-inter text-black flex items-center justify-center gap-4.5'>{countdow.days} <span className=' text-[#e07575]'>:</span></h2>
        </div>
        <div>
            <h5 className=' text-[12px] font-normal font-famailyP'>Hours</h5>
            <h2 className=' text-[32px] font-bold font-inter text-black flex items-center justify-center gap-4.5'>{countdow.hours}<span className=' text-[#e07575]'>:</span></h2>
        </div>
        <div>
            <h5 className=' text-[12px] font-normal font-famailyP'>Minutes</h5>
            <h2 className=' text-[32px] font-bold font-inter text-black flex items-center justify-center gap-4.5'>{countdow.minutes} <span className=' text-[#e07575]'>:</span></h2>
        </div>
        <div>
            <h5 className=' text-[12px] font-normal font-famailyP'>Seconds</h5>
            <h2 className=' text-[32px] font-bold font-inter text-black'>{countdow.seconds} </h2>
        </div>
       
       </Flex>
       </>
    )
}

export default Counter