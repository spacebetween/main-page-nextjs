import React, { useState } from 'react';


const SortButtons = () => {

    const handleSearchJobs = () => {
        console.log('SEARCH FOR JOBS')
    }

    const [sortBy, setSortBy] = useState({
        pay: false,
        recent: false
    })

    return (
        <form
                          action="/jobs"
                          method="get"
                          id="filterForm"
                          className="d-inline-block sort-form"
                          noValidate="novalidate"
                          data-hs-cf-bound="true"
                        >
                          <input type="hidden" name="isMetric" value="false" />
                          <div className="d-inline-block">
                            <label className="label d-sm-block d-md-inline-block">
                              <strong>Sort by ↑</strong>
                            </label>
                            <div
                              className="sortBy_wrapper d-inline-block sort-form-inputs"
                              id="sortByWrapper"
                            >
                              <label
                                htmlFor="sortByDate"
                                className={`sortBy_element sortBy_element-date mb-hf ${sortBy.recent && 'active'} `}
                                id="sortByDateLabel"
                              >
                                Most Recent
                                <input
                                  className="d-none"
                                  data-action="radiobutton"
                                  data-category="jobSearchFilters"
                                  data-label="sortByDate"
                                  id="sortByDate"
                                  name="SortBy"
                                  type="radio"
                                  onClick={()=>{setSortBy({recent:true, pay:false})}}
                                />
                              </label>
                              <label
                                htmlFor="sortByPay"
                                className={`sortBy_element sortBy_element-pay mb-hf ${sortBy.pay && 'active'} `}
                                id="sortByPayLabel"
                              >
                                Highest Pay
                                <input
                                  className="d-none"
                                  data-action="radiobutton"
                                  data-category="jobSearchFilters"
                                  data-label="sortByPay"
                                  id="sortByPay"
                                  name="SortBy"
                                  type="radio"
                                  onClick={()=>{setSortBy({recent:false, pay:true})}}
                                />
                              </label>
                            </div>
                          </div>
                          <button
                            type="submit"
                            className="d-none"
                            value="Search"
                            name="submit"
                            id="js-jobSearchFilter"
                            onClick={handleSearchJobs}
                          ></button>
                        </form>
    )
}

export default SortButtons;