import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import Dropdowns from "./DropdownFilters.jsx";
import Inputs from "./Inputs";
import JobsList from "./List";
import SelectedFilters from "./SelectedFilters";
import SortButtons from "./SortButtons";
import { Fragment } from "react/cjs/react.production.min";
import PaginatedItems from "./Pagination.jsx";
import { useRouter } from "next/router";
import { checkType } from "../helperFunctions.js";
import NoJobsFound from "./NoJobsFound.jsx";

const JobPage = ({
  jobs,
  sectorsListWithCodes,
  numberOfJobs,
  params,
  locationCity,
  paginationMessage,
  numberOfPages,
}) => {
  const router = useRouter();
  const scrollToJobList = useRef(null);
  const scrollToFilters = useRef(null);
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState(null);
  const [firstLoad, setFirstLoad] = useState(true);

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
    if (params.jobTypeIds) {
      setJobListFiltered(true);
      setSelectedFilters({
        ...selectedFilters,
        type: checkType(params.jobTypeIds),
      });
    }
    if (params.distance) {
      setJobListFiltered(true);
      setSelectedFilters({ ...selectedFilters, distance: params.distance });
    }
    if (params.jobIndustryIds) {
      setJobListFiltered(true);
      setSelectedFilters({ ...selectedFilters, sector: params.jobIndustryIds });
    }
    if (locationCity) {
      setLocation({
        place: locationCity,
        lat: params.latitude,
        long: params.longitude,
      });
    }
    if (params.search) {
      setKeyword(params.search);
    }
    if (!firstLoad) {
      scrollToJobList.current.scrollIntoView({ behavior: "smooth" });
    } else {
      setFirstLoad(false);
    }
  }, [numberOfJobs, params.length]);

  const handleKeyword = (event) => {
    setKeyword(event.target.value);
  };

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
    findJobs({ sort: name });
  };

  const handleSelectFilter = (name, value) => {
    if (!params.jobIndustryIds || !params.distance || !params.jobTypeIds) {
      setJobListFiltered(false);
    } else {
      setJobListFiltered(true);
    }

    setSelectedFilters({ ...selectedFilters, [name]: value });
  };

  const cleanFilter = (name, where) => {
    if (name !== "all") {
      setSelectedFilters({ ...selectedFilters, [name]: "" });
    }
    else {
      setSelectedFilters(initialStateFilters);
      scrollToFilters.current.scrollIntoView({ behavior: "smooth" });
    }

    showDropdown(initialStateDropdowns);

    if (where === "filters") {
      findJobs({ clean: name });
    }
  };

  const showDropdowns = (name) => {
    if (name !== "closeAll") {
      showDropdown({ ...dropdowns, [name]: true });
    } else showDropdown(initialStateDropdowns);
  };

  const hideDropdowns = (name) => {
    showDropdown({
      ...dropdowns,
      [name]: false,
    });
  };

  const fetchJobsOnPageChange = (page) => {
    findJobs({ page: page });
  };

  const findJobs = (argQuery = {}) => {
    setJobListFiltered(true);
    let href = "?";
    if (argQuery.page) {
      href += `page=${argQuery.page + 1}&`;
    }

    if (argQuery.sort || params.sortBy) {
      href += `sortBy=${argQuery.sort || params.sortBy}&`;
    }
    if (
      selectedFilters.type &&
      argQuery.clean !== "type" &&
      argQuery.clean !== "all"
    ) {
      if (selectedFilters.type === "Permanent") {
        href += `jobTypeIds=328&`;
      }
      if (selectedFilters.type === "Temporary") {
        href += `jobTypeIds=329&`;
      }
      if (selectedFilters.type === "Contract") {
        href += `jobTypeIds=330&`;
      }
    }
    if (
      selectedFilters.distance &&
      argQuery.clean !== "distance" &&
      argQuery.clean !== "all"
    ) {
      href += `distance=${selectedFilters.distance}&`;
    }
    if (
      selectedFilters.sector &&
      selectedFilters.sector !== "All sectors" &&
      argQuery.clean !== "sector" &&
      argQuery.clean !== "all"
    ) {
      href += `jobIndustryIds=${selectedFilters.sector}&`;
    }
    if (keyword) {
      href += `search=${keyword}&`;
    }
    if (location) {
      href += `latitude=${location.lat}&longitude=${location.long}&locationMatch=${location.place}&`;
    }

    router.push(href === "?" ? "" : href);
  };

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
                  <div className="row">
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
                        {numberOfJobs === 0
                          ? "No jobs found"
                          : `Displaying ${
                              numberOfJobs === 1
                                ? numberOfJobs + " Job"
                                : numberOfJobs + " Jobs"
                            }`}
                      </div>
                    </div>
                    <div className="col-md-4">
                      <SortButtons
                        setSortBy={setSortBy}
                        sortBy={params.sortBy}
                      />
                    </div>
                  </div>
                  <SelectedFilters
                    jobListFiltered={jobListFiltered}
                    selectedFilters={selectedFilters}
                    removeFilter={cleanFilter}
                    sectorsListWithCodes={sectorsListWithCodes}
                  />
                  {numberOfJobs === 0 ? (
                    <NoJobsFound />
                  ) : (
                    <Fragment>
                      <JobsList
                        jobs={jobs}
                        sectorsListWithCodes={sectorsListWithCodes}
                      />
                      <PaginatedItems
                        paginationMessage={paginationMessage}
                        numberOfPages={numberOfPages}
                        fetchJobsOnPageChange={fetchJobsOnPageChange}
                        pageSelected={params.page - 1}
                      />
                    </Fragment>
                  )}
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
