import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import Dropdowns from "./DropdownFilters.jsx";
import Inputs from "./Inputs";
import JobsList from "./List";
import SelectedFilters from "./SelectedFilters";
import SortButtons from "./SortButtons";
import axios from "axios";
import { Fragment } from "react/cjs/react.production.min";
import PaginatedItems from "./Pagination.jsx";
import { useRouter } from 'next/router'
import { checkType } from "../helperFunctions.js";


const JobPage = ({ jobs, sectorsListWithCodes, numberOfJobs, params, locationCity }) => {
  const router = useRouter()

  const [pageSelected, setPageSelected] = useState(0)
  const [sortBy, setSorting] = useState("");
  const scrollToJobList = useRef(null);
  const scrollToFilters = useRef(null);
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState(null);

  //FILTERS
  const initialStateFilters = {
    type: "",
    distance: "",
    sector: "",
  };
  const [selectedFilters, setSelectedFilters] = useState(initialStateFilters);

  //DROPDOWNS
  const initialStateDropdowns = {
    type: false,
    distance: false,
    sector: false,
  };
  const [dropdowns, showDropdown] = useState(initialStateDropdowns);

  // SEARCH on/off
  const [jobListFiltered, setJobListFiltered] = useState(false);


  useEffect(() => {
    if (params.sortBy) {
      setSortBy(params.sortBy);
    }
    if (params.page) {
      setPageSelected(params.page - 1);
    }
    if (params.jobTypeIds) {
      setSelectedFilters({...selectedFilters, type: checkType(params.jobTypeIds)});
    }
    if (params.distance) {
      setJobListFiltered(true);
      setSelectedFilters({...selectedFilters, distance: params.distance });
    }
    if (params.jobIndustryIds) {
      setSelectedFilters({...selectedFilters, sector: params.jobIndustryIds});
    }
    if (locationCity) {
      setLocation({
        place: locationCity,
        lat: params.latitude,
        long: params.longitude,
      });
    }
    if (params.search) {
      setKeyword(
        params.search
      );
    }

    scrollToJobList.current.scrollIntoView({ behavior: "smooth" });
  }, [numberOfJobs]);


  const handleKeyword = (event) => {
    setKeyword(event.target.value);
  };

  const handleSetSelectedPage = (props) => {
    setPageSelected(props)
  }

  const handleLocation = (place) => {
    const lat = place.geometry.location.lat();
    const long = place.geometry.location.lng();

    setLocation({
      place: place.formatted_address,
      lat: lat,
      long: long,
    });
  };

  const setSortBy = (name) => {
    setSorting(name);
    findJobs({sort: name})
  };

  const handleSelectFilter = (name, value) => {
    setJobListFiltered(false);
    if (name === "type") {
      setSelectedFilters({ ...selectedFilters, type: value });
    }
    if (name === "distance") {
      setSelectedFilters({ ...selectedFilters, distance: value });
    }
    if (name === "sector") {
      setSelectedFilters({ ...selectedFilters, sector: value });
    }
  };

  const cleanFilter = (name, where) => {
    if (name === "type") {
      setSelectedFilters({ ...selectedFilters, type: "" });
    }
    if (name === "distance") {
      setSelectedFilters({ ...selectedFilters, distance: "" });
    }
    if (name === "sector") {
      setSelectedFilters({ ...selectedFilters, sector: "" });
    }
    if (name === "all") {
      setSelectedFilters(initialStateFilters);
      scrollToFilters.current.scrollIntoView({ behavior: "smooth" });
    }

    showDropdown(initialStateDropdowns);

    if (where === 'filters') {
      findJobs({clean: name})
    }
  };


  const showDropdowns = (name) => {
    if (name === "type") {
      showDropdown({
        type: true,
        distance: false,
        sector: false,
      });
    }
    if (name === "distance") {
      showDropdown({
        type: false,
        distance: true,
        sector: false,
      });
    }
    if (name === "sector") {
      showDropdown({
        type: false,
        distance: false,
        sector: true,
      });
    }
    if (name === "closeAll") {
      showDropdown(initialStateDropdowns);
    }
  };

  const hideDropdowns = (name) => {

    if (name === "type") {
      showDropdown({
        ...dropdowns,
        type: false,
      });
    }
    if (name === "distance") {
      showDropdown({
        ...dropdowns,
        distance: false,
      });
    }
    if (name === "sector") {
      showDropdown({
        ...dropdowns,
        sector: false,
      });
    }
  };

  const fetchDataOnPage = (page) => {
    findJobs({page: page})
}

  const findJobs = (argQuery = {}) => {
    setJobListFiltered(true);
    let href = '?'
    if (argQuery.page) {
      href += `page=${argQuery.page+1}&` 
    }
    if (argQuery.sort || sortBy) {
      href += `sortBy=${argQuery.sort || sortBy}&` 
    }
    if (selectedFilters.type && argQuery.clean !== 'type'  && argQuery.clean !== 'all') {
      if (selectedFilters.type === "Permanent") {
        href += `jobTypeIds=328&` 
      }
      if (selectedFilters.type === "Temporary") {
        href += `jobTypeIds=329&` 
      }
      if (selectedFilters.type === "Contract") {
        href += `jobTypeIds=330&` 
      }
    }
    if (selectedFilters.distance && argQuery.clean !== 'distance'  && argQuery.clean !== 'all') {
      href += `distance=${selectedFilters.distance}&`
    }
    if (selectedFilters.sector && selectedFilters.sector !== 'All sectors' && argQuery.clean !== 'sector' && argQuery.clean !== 'all' ) {
      href += `jobIndustryIds=${selectedFilters.sector}&`
    }
    if (keyword) {
      href += `search=${keyword}&`
    }
    if (location) {
      href += `latitude=${location.lat}&longitude=${location.long}&locationMatch=${location.place}&`
    }


    router.push(href)
  }

  return (
    <div ref={scrollToFilters} className="umb-grid">
      <div className="grid section">
        <div className="row-container pb-0 pt-0 bg-primary">
          <div className="container">
            <div className="row clearfix">
              <div className=" col-md-12 column">
                <div>
                  <p></p>
                  <p>
                    <span className="rteText-color2">
                      <a
                        href="https://www.hrgo.co.uk/my-account"
                        title="My Account"
                        data-udi="umb://document/a0310e1fe4924bdeae866cd95488d565"
                      >
                        Save time applying for your next job. Sign Up today - it
                        only takes a minute and it's FREE!
                      </a>
                    </span>
                  </p>
                  <p></p>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row-container jobSearchForm pb-1 pt-1 bg-secondary pos-relative">
          <div className="container">
            <div className="row clearfix">
              <div className=" col-md-12 column">
                <div>
                  <div className="jobSearchForm searchForm">
                    <form className="form">
                      <div className="row">
                        <div className="col-12 form-group searchBox">
                          <div className="jobSearchForm_mainInputs row">
                            <input type="hidden" value="uk" id="countryCode" />

                            <Inputs
                              handleKeyword={handleKeyword}
                              handleLocation={handleLocation}
                              keyword={keyword}
                              location={location}
                            />
                            <div className="d-none d-lg-block col-md-2">
                              <div
                                className="searchForm_searchButton hvr-buzz-out"
                                onClick={findJobs}
                                style={{ cursor: "pointer" }}
                              >
                                <i className="icon hvr-icon"></i>
                                Find Jobs
                              </div>
                            </div>
                            <Dropdowns
                              sectorsListWithCodes={sectorsListWithCodes}
                              showDropdowns={showDropdowns}
                              hideDropdowns={hideDropdowns}
                              dropdowns={dropdowns}
                              cleanFilter={cleanFilter}
                              handleSelectFilter={handleSelectFilter}
                              selectedFilters={selectedFilters}
                            />
                            <div className="d-block d-lg-none col-md-2">
                              <div
                                className="searchForm_searchButton hvr-buzz-out"
                                onClick={findJobs}
                                style={{ cursor: "pointer" }}
                              >
                                <i className="icon hvr-icon"></i>
                                Find Jobs
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <p style={{ textAlign: "left" }}>
                    <span className="rteText-grey">
                      <a
                        href="https://www.hrgo.co.uk/candidate-homepage"
                        title="Candidate Homepage"
                        data-udi="umb://document/780b00ee50dc4087afef7aff71381192"
                        ref={scrollToJobList}
                      >
                        Not sure what type of job you want? Get started here
                        &gt;
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row-container job-search-results pb-1 pt-1 bg-colour-4 pos-relative overrideSizeAndQuality">
          <div className="container">
            <div className="row clearfix">
              <div className="col-md-12 column">
                <div>
                  <div className="row" >
                    <div className="col-md-8">
                      <div
                        style={{
                          fontSize: "28px",
                          marginTop: "40px",
                          fontWeight: "400",
                          color: "#495057",
                        }}
                        className="mb-hf "
                      >
                      {numberOfJobs === 0 ? 
                    'No jobs found'  :
                    `Displaying ${numberOfJobs === 1 ? numberOfJobs + ' Job' : numberOfJobs + " Jobs"}`
                    }  
                      </div>
                    </div>
                    <div className="col-md-4">
                      <SortButtons setSortBy={setSortBy} sortBy={sortBy} />
                    </div>
                  </div>
                  <SelectedFilters
                    jobListFiltered={jobListFiltered}
                    selectedFilters={selectedFilters}
                    removeFilter={cleanFilter}
                    sectorsListWithCodes={sectorsListWithCodes}
                  />
                  {numberOfJobs === 0 ? 
                  <Fragment>

                <p className="fontSize-18">
                <span className="rteHelper">Please try to change your search criteria or, alternatively, register your CV below</span>
              </p>
              <div className="card_register bg-secondary transparent-overlay-secondary rounded-0 d-block w-100 lozad" data-background-image="" data-loaded="true">
              <div className="card_body align-vertical">
                  <div className="card_bottom mx-1">
                      <div className="row">
                          <div className="col-12">
                              <h2>
                                  <span className="rteHelper"><p>Register and Upload CV</p></span>
                              </h2>
                          </div>
                          <div className="col-12 col-md-7 fontSize-18">
                              <p>
                                  <span className="rteHelper">If you don’t find a perfect match, register with us and
          be alerted to new opportunities before they go online!</span>
                              </p>
                          </div>
                              <div className="col-12 py-hf">
                                  <a href="#" className="btn btn-primary_alternative fontSize-18">
                                      <strong>
                                          <span className="rteHelper"><p>Register my CV</p></span>
                                      </strong>
                                  </a>
                              </div>
                      </div>
                  </div>
              </div>
          </div>
                  </Fragment>
              :
              <JobsList jobs={jobs} sectorsListWithCodes={sectorsListWithCodes} />
                }
              <PaginatedItems numberOfJobs={numberOfJobs} itemsPerPage={50} fetchDataOnPage={fetchDataOnPage} pageSelected={pageSelected} setPageSelected={handleSetSelectedPage} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPage;
