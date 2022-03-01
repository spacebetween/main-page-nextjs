import React from "react";
import {
  timePosted,
  checkIfNew,
  checkType,
  determineSalary,
  setCompanyLogo,
  determineSector,
  determineWhereRedirect
} from "../../../lib/helperFunctions";
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
        jobs.map((job) =>  {
          return (<div key={job.id} className="pos-relative">
            {checkIfNew(job.datePosted) && <div className="card_note">NEW</div>}
            <div className="card card-job mb-2 shadow-1">
              <div className="card_body">
                <div className="card_bottom">
                  <div className="row px-2">
                    <div className="col-12 col-sm-8 col-xl-9 mb-1 pl-0">
                      <div className="row">
                        <div className="col-12">
                          <h3 className="mb-hf">
                            <Link {...determineWhereRedirect(job)}>
                              {job.jobTitle}
                            </Link>
                          </h3>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          <div className="d-inline-block pr-1 pb-hf">
                            <i className="align-middle icomoon-pointer icon-lightGrey icomoon-p-r"></i>
                            <strong className="align-middle fontSize-14">
                              {job.locationCity}{" "}
                              {job.locationRegion && ` - ${job.locationRegion}`}
                            </strong>
                          </div>
                          <div className="d-inline-block pr-1 pb-hf">
                            <i className="align-middle icomoon-clock icon-lightGrey icomoon-p-r"></i>
                            <strong className="align-middle fontSize-14">
                              {checkType(job.jobTypeId)}
                            </strong>
                          </div>
                          <div className="d-inline-block pb-hf">
                            <i className="align-middle icomoon-pound icon-lightGrey icomoon-p-r"></i>
                            <strong className="align-middle fontSize-14">
                              {determineSalary(job)}
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
                                  query: {jobIndustryIds: `${job.jobIndustryId}`, sector: determineSector(sectorsListWithCodes, job.jobIndustryId, job.id)}
                              }}
                             >
                               {/* DO NOT REMOVE A TAG BECAUSE OF ISSUE WITH NO READING THE CODE AS SINGLE REACT CHILD */}
                               <a>
                                {determineSector(sectorsListWithCodes, job.jobIndustryId)}
                               </a>
                              </Link>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          {htmlToText(job.jobDescription).slice(0, 240)}
                          <a className="icon-lightGrey" href={determineWhereRedirect(job)}>
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
                            {timePosted(job.datePosted)}
                          </strong>{" "}
                          by
                        </span>
                      </div>
                      <div className="d-none d-sm-block pull-lg-right brandLogo mb-1 p-1">
                        {setCompanyLogo(job.website)}
                      </div>
                      <Link
                        {...determineWhereRedirect(job)}
                      >
                        <a style={{ fontSize: "14px", color:'white' }} className="d-none d-lg-block btn btn-primary btn-block pull-lg-right">
                          <strong>Read details and Apply</strong>
                        </a>
                      </Link>
                      <Link
                        {...determineWhereRedirect(job)}
                      >
                        <a style={{ color:'white' }} className="d-lg-none btn btn-primary btn-block pull-lg-right" >
                          <strong>Apply now</strong>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          )}
        ))
      }
    </div>
  );
};

export default Jobs;
