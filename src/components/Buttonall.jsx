import React from 'react'

const Buttonall = ({ButtonData,className}) => {
  return (
    <div>
        <div className={` rounded-sm py-3 lg:py-4 px-5 lg:px-12 bg-p w-fit  text-[12px] lg:text-[16px] text-[#FAFAFA] font-medium font-famailyP ${className}`}>
            {ButtonData}

        </div>
    </div>
  )
}

export default Buttonall