import React from "react";
import {
  timePosted,
  checkIfNew,
  checkType,
  determineSalary,
  setCompanyLogo,
  determineSector,
  determineWhereRedirect
} from "../helperFunctions";
const { htmlToText } = require("html-to-text");
import Link from "next/link"

const Jobs = ({ jobs, sectorsListWithCodes }) => {
  return (
    <div className="pos-relative" id="jobsingWrapper">
      <div className="spinner_wrapper w-100 d-none" id="spinnerWrapper">
        <div className="spinner_component card-grayLightest rounded p-hf pt-1">
          <div className="spinner_component_icon d-block align-middle icomoon-spinner mb-hf"></div>
          <small>Loading Jobs</small>
        </div>
      </div>
      {jobs && (
        jobs.map((el) => (
          <div key={el.id} className="pos-relative">
            {checkIfNew(el.datePosted) && <div className="card_note">NEW</div>}
            <div className="card card-job mb-2 shadow-1">
              <div className="card_body">
                <div className="card_bottom">
                  <div className="row px-2">
                    <div className="col-12 col-sm-8 col-xl-9 mb-1 pl-0">
                      <div className="row">
                        <div className="col-12">
                          {determineWhereRedirect(el)}                         
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          <div className="d-inline-block pr-1 pb-hf">
                            <i className="align-middle icomoon-pointer icon-lightGrey icomoon-p-r"></i>
                            <strong className="align-middle fontSize-14">
                              {el.locationCity}{" "}
                              {el.locationRegion && ` - ${el.locationRegion}`}
                            </strong>
                          </div>
                          <div className="d-inline-block pr-1 pb-hf">
                            <i className="align-middle icomoon-clock icon-lightGrey icomoon-p-r"></i>
                            <strong className="align-middle fontSize-14">
                              {checkType(el.jobTypeId)}
                            </strong>
                          </div>
                          <div className="d-inline-block pb-hf">
                            <i className="align-middle icomoon-pound icon-lightGrey icomoon-p-r"></i>
                            <strong className="align-middle fontSize-14">
                              {determineSalary(el)}
                            </strong>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 mb-hf">
                          <div className="d-inline-block">
                            <i className="align-middle icomoon-case icon-lightGrey icomoon-p-r"></i>
                            <Link 
                            className="align-middle fontSize-14"
                              href={{
                                pathname: `/sectors`,
                                  query: {jobIndustryIds: `${el.jobIndustryId}`, sector: determineSector(sectorsListWithCodes, el.jobIndustryId)}
                              }}
                             >
                              {determineSector(sectorsListWithCodes, el.jobIndustryId)}
                              </Link>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          {htmlToText(el.jobDescription).slice(0, 240)}
                          <a className="icon-lightGrey" href={determineWhereRedirect(el)}>
                            <strong>(...)</strong>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-4 col-xl-3 mb-1 px-0">
                      <div className="d-none d-sm-block fontSize-14 icon-lightGrey py-hf ">
                        <span>
                          {`Job posted `}
                          <strong className="jobDate">
                            {timePosted(el.datePosted)}
                          </strong>{" "}
                          by
                        </span>
                      </div>
                      <div className="d-none d-sm-block pull-lg-right brandLogo mb-1 p-1">
                        {setCompanyLogo(el.website)}
                      </div>
                      <a
                        href={el.link}
                        style={{ fontSize: "14px", color:'white' }}
                        className="d-none d-lg-block btn btn-primary btn-block pull-lg-right"
                      >
                        <strong>Read details and Apply</strong>
                      </a>
                      <a
                       style={{ color:'white' }}
                        href={el.link}
                        className="d-lg-none btn btn-primary btn-block pull-lg-right"
                      >
                        <strong>Apply now</strong>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Jobs;
