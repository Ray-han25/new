import React from 'react'
import { useLocation } from 'react-router'

const UpLocation = () => {
     let {pathname} = useLocation()
     const Location = pathname.split('/')[1]

  return (
    <>
<div className=' flex  mb-10 gap-2'>
    <h2> Home</h2>
    <h2> / </h2>
    <h2>{Location}</h2>



</div>



    </>
  )
}

export default UpLocation