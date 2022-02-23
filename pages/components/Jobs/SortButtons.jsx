import React, { useState } from 'react';


const SortButtons = ({setSortBy, sortBy}) => {

    return (
        <div
                          id="filterForm"
                          className="d-inline-block sort-form"
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
                                className={`sortBy_element sortBy_element-date mb-hf ${sortBy === 'date' && 'active'} `}
                                id="sortByDateLabel"
                              >
                                Most Recent
                                <button
                                disabled={sortBy === 'date'}
                                  className="d-none"
                                  data-action="radiobutton"
                                  data-category="jobSearchFilters"
                                  data-label="sortByDate"
                                  id="sortByDate"
                                  name="SortBy"
                                  type="radio"
                                  onClick={()=>setSortBy('date')}
                                />
                              </label>
                              <label
                                htmlFor="sortByPay"
                                className={`sortBy_element sortBy_element-pay mb-hf ${sortBy === 'pay' && 'active'} `}
                                id="sortByPayLabel"
                              >
                                Highest Pay
                                <button
                                 disabled={sortBy === 'pay'}
                                  className="d-none"
                                  data-action="radiobutton"
                                  data-category="jobSearchFilters"
                                  data-label="sortByPay"
                                  id="sortByPay"
                                  name="SortBy"
                                  type="radio"
                                  onClick={()=>setSortBy('pay')}
                                />
                              </label>
                            </div>
                          </div>
                        </div>
    )
}

export default SortButtons;