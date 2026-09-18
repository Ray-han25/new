import React from 'react'
import Container from './Container'
import Flex from './Flex'
import { TbTruckDelivery } from "react-icons/tb";
import Sarviscomp from './Sarviscomp';
import { RiCustomerService2Line } from "react-icons/ri";
import { AiFillSafetyCertificate } from "react-icons/ai";




const CUSTOMER = () => {
  return (
    <>
      <Container>
        <Flex className=' flex-wrap justify-around mb-10 lg:mb-35'>
          <Sarviscomp Logo={<TbTruckDelivery />} Texcust='FREE AND FAST DELIVERY' text2='Free delivery for all orders over $140' />
          <Sarviscomp Logo={<RiCustomerService2Line />
          } Texcust='24/7 CUSTOMER SERVICE' text2='Friendly 24/7 customer support' />
          <Sarviscomp Logo={<AiFillSafetyCertificate />
          } Texcust='MONEY BACK GUARANTEE' text2='We reurn money within 30 days' />

        </Flex>







      </Container>


    </>





  )
}

export default CUSTOMER