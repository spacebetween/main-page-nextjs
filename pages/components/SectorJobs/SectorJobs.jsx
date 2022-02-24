import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { useRouter } from "next/router";
import SortButtons from "../Jobs/SortButtons.jsx";
import JobsList from "../Jobs/List";
import PaginatedItems from "../Jobs/Pagination.jsx";


const SectorJobs = ({
  jobs,
  sectorsListWithCodes,
  numberOfJobs,
  numberOfPages,
  params,
  paginationMessage,
  sector
}) => {

    const router = useRouter()
    const scrollToJobList = useRef(null);
    const initialStateFilters = {
      sector: "",
    };
    const [selectedFilters, setSelectedFilters] = useState(initialStateFilters);
  
    useEffect(() => {
      if (params.sortBy) {
        setSortBy(params.sortBy);
      }
      if (params.jobIndustryIds) {
        setSelectedFilters({...selectedFilters, sector: params.jobIndustryIds});
      }
    }, [numberOfJobs]);
  
    const setSortBy = (name) => {
      findJobs({sort: name})
    };
  
  
    const fetchJobsOnPageChange = (page) => {
      findJobs({page: page})
      scrollToJobList.current.scrollIntoView({ behavior: "smooth" });
  }
  
    const findJobs = (argQuery = {}) => {
      let href = '?'
      if (argQuery.page) {
        href += `page=${argQuery.page+1}&` 
      }
      if (argQuery.sort || params.sortBy) {
        href += `sortBy=${argQuery.sort || params.sortBy}&` 
      }
      if (selectedFilters.sector && selectedFilters.sector !== 'All sectors' ) {
        href += `jobIndustryIds=${selectedFilters.sector}&`
      }
      if (sector) {
        href += `sector=${sector}&`
      }
      router.push(href === '?' ? '' : href)
    }
  
  return (
    <div  className="umb-grid bg-grey">
      <div className="grid section">
      <div className="row-container pb-4 pt-4 bg-white responsiveBackgroundImage useJobFont lozad" 
      data-background-image="/media/7035/hrgo-rec-relativejobbanner2021.jpg" 
      data-loaded="true" style={{backgroundImage: "url(" + "https://hrgo-image-cache.spacebetween.co.uk/media/7035/hrgo-rec-relativejobbanner2021.jpg?format=webp" + ")"}}>
            <div className="container">
                <div  className="row clearfix">
                    <div className="col-md-12">
                            <div  className="standout mt-1">
                                <div className="row">
                                    <div className="col-md-10 col-lg-6 standout-primary">
                                        <div className="standout_header p-2">
                                            <h1 ref={scrollToJobList} >{sector} Jobs</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>

                    </div>
                </div>
            </div>
        </div>
            <div className='row-conrainer useJobFont' >

          <div className="container">
        
        <div  className='row clearfix my-3'>
            <div id='sorting' className='col-md-3' >
            <button
                onClick={() => router.back()}
                className="btn btn-secondary float-right"
              >
                <i className="icomoon-arrow-left"></i>
                Back to search
              </button>
            <SortButtons setSortBy={setSortBy} sortBy={params.sortBy} />
            </div>
            <div id='jobList' className='col-md-9' >
            <JobsList jobs={jobs} sectorsListWithCodes={sectorsListWithCodes} />
            <PaginatedItems paginationMessage={paginationMessage} numberOfPages={numberOfPages} fetchJobsOnPageChange={fetchJobsOnPageChange} pageSelected={params.page-1} />
            </div>
       </div>
            </div>
       </div>
        </div>
      </div>
 
  );
};
export default SectorJobs;
