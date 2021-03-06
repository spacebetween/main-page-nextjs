import React, { Fragment } from "react";

import { listOfDistances } from "../../../lib/helperLists";

const SelectedFilters = ({selectedFilters = {}, removeFilter, jobListFiltered, sectorsListWithCodes}) => {

  let areFiltersApplied = false;

  Object.keys(selectedFilters).forEach((key) => {
    if (selectedFilters[key]) {
      areFiltersApplied = true;
    }
  });

  if(!jobListFiltered) {
    return <Fragment></Fragment>
  }

  return (
    <div className="filterTabs mb-2 pos-relative icon-lightGrey">
      {selectedFilters.type && (
        <div className="d-inline-block">
          <div style={{cursor:'pointer'}} onClick={() =>
                removeFilter('type', 'filters')
              } className="filterTabs_item d-inline-block fontSize-12">
            {selectedFilters.type === 'All' ? 'All job types' : selectedFilters.type}
            <a
              className="icon-white filterTabs_item_link"

            >
              <i
                className="icomoon-cross align-middle fontSize-18 filterTabs_item-close"
                id="JobType_Temporary"
              ></i>
            </a>
          </div>
          <div className="filterTabs_wrapper-arrow pos-relative d-inline-block">
            <div className="filterTabs-right-arrow d-inline-block"></div>
          </div>
        </div>
      )}
      {selectedFilters.distance && (
        <div className="d-inline-block">
          <div  style={{cursor:'pointer'}}  onClick={() =>
                removeFilter('distance', 'filters')
              } className="filterTabs_item d-inline-block fontSize-12">
               {listOfDistances.find(el => el.value === selectedFilters.distance).label }
            <a
              className="icon-white filterTabs_item_link"
            >
              <i
                className="icomoon-cross align-middle fontSize-18 filterTabs_item-close"
                id="Distance"
              ></i>
            </a>
          </div>
          <div className="filterTabs_wrapper-arrow pos-relative d-inline-block">
            <div className="filterTabs-right-arrow d-inline-block"></div>
          </div>
        </div>
      )}
      {selectedFilters.sector && (
        <div className="d-inline-block">
          <div style={{cursor:'pointer'}} onClick={() =>
                removeFilter('sector', 'filters')
              } className="filterTabs_item d-inline-block fontSize-12">
             {sectorsListWithCodes.find(el => el.value === selectedFilters.sector).label }
            <a
              className="icon-white filterTabs_item_link"
              
            >
              <i
                className="icomoon-cross align-middle fontSize-18 filterTabs_item-close"
                id="JobSector"
              ></i>
            </a>
          </div>
          <div className="filterTabs_wrapper-arrow pos-relative d-inline-block">
            <div className="filterTabs-right-arrow d-inline-block"></div>
          </div>
        </div>
      )}
      {areFiltersApplied && (
        <div style={{cursor:'pointer'}} onClick={() =>
          removeFilter('all', 'filters')
        } className="d-inline-block mt-hf">
          <div
            className="fontSize-14"
            style={{color:'#2095f3'}}
          >
            Clear all filters
          </div>
        </div>
      )}
    </div> 
  );
};

export default SelectedFilters;
