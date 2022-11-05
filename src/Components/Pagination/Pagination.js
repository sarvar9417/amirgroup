import React from "react";
import ReactPaginate from "react-paginate";
import { next, prev } from "../../Iconly/icons";

const Pagination = ({ countPage, totalDatas, setCurrentPage, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalDatas / countPage); i++) {
    pageNumbers.push(i);
  }

  const pageHandle = (data) => {
    setCurrentPage(data.selected);
  };

  return (
    <nav className='mt-[1.875rem] w-full'>
      <ReactPaginate
        forcePage={currentPage}
        pageCount={pageNumbers.length}
        marginPagesDisplayed={1}
        pageRangeDisplayed={4}
        onPageChange={pageHandle}
        nextLabel={next}
        previousLabel={prev}
        breakLabel={"..."}
        containerClassName='flex w-full justify-center text-base relative'
        pageClassName='w-[30px] h-[30px] flex justify-center items-center'
        pageLinkClassName='w-[30px] h-[30px] flex justify-center items-center'
        previousClassName='w-[30px] h-[30px] flex justify-center items-center absolute left-0'
        previousLinkClassName='float-left'
        nextClassName='w-[30px] h-[30px] flex justify-center items-center'
        nextLinkClassName='absolute right-0'
        breakClassName={"mr-[15px]"}
        breakLinkClassName=''
        activeClassName='bg-green text-white rounded-lg flex items-center justify-center'
        activeLinkClassName=''
        disabledLinkClassName=''
      />
    </nav>
  );
};
export default Pagination;
