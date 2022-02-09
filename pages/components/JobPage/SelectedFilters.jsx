import React, { useState } from 'react';

const SelectedFilters = () => {

    const initialFilters = {
        type: 'All',
        distance: 'Any',
        sector: 'All sectors'
    }

    const [selectedFilters, setSelectedFilters] = useState({
        type: 'All',
        distance: 'up to 5 miles',
        sector: 'Airport'
    })
    
    const cleanFilters = () => {
        console.log(clean);
    }

    return (
        <div className="filterTabs mb-2 pos-relative icon-lightGrey">
                     <div className="d-inline-block">
                <div className="filterTabs_item d-inline-block fontSize-12">
                {selectedFilters.type}
                    <a href="" className="icon-white filterTabs_item_link">
                        <i className="icomoon-cross align-middle fontSize-18 filterTabs_item-close" id="JobType_Temporary"></i>
                    </a>
                </div>
                <div className="filterTabs_wrapper-arrow pos-relative d-inline-block">
                    <div className="filterTabs-right-arrow d-inline-block"></div>
                </div>
            </div>
                      <div className="d-inline-block">
                        <div className="filterTabs_item d-inline-block fontSize-12">
                        {selectedFilters.distance}
                          <a
                            href=""
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
                      <div className="d-inline-block">
                        <div className="filterTabs_item d-inline-block fontSize-12">
                        {selectedFilters.sector}
                          <a
                            href=""
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

                      <div className="d-inline-block mt-hf">
                        <a
                         href=""
                          onClick={()=>setSelectedFilters(initialFilters)}
                          className="fontSize-14"
                          id="clearAllFilters"
                        >
                          Clear all filters
                        </a>
                      </div>
                    </div>
    )

}

export default SelectedFilters;