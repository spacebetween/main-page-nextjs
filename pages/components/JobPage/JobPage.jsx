import React, { useState } from "react";
import Dropdowns from "./DropdownFilters.jsx";
import Inputs from "./Inputs";
import JobsList from "./JobsList";
import SelectedFilters from "./SelectedFilters";
import SortButtons from "./SortButtons";


const JobPage = ({jobs}) => {

  const [numberOfJobs, setNumberOfJobs] = useState(987);

  const [input, setInput] = useState({
    keyword: "",
    location: null,
  });


  const [selectedFilters, setSelectedFilters] = useState({
    type: "",
    distance: "",
    sector: "",
  });


  const removeFilter = (filter) => {
    if (filter === 'type') {
        setSelectedFilters({...selectedFilters, type: ""})
    }
    if (filter === 'distance') {
        setSelectedFilters({...selectedFilters, distance: ""})
    }
    if (filter === 'sector') {
        setSelectedFilters({...selectedFilters, sector: ""})
    }
    else {
        setSelectedFilters({type: "", distance: "", sector: ""})
    }
  };

  const handleKeyword = (event) => {
    setInput({ ...input, keyword: event.target.value });
  };

  const handleLocation = (place) => {
    const lat = place.geometry.location.lat();
    const long = place.geometry.location.lng();

    setInput({
      ...input,
      location: {
        place: place.formatted_address,
        lat: lat,
        long: long,
      },
    });
  };

  const [sortBy, setSorting] = useState({
    pay: false,
    recent: false
})

  const setSortBy = (name) => {
    if (name === 'recent') {
      setSorting({recent:true, pay:false})
    } else 
    setSorting({recent:false, pay:true})
  }

  const handleSearchJobs = () => {
    console.log('SEARCH')
  }


  const handleSelectFilter = (name,el) => {
    if (name === 'type') {
      setSelectedFilters({ ...selectedFilters, type: el });
    }
    if (name === 'distance') {
      setSelectedFilters({ ...selectedFilters, distance: el });
    }
    else setSelectedFilters({ ...selectedFilters, sector: el });
    
  };



  console.log('inputs:', input.keyword, input.location)

  console.log('selectFilters:', selectedFilters.type, selectedFilters.distance, selectedFilters.sector)

  return (
    <div className="umb-grid">
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
                              keyword={input.keyword}
                            />
                            <div className="d-none d-lg-block col-md-2">
                              <button
                                type="submit"
                                className="searchForm_searchButton hvr-buzz-out"
                                data-category="jobSearch"
                                data-action="click"
                                data-label="Search"
                                tabIndex="0"
                              >
                                <i className="icon hvr-icon"></i>
                                Find Jobs
                              </button>
                            </div>
                            <Dropdowns handleSelectFilter={handleSelectFilter} selectedFilters={selectedFilters} />
                            <div className="d-block d-lg-none col-md-2">
                              <button
                                type="submit"
                                className="searchForm_searchButton hvr-buzz-out"
                                data-category="jobSearch"
                                data-action="click"
                                data-label="Search"
                                tabIndex="0"
                              >
                                <i className="icon hvr-icon"></i>
                                Find Jobs
                              </button>
                            </div>
                            <div
                              id="placesAttribution"
                              style={{ display: "none" }}
                            ></div>
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
                  <div className="row" id="scrollToHere">
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
                        Displaying {numberOfJobs} Jobs
                      </div>
                    </div>
                    <div className="col-md-4">
                      <SortButtons handleSearchJobs={handleSearchJobs} setSortBy={setSortBy} sortBy={sortBy} />
                    </div>
                  </div>
                  <SelectedFilters
                    selectedFilters={selectedFilters}
                    removeFilter={removeFilter}
                  />
                  <JobsList jobs={jobs}/>
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
