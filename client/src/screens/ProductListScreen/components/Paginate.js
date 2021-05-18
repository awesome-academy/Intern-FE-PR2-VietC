import React from 'react';
import ReactPaginate from 'react-paginate';

const Paginate = ({ pageCount, handlePageClick }) => {
  return (
    <ReactPaginate
      previousLabel={<span className='fas fa-chevron-left'></span>}
      nextLabel={<span className='fas fa-chevron-right'></span>}
      breakLabel={'...'}
      breakClassName={'break-me'}
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={handlePageClick}
      containerClassName={'pagination'}
      activeClassName={'active'}
    />
  );
};

export default Paginate;
