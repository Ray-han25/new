import React from 'react'

const Sarviscomp = ( {Logo,Texcust,text2}) => {
  return (
    <div>
   <div>
          <div className='mb-6 m-auto flex justify-center items-center text-4xl text-white w-20  h-20 rounded-full bg-black border-10 border-[#c1c0c1]' >{Logo}</div>
          <h2 className=' text-black text-[20px] font-semibold font-famailyP leading-6'>{Texcust}</h2>
          <p className=' text-black text-[14px] font-famailyP font-normal '>{text2}</p>
        </div>
        



    </div>
  )
}

export default Sarviscomp