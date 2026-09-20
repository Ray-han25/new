import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Crad from '../components/Crad'
import kebood from '../assets/Frame 612.png'
import axios from 'axios';

const Shop = () => {
  const [Product, setProduct] = useState([])
  console.log(Product)
  async function allProduct() {
    await axios.get('https://dummyjson.com/products')
      .then((date) => {
        setProduct(date.data.products)
      })


  }
  useEffect(() => {
    allProduct()
  }, [])






  return (
    <>

      <div className='mt-20.25 mb-25.25'>
        <Container>
          <Flex className='justify-between'>
            <h2 className='text-[#262626] font-famailyP font-bold text-[20px]'>Shop by Category</h2>
            <p className='text-[16px] font-normal font-famailyP text-black '>Show : <span className='ml-2'>
              <select className='w-24.25 h-7.25 text-center border border-[#d9d9d9] rounded-[5px] appearance-none outline-0 '>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </span>
            </p>
          </Flex>
          <Flex className={` justify-between `}>
            <div className='mt-4 w-[20%]'>
              <ul className=' flex flex-col gap-y-2'>
                <li>Woman’s Fashion</li>
                <li>Men’s Fashion</li>
                <li>Electronics</li>
                <li>Electronics</li>
                <li>Home & Lifestyle</li>
                <li>Medicine</li>
                <li>Sports & Outdoor</li>
                <li>Baby’s & Toys</li>
                <li>Groceries & Pets</li>
                <li>Health & Beauty</li>
              </ul>
              <h2 className=' mt-10 text-[#262626] font-famailyP font-bold text-[20px]'>Shop by Color</h2>
              <Flex className={` items-center gap-4 pt-3.75`}>
                <div className=' w-2.75 h-2.75 bg-black rounded-full '></div>
                <h2 className=' font-famailyP font-normal text-[16px] text-[#767676]'>Color 1</h2>
              </Flex>
              <Flex className={` items-center gap-4 pt-3.75`}>
                <div className=' w-2.75 h-2.75 bg-red-500 rounded-full '></div>
                <h2 className=' font-famailyP font-normal text-[16px] text-[#767676]'>Color 2</h2>
              </Flex>
              <Flex className={` items-center gap-4 pt-3.75`}>
                <div className=' w-2.75 h-2.75 bg-green-500 rounded-full '></div>
                <h2 className=' font-famailyP font-normal text-[16px] text-[#767676]'>Color 3</h2>
              </Flex>
            </div>
            <Flex className={`flex-wrap gap-y-8 mt-8 w-[80%] justify-end`}>
              {
                Product.map((items) => {
                  console.log(items)
                  return <Crad cradImg={items.thumbnail} 
                  cradText={items.title}
                   price={ Math.round(items.price-items.discountPercentage*items.price/100)}
                    disPrice={ items.price}
                   review={items.reviews.length}
                   Red_discoun={ items.discountPercentage }
                   ster={items.rating}
                    />
                })
              }

            </Flex>
          </Flex>
        </Container>
      </div>
    </>
  )
}

export default Shop