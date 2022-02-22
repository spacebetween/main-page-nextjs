import React from "react";
const parse = require("html-react-parser");
import {
  determineLinkToRecruiter,
  determineWhoPosted,
  determineSalary,
} from "../helperFunctions";
import { useRouter } from "next/router";

const DescriptionBody = ({ job, similarJobs, linkToShare }) => {


  const router = useRouter();

  const url = linkToShare
  let title = job.jobTitle

  //TO DO   change localhost to maindomain

  const facebookLink = "https://www.facebook.com/sharer/sharer.php?u=" + url;
  const twitterLink = "https://twitter.com/intent/tweet/?url=" + url + "&text=" + title;
  const linkedinLink = "https://www.linkedin.com/shareArticle?mini=true&url=" + url + "&title=" + title + "&source=https://hrgo.co.uk/";
  const emailLink = "mailto:?Subject=" + title + "&body=Check%20out%20this%20page%20from%20HRGO%20" + url;
  const whatsappLink = `https://api.whatsapp.com/send/?phone&amp;text=localhost:3000/${linkToShare}&amp;app_absent=0`

  return (
    <div className="job-details-main">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="info-block">
              <h4 className="main-title">Job Description</h4>

              <button
                onClick={() => router.back()}
                className="btn btn-secondary float-right d-none d-md-block"
              >
                <i className="icomoon-arrow-left"></i>
                Back to search
              </button>

              <button
                onClick={() => router.back()}
                className="btn btn-secondary  float-right d-md-none"
              >
                <i className="icomoon-arrow-left"></i>
              </button>
            </div>

            <div className="card-main">
              <div className="card-header">
                <h4 className="job-title">{job.jobTitle}</h4>
                <div className="author float-lg-right">
                  <strong>Job posted by: </strong>
                  <a href={determineLinkToRecruiter(job.username)}>
                    {determineWhoPosted(job.username)}
                  </a>
                </div>
                <div className="button-row d-block d-lg-flex">
                  <button className="btn btn-primary p-hf btn-apply">
                    Apply with HR GO
                  </button>
                  <b
                    style={{ display: "flex", alignItems: "center" }}
                    className="share-text"
                  >
                    Share Job
                  </b>

                  <ul className="nav nav-inline fontSize-18">
                    <li className="nav-item ml-hf">
                      <a
                        className="btn-whatsapp rounded d-inline-block"
                        href={whatsappLink}
                        target="_blank"
                        title="Link will open in a new window/tab"
                      >
                        <i className="icomoon-whatsapp align-middle d-inline-block p-hf"></i>
                        <span className="sr-only">whatsapp</span>
                      </a>
                    </li>
                    <li className="nav-item ml-hf">
                      <a
                        className="btn-facebook rounded d-inline-block"
                        href={facebookLink}
                        target="_blank"
                        title="Link will open in a new window/tab"
                      >
                        <i className="icomoon-facebook align-middle d-inline-block p-hf"></i>
                        <span className="sr-only">facebook</span>
                      </a>
                    </li>
                    <li className="nav-item ml-hf">
                      <a
                        className="btn-linkedin rounded d-inline-block"
                        href={linkedinLink}
                        target="_blank"
                        title="Link will open in a new window/tab"
                      >
                        {" "}
                        <i className="icomoon-linkedin align-middle d-inline-block p-hf"></i>
                        <span className="sr-only">linkedin</span>
                      </a>
                    </li>
                    <li className="nav-item ml-hf">
                      <a
                        className="btn-twitter rounded d-inline-block"
                        href={twitterLink}
                        target="_blank"
                        title="Link will open in a new window/tab"
                      >
                        <i className="icomoon-twitter align-middle d-inline-block p-hf"></i>
                        <span className="sr-only">twitter</span>
                      </a>
                    </li>
                    <li className="nav-item ml-hf">
                      <a
                        className="btn-envelope rounded d-inline-block"
                        href={emailLink}
                      >
                        <i className="icomoon-envelope align-middle d-inline-block p-hf"></i>
                        <span className=" sr-only">email</span>
                        <small className="pr-hf">
                          <strong>Email a friend</strong>
                        </small>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {parse(job.jobDescription)}
            </div>

            <div className="info-block similar-jobs">
              <div className="row">
                <div className="col-12">
                  <h5 className="mt-2 main-title">
                    Similar {job.jobTitle} jobs in the area
                  </h5>
                </div>
                <div className="col-12">
                  <div className="row">
                    {similarJobs &&
                      similarJobs.map((el, i) => (
                        <div key={i} className="col-12 col-sm-4">
                          <div className="card mb-2 shadow-1">
                            <div className="card_body">
                              <div className="card_bottom pb-hf">
                                <div className="row">
                                  <div className="col-12">
                                    <a href="https://www.rhl.co.uk/job/engineering-coordinator/wWDez8v39isewE64ZMtP4u">
                                      <h5 className="mb-hf text-nowrap">
                                        {el.jobTitle}
                                      </h5>
                                    </a>
                                  </div>
                                  <div className="col-12 text-nowrap">
                                    <div className="d-inline-block pr-1 pb-hf">
                                      <i className="align-middle icomoon-pointer icon-lightGrey icomoon-p-r"></i>
                                      <strong className="align-middle fontSize-14">
                                        {el.locationCity
                                          ? el.locationCity
                                          : el.locationRegion}
                                      </strong>
                                    </div>
                                  </div>
                                  <div className="col-12 text-nowrap">
                                    <div className="d-inline-block pb-hf">
                                      <i className="align-middle icomoon-pound icon-lightGrey icomoon-p-r"></i>
                                      <strong className="align-middle fontSize-14">
                                        {determineSalary(el)}
                                      </strong>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
              <div>
                <button
                  onClick={() => router.back()}
                  className="btn btn-secondary"
                >
                  <i className="icomoon-arrow-left"></i>
                  Back to search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionBody;
