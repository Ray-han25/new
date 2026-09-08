import React, { useEffect, useState } from 'react'
import { countDownDateAndTime } from 'countdown-date-time';  
import Flex from './Flex';

const CounterJbu = () => {
    const conduct_date = '2027-03-25 16:54:00';
    const [countdow, setcountdow] = useState({})
    useEffect(()=>{
        setInterval(() => {
            const countDown = countDownDateAndTime(conduct_date);
            setcountdow(countDown)
        }, 1000);

    },[])
  return (
    <>
  <Flex className={`gap-6`}>
        <Flex className=' w-15.5 h-15.5 rounded-full bg-white flex-col py-3.5 px-3.75 justify-center items-center '>
       
        <h6 className='text-black text-[16px] font-medium font-famailyP '>{countdow.days}</h6>
      <h6 className='text-black text-[11px] font-normal font-famailyP'>days</h6>
      
    </Flex>
    
     <Flex className=' w-15.5 h-15.5 rounded-full bg-white flex-col py-3.5 px-3.75 justify-center items-center '>
       
        <h6 className='text-black text-[16px] font-medium font-famailyP '>{countdow.hours}</h6>
      <h6 className='text-black text-[11px] font-normal font-famailyP'>hours</h6>
      
    </Flex>
    
     <Flex className=' w-15.5 h-15.5 rounded-full bg-white flex-col py-3.5 px-3.75 justify-center items-center '>
       
        <h6 className='text-black text-[16px] font-medium font-famailyP '>{countdow.minutes}</h6>
      <h6 className='text-black text-[11px] font-normal font-famailyP'>minutes</h6>
      
    </Flex>
    
     <Flex className=' w-15.5 h-15.5 rounded-full bg-white flex-col py-3.5 px-3.75 justify-center items-center '>
       
        <h6 className='text-black text-[16px] font-medium font-famailyP '>{countdow.seconds}</h6>
      <h6 className='text-black text-[11px] font-normal font-famailyP'>seconds</h6>
      
    </Flex>
    

  </Flex>
 
    
    </>
  )
}

export default CounterJbu