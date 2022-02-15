import React, { useState, useRef } from "react";
import Dropdowns from "./DropdownFilters.jsx";
import Inputs from "./Inputs";
import JobsList from "./JobsList";
import SelectedFilters from "./SelectedFilters";
import SortButtons from "./SortButtons";


const JobPage = ({jobs}) => {


  const [numberOfJobs, setNumberOfJobs] = useState(987);
  const scrollToJobList = useRef(null)
  const scrollToFilters = useRef(null)

  //INPUTS (have to have separate states cause of google autocomplete)

  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState({});

//FILTERS
  const initialStateFilters = {
    type: "",
    distance: "",
    sector: "",
  }
  const [selectedFilters, setSelectedFilters] = useState(initialStateFilters);


//DROPDOWNS
  const initialStateDropdowns = {
    type: false,
    distance: false,
    sector: false,
  };

  const [dropdowns, showDropdown] = useState(initialStateDropdowns);

  //SORT BUTTONS 

  const initialStateSortBtns = {
    pay: false,
    recent: false
}

  const [sortBy, setSorting] = useState(initialStateSortBtns)

  // SEARCH on/off

  const [jobListFiltered, setJobListFiltered] = useState(false)


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
    })
  };

  const setSortBy = (name) => {
    if (name === 'recent') {
      setSorting({recent:true, pay:false})
    } else 
    setSorting({recent:false, pay:true})
  }


  const handleSelectFilter = (name,el) => {
    setJobListFiltered(false);
    if (name === 'type') {
      setSelectedFilters({ ...selectedFilters, type: el });
    }
    if (name === 'distance') {
      setSelectedFilters({ ...selectedFilters, distance: el });
    }
    if (name === 'sector') {
      setSelectedFilters({ ...selectedFilters, sector: el });
    }
  };

  const cleanFilter = (name) => {

    setJobListFiltered(false);

    if (name === 'type') {
      setSelectedFilters({ ...selectedFilters, type: "" });
    }
    if (name === 'distance') {
      setSelectedFilters({ ...selectedFilters, distance: "" });
    }
    if (name === 'sector') {
      setSelectedFilters({ ...selectedFilters, sector: "" });
    }
    if (name === 'all') {
      setSelectedFilters(initialStateFilters);
      scrollToFilters.current.scrollIntoView({behavior: 'smooth'})
    }
    showDropdown(initialStateDropdowns)
  }


  const showDropdowns = (name) => {
    if (name === 'type') {
      showDropdown({
        type: true,
        distance: false,
        sector: false,
      })
    }
    if (name === 'distance') {
      showDropdown({
        type: false,
        distance: true,
        sector: false,
      })
    }
    if (name === 'sector') {
      showDropdown({
        type: false,
        distance: false,
        sector: true,
      })
    }
  }

  const findJobs = () => {
    console.log('FIND JOBS')
    setJobListFiltered(true);
    scrollToJobList.current.scrollIntoView({behavior: 'smooth'})
  }

  console.log('keyword:', keyword, 'location:', location)

  console.log('selectFilters:', selectedFilters.type, selectedFilters.distance, selectedFilters.sector)

  console.log('sort recent:', sortBy.recent, 'sort pay:', sortBy.pay)

  console.log('isJobListFiltered:', jobListFiltered)

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
                            />
                            <div className="d-none d-lg-block col-md-2">
                              <div
                                className="searchForm_searchButton hvr-buzz-out"
                                onClick={findJobs}
                                style={{cursor:'pointer'}}
                              >
                                <i className="icon hvr-icon"></i>
                                Find Jobs
                              </div>
                            </div>
                            <Dropdowns showDropdowns={showDropdowns} dropdowns={dropdowns} cleanFilter={cleanFilter} handleSelectFilter={handleSelectFilter} selectedFilters={selectedFilters} />
                            <div className="d-block d-lg-none col-md-2">
                              <div
                                className="searchForm_searchButton hvr-buzz-out"
                                onClick={findJobs}
                                style={{cursor:'pointer'}}
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
                  <div className="row" ref={scrollToJobList}>
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
                      <SortButtons setSortBy={setSortBy} sortBy={sortBy} />
                    </div>
                  </div>
                  <SelectedFilters
                  jobListFiltered={jobListFiltered}
                    selectedFilters={selectedFilters}
                    removeFilter={cleanFilter}
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
