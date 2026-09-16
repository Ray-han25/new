import React from 'react'

const SectionHeder = ({title,Bigtext,className}) => {
  return (
    <>
<h5 className={` font-famailyP flex items-center gap-2 lg:gap-4 text-p${className}`}> <div className=' rounded-sm w-5 h-10 bg-p'></div>{title}</h5>
<h2 className=' w-40 lg:w-auto text-2xl font-semibold font-inter text-black mt-3 lg:mt-6'>{Bigtext}</h2>

    </>
  )
}

export default SectionHeder