import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';


const PaginatedItems = ({ numberOfJobs, itemsPerPage, jobs }) => {
  const [pageCount, setPageCount] = useState(0);

  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const [pageSelected, setPageSelected] = useState(0)
  const [displayMessage, setDisplayMessage] = useState('')

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    setDisplayMessage(`${itemOffset} - ${endOffset > numberOfJobs ? numberOfJobs : endOffset} of ${numberOfJobs} jobs`)
    setPageCount(Math.ceil(numberOfJobs / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
      console.log(event)
      setPageSelected(event.selected)
      const newOffset = (event.selected * itemsPerPage) % numberOfJobs;
    setItemOffset(newOffset);
  };

  const handlePrevious = () => {
    const newOffset = (pageSelected-1 * itemsPerPage) % jobs.length;

    setItemOffset(newOffset);
  }

  const handleNext = () => {
    const newOffset = (pageSelected+1 * itemsPerPage) % jobs.length;

    setItemOffset(newOffset);
  }

console.log(pageSelected)

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
                        <a href="" className={`customPagination_element_link rounded d-inline-block ${pageSelected <= 0 && 'disabled'}`} rel="prev">
                            <div className="d-inline-block d-lg-none">
                                <i className="fontSize-13 icomoon-arrow-left"></i>
                            </div>
                            <div className="d-none d-lg-flex customPagination_navBtn">
                                <i className="fontSize-13 icomoon-arrow-left"></i>
                                <strong>Previous</strong>
                            </div>
                        </a>
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
      />
      <div onClick={handleNext} className="float-right d-inline customPagination_element">
                        <a href=""  className={`customPagination_element_link rounded d-inline-block ${pageSelected+1 === pageCount && 'disabled'}`} rel="next">
                            <div className="d-inline-block d-lg-none">
                                <i className="fontSize-13 icomoon-arrow-right"></i>
                            </div>
                            <div className="d-none d-lg-flex customPagination_navBtn">
                                <strong>Next</strong>
                                <i className="fontSize-13 icomoon-arrow-right"></i>
                            </div>
                        </a>
                    </div>
    </div>
  );
}


export default PaginatedItems;