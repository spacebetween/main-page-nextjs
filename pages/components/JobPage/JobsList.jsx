import React, { useState } from 'react';

const JobsList = () => {

    const [jobsList, setJobsList] = useState([{
        title: 'Senior Industrial Designers',
        isNew: true,
        link: 'https://www.rhl.com.au/job/senior-industrial-designers/mNfnmsEh2adD2z2rnjoQgE',
        location: 'Australia, New South Wales - Sydney',
        type: 'Permanent',
        pay: 'up to $115000 per annum',
        sector: 'Design',
        info: `Senior Industrial Designers SYDNEY Salary
        AUD 75k - 115k package (including Super)
        Are you a creative and detail-oriented
        Industrial Designer with 5 to 10 years of
        POP/POS/Exhibition industry experience? My
        client is a`,
        added: '2 days ago',
        company: 'rhl'
    },
    {
        title: 'Temporary Shopping Replenishes - £10.22p/h! (Age: 16+)',
        isNew: false,
        link: 'https://www.rhl.com.au/job/senior-industrial-designers/mNfnmsEh2adD2z2rnjoQgE',
        location: 'London',
        type: 'Temporary',
        pay: 'up to £10 per hour',
        sector: 'Design',
        info: `URGENT! LOOKING FOR TEMPORARY STOCK REPLENISHES! Location: St Helier Role: Temporary Stock Replenishes Start: ASAP Pay: £10.22p/h - AGE 16+ HRGO Recruitment are looking for people with good customer service & reta`,
        added: '2 days ago',
        company: ''
    },
])

    const companyLogo = (el) => {
        if (el === 'rhl') { 
            return (
                <img
                className="brandLogo_logo lozad"
                src="https://hrgo-image-cache.spacebetween.co.uk/media/6909/rhl.png?format=webp"
                data-loaded="true"
              />
            )
       }
       else return (<img class="brandLogo_logo lozad" src="https://hrgo-image-cache.spacebetween.co.uk/media/6911/hrgo.png?format=webp" data-loaded="true"/>)
    }



    return (
        <div className="pos-relative" id="jobsListingWrapper">
        <div
          className="spinner_wrapper w-100 d-none"
          id="spinnerWrapper"
        >
          <div className="spinner_component card-grayLightest rounded p-hf pt-1">
            <div className="spinner_component_icon d-block align-middle icomoon-spinner mb-hf"></div>
            <small>Loading Jobs</small>
          </div>
        </div>
        {
            jobsList ?    jobsList.map((el)=>{
                return (
<div className="pos-relative">
          {el.isNew &&
          <div className="card_note">NEW</div>
          }
          <div className="card card-job mb-2 shadow-1">
            <div className="card_body">
              <div className="card_bottom">
                <div className="row px-2">
                  <div className="col-12 col-sm-8 col-xl-9 mb-1 pl-0">
                    <div className="row">
                      <div className="col-12">
                        <a href={el.link}>
                          <h3 className="mb-hf">
                            {el.title}
                          </h3>
                        </a>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="d-inline-block pr-1 pb-hf">
                          <i className="align-middle icomoon-pointer icon-lightGrey icomoon-p-r"></i>
                          <strong className="align-middle fontSize-14">
                            {el.location}
                          </strong>
                        </div>
                        <div className="d-inline-block pr-1 pb-hf">
                          <i className="align-middle icomoon-clock icon-lightGrey icomoon-p-r"></i>
                          <strong className="align-middle fontSize-14">
                           {el.type}
                          </strong>
                        </div>
                        <div className="d-inline-block pb-hf">
                          <i className="align-middle icomoon-pound icon-lightGrey icomoon-p-r"></i>
                          <strong className="align-middle fontSize-14">
                            {el.pay}
                          </strong>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 mb-hf">
                        <div className="d-inline-block">
                          <i className="align-middle icomoon-case icon-lightGrey icomoon-p-r"></i>
                          <a
                            className="align-middle fontSize-14"
                            href="/jobs/sectors/design"
                          >
                            {el.sector}
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                       {el.info}
                        <a
                          className="icon-lightGrey"
                          href={el.link}
                        >
                          <strong>(...)</strong>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-4 col-xl-3 mb-1 px-0">
                    <div className="d-none d-sm-block fontSize-14 icon-lightGrey py-hf ">
                      <span>
                        Job posted{" "}
                        <strong
                          className="jobDate"
                          data-timeposted="2022-02-06T22:49:30.967Z"
                        >
                          {el.added}
                        </strong>{" "}
                        by
                      </span>
                    </div>
                    <div className="d-none d-sm-block pull-lg-right brandLogo mb-1 p-1">
                        {companyLogo(el.company)}
                    </div>
                    <a
                      href={el.link}
                      style={{ fontSize: "14px" }}
                      className="d-none d-lg-block btn btn-primary btn-block pull-lg-right"
                    >
                      <strong>Read details and Apply</strong>
                    </a>
                    <a
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
                )
            })
        :
        <div>SPINNER</div>
        }
      </div>
    )
}

export default JobsList;
