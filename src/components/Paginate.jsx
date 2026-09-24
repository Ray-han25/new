import React, { useState } from 'react'
import ReactPaginat from 'react-paginate';
import Crad from './Crad';
import { Flex } from 'antd';

const Paginate = ({itemsPerPage,Product }) => {
  const ReactPaginate= ReactPaginat.default || ReactPaginat;
  const items = Product;


function Items({ currentItems}) {
  
  return (
    <>
      {currentItems &&
        currentItems.map((items ,index) => (
     
         <Crad key={index} cradImg={items.thumbnail}
                    cradText={items.title}
                    price={Math.round(items.price - items.discountPercentage * items.price / 100)}
                    disPrice={items.price}
                    review={items.reviews.length}
                    Red_discoun={items.discountPercentage}
                    ster={items.rating}
                  />
          
        ))}
    </>
  );
} 
 const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    <>
    <Flex className={`flex-wrap gap-y-8 justify-end`}>
       <Items currentItems={currentItems} />
      </Flex>      
    
   
       <ReactPaginate
        breakLabel="..."
        nextLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel=""
        renderOnZeroPageCount={null}
        className='flex gap-4 ml-49 mt-10'
        pageClassName='py-0.2  w-fit px-6.5 bg-black text-[#fff]'
      />

    
    </>
  )
}

export default Paginate