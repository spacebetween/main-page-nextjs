import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
// import Dropdowns from "./DropdownFilters.jsx";
// import Inputs from "./Inputs";
// import JobsList from "./List";
// import SelectedFilters from "./SelectedFilters";
// import SortButtons from "./SortButtons";
// import axios from "axios";
// import { Fragment } from "react/cjs/react.production.min";
// import PaginatedItems from "./Pagination.jsx";
import { useRouter } from "next/router";
import { checkType } from "../helperFunctions.js";
import SortButtons from "../Jobs/SortButtons.jsx";
import JobsList from "../Jobs/List";


const SectorJobs = ({
  jobs,
  sectorsListWithCodes,
  numberOfJobs,
  params,
  locationCity,
}) => {
  const router = useRouter();

  const [pageSelected, setPageSelected] = useState(0);
  const [sortBy, setSorting] = useState("");
//   const scrollToJobList = useRef(null);
//   const scrollToFilters = useRef(null);
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

    // scrollToJobList.current.scrollIntoView({ behavior: "smooth" });
  }, [numberOfJobs]);

  const handleKeyword = (event) => {
    setKeyword(event.target.value);
  };

  const handleSetSelectedPage = (props) => {
    setPageSelected(props);
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
    setSorting(name);
    findJobs({ sort: name });
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
    //   scrollToFilters.current.scrollIntoView({ behavior: "smooth" });
    }

    showDropdown(initialStateDropdowns);

    if (where === "filters") {
      findJobs({ clean: name });
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
    findJobs({ page: page });
  };

  const findJobs = (argQuery = {}) => {
    setJobListFiltered(true);
    let href = "?";
    if (argQuery.page) {
      href += `page=${argQuery.page + 1}&`;
    }
    if (argQuery.sort || sortBy) {
      href += `sortBy=${argQuery.sort || sortBy}&`;
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

    router.push(href);
  };
  

  return (
    <div className="umb-grid bg-grey">
      <div className="grid section">
      <div class="row-container pb-4 pt-4 bg-white responsiveBackgroundImage useJobFont lozad" 
      data-background-image="/media/7035/hrgo-rec-relativejobbanner2021.jpg" 
      data-loaded="true" style={{backgroundImage: "url(" + "https://hrgo-image-cache.spacebetween.co.uk/media/7035/hrgo-rec-relativejobbanner2021.jpg?format=webp" + ")"}}>
            <div class="container">
                <div class="row clearfix">
                    <div class="col-md-12">
                            <div class="standout mt-1">
                                <div class="row">
                                    <div class="col-md-10 col-lg-6 standout-primary">
                                        <div class="standout_header p-2">
                                            <h1>sectorName Jobs</h1>
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
        
        <div className='row clearfix my-3'>
            <div id='sorting' className='col-md-3' >
            <SortButtons setSortBy={setSortBy} sortBy={sortBy} />
            </div>
            <div id='jobList' className='col-md-9' >
            <JobsList jobs={jobs} sectorsListWithCodes={sectorsListWithCodes} />
            </div>
       </div>
            </div>
       </div>
        </div>
      </div>
 
  );
};
export default SectorJobs;
