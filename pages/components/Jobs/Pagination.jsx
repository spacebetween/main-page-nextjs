import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';


const PaginatedItems = ({ numberOfJobs, itemsPerPage, fetchDataOnPage, pageSelected, setPageSelected }) => {

  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [displayMessage, setDisplayMessage] = useState('')

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    setDisplayMessage(`${itemOffset} - ${endOffset > numberOfJobs ? numberOfJobs : endOffset} of ${numberOfJobs} jobs`)
    setPageCount(Math.ceil(numberOfJobs / itemsPerPage));
  }, [itemOffset, itemsPerPage, numberOfJobs]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
      setPageSelected(event.selected)
      const newOffset = (event.selected * itemsPerPage) % numberOfJobs;
      setItemOffset(newOffset);
      fetchDataOnPage(event.selected)
  };

  const handlePrevious = () => {
      const pageToSet = pageSelected -1
    setPageSelected(pageToSet)
    fetchDataOnPage(pageToSet)
  }

  const handleNext = () => {
    const pageToSet = pageSelected +1
    setPageSelected(pageToSet)
    fetchDataOnPage(pageToSet)
  }

  return (
    <div className='w-100 customPagination' >
        <div className="row">
                        <div className="col-12 mb-hf">
                            <p className="customPagination-jobs pos-relative">
                                <span className="customPagination-jobs_text px-hf">{displayMessage}</span>
                            </p>
                        </div>
                    </div>
    <div onClick={handlePrevious} className="float-left d-inline customPagination_element">
                        <div className={`linkColor pointer customPagination_element_link rounded d-inline-block ${pageSelected <= 0 && 'disabled'}`}>
                            <div className="d-inline-block d-lg-none">
                                <i className="fontSize-13 icomoon-arrow-left"></i>
                            </div>
                            <div className="d-none d-lg-flex customPagination_navBtn">
                                <i className="fontSize-13 icomoon-arrow-left"></i>
                                <strong>Previous</strong>
                            </div>
                        </div>
                    </div>
      <ReactPaginate
        breakLabel="..."
        onPageChange={handlePageClick}
        pageRangeDisplayed={6}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
        marginPagesDisplayed={2}
        className='customPagination_list d-inline-flex pl-0'
        activeClassName='active pageActive'
        pageClassName='customPagination_element_link noPadding rounded justifyCenter pointer'
        pageLinkClassName='pageLink'
        previousClassName='none'
        nextClassName='none'
        breakClassName='d-inline-block icon-lightGrey px-hf nomarker '
        hrefAllControls={true}
        forcePage={pageSelected}
      />
      <div onClick={handleNext} className="float-right d-inline customPagination_element">
                        <div className={`linkColor pointer customPagination_element_link rounded d-inline-block ${pageSelected+1 === pageCount && 'disabled'}`} rel="next">
                            <div className="d-inline-block d-lg-none">
                                <i className="fontSize-13 icomoon-arrow-right"></i>
                            </div>
                            <div className="d-none d-lg-flex customPagination_navBtn">
                                <strong>Next</strong>
                                <i className="fontSize-13 icomoon-arrow-right"></i>
                            </div>
                        </div>
                    </div>
    </div>
  );
}


export default PaginatedItems;