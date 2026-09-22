import React, { useState } from 'react'
import ReactPaginat from 'react-paginate';
import Crad from './Crad';
      
const ReactPaginate =ReactPaginat.default || ReactPaginat
const Paginate = ({ itemsPerPage, Product = [] }) => {
  const items = Array.isArray(Product) ? Product : [];
console.log(items)


function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((items,inx) => (
         <Crad key={inx} cradImg={items.thumbnail}
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
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
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
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
            import React, { useState } from 'react';
      import ReactPaginate from 'react-paginate';
      import Crad from './Crad';
      
      const Paginate = ({ itemsPerPage = 10, Product = [] }) => {
        const items = Array.isArray(Product) ? Product : [];
        const [itemOffset, setItemOffset] = useState(0);
      
        const endOffset = itemOffset + itemsPerPage;
        const currentItems = items.slice(itemOffset, endOffset);
        const pageCount = Math.ceil(items.length / itemsPerPage);
      
        const handlePageClick = (event) => {
          setItemOffset(event.selected * itemsPerPage);
        };
      
        return (
          <>
            {currentItems.map((item, index) => (
              <Crad
                key={item.id ?? index}
                cradImg={item.thumbnail}
                cradText={item.title}
                price={Math.round(
                  item.price - (item.discountPercentage * item.price) / 100
                )}
                disPrice={item.price}
                review={item.reviews?.length ?? 0}
                Red_discoun={item.discountPercentage}
                ster={item.rating}
              />
            ))}
      
            {pageCount > 0 && (
              <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                previousLabel="< previous"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                renderOnZeroPageCount={null}
              />
            )}
          </>
        );
      };
      
      export default Paginate;
    </>
  )
}

export default Paginate