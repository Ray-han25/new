import React from 'react'
import SectionHeder from './SectionHeder'
import Container from './Container'
import Buttonall from './Buttonall'
import Flex from './Flex'
import ProductsCrad from './ProductsCrad'
import imgprodu from '../assets/672462_ZAH9D_5626_002_100_0000_Light-The-North-Face-x-Gucci-coat 1.png'

const Products = () => {
    return (
        <>
            <Container>
                <Flex className={`justify-between mb-15 `}>

                    <div><SectionHeder title='This Month' Bigtext='Best Selling Products' /></div>
                    <Buttonall className={`mt-10`} ButtonData='View All' />
                </Flex >
                <Flex className={`gap-7.5 mb-35`}>
                 <ProductsCrad cradImg={imgprodu} cradText={'The north coat'} price='260'  disPrice='360' review='65'/>
                 <ProductsCrad cradImg={imgprodu} cradText={'The north coat'} price='260'  disPrice='360' review='65'/>
                 <ProductsCrad cradImg={imgprodu} cradText={'The north coat'} price='260'  disPrice='360' review='65'/>
                 <ProductsCrad cradImg={imgprodu} cradText={'The north coat'} price='260'  disPrice='360' review='65'/>
                </Flex>
            </Container>

        </>
    )
}

export default Products