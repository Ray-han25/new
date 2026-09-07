import React from 'react'

const Buttonall = ({ButtonData,className}) => {
  return (
    <div>
        <div className={` rounded-sm py-4 px-12 bg-p w-fit text-[16px] text-[#FAFAFA] font-medium font-famailyP ${className}`}>
            {ButtonData}

        </div>
    </div>
  )
}

export default Buttonall