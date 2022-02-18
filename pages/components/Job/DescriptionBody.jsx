import React from "react";
const DescriptionBody = ({ job, similarJobs }) => {


  return (
    <div className="job-details-main">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="info-block">
              <h4 className="main-title">Job Description</h4>
              <button className="btn btn-secondary btn-back float-right d-none d-md-block">
                <i className="icomoon-arrow-left"></i>
                Back to search
              </button>
              <button className="btn btn-secondary btn-back float-right d-md-none">
                <i className="icomoon-arrow-left"></i>
              </button>
            </div>

            <div className="card-main">
              <div className="card-header">
                <h3 className="job-title">{job.jobTitle}</h3>

                <div className="button-row d-block d-lg-flex">
                  <button className="btn btn-primary p-hf btn-apply">
                    Apply with HR GO
                  </button>
                  <b style={{display:'flex', alignItems: 'center'}} className="share-text">Share Job</b>

                  <ul className="nav nav-inline fontSize-18">
        <li className="nav-item ml-hf"><a className="btn-whatsapp rounded d-inline-block" href="https://api.whatsapp.com/send/?phone&amp;text=https%3A%2F%2Fwww.hrgo.co.uk%2Fjob%2Fhealth-and-safety-administrator%2FqE8NxJqnzRBkMasonjMv4D&amp;app_absent=0" target="_blank" title="Link will open in a new window/tab" data-category="social@currentUrl" data-action="share/whatsapp/share"><i className="icomoon-whatsapp align-middle d-inline-block p-hf"></i><span className="sr-only">whatsapp</span></a></li>
        <li className="nav-item ml-hf"><a className="btn-facebook rounded d-inline-block" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.hrgo.co.uk%2Fjob%2Fhealth-and-safety-administrator%2FqE8NxJqnzRBkMasonjMv4D" target="_blank" title="Link will open in a new window/tab" data-category="social@currentUrl" data-action="facebookShare"><i className="icomoon-facebook align-middle d-inline-block p-hf"></i><span className="sr-only">facebook</span></a></li>
        <li className="nav-item ml-hf"><a className="btn-linkedin rounded d-inline-block" href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https%3A%2F%2Fwww.hrgo.co.uk%2Fjob%2Fhealth-and-safety-administrator%2FqE8NxJqnzRBkMasonjMv4D&amp;title=Job%20Detail&amp;source=https://hrgo.co.uk/" target="_blank" title="Link will open in a new window/tab" data-category="social@currentUrl" data-action="linkedinShare"> <i className="icomoon-linkedin align-middle d-inline-block p-hf"></i><span className="sr-only">linkedin</span></a></li>
        <li className="nav-item ml-hf"><a className="btn-twitter rounded d-inline-block" href="https://twitter.com/intent/tweet/?url=https%3A%2F%2Fwww.hrgo.co.uk%2Fjob%2Fhealth-and-safety-administrator%2FqE8NxJqnzRBkMasonjMv4D&amp;text=Job%20Detail" target="_blank" title="Link will open in a new window/tab" data-category="social@currentUrl" data-action="twitterShare"><i className="icomoon-twitter align-middle d-inline-block p-hf"></i><span className="sr-only">twitter</span></a></li>
        <li className="nav-item ml-hf"><a className="btn-envelope rounded d-inline-block" href="mailto:?Subject=Job%20Detail&amp;body=Check%20out%20this%20page%20from%20HRGO%20https%3A%2F%2Fwww.hrgo.co.uk%2Fjob%2Fhealth-and-safety-administrator%2FqE8NxJqnzRBkMasonjMv4D" data-category="social@currentUrl" data-action="emailShare"><i className="icomoon-envelope align-middle d-inline-block p-hf"></i><span className=" sr-only">email</span><small className="pr-hf"><strong>Email a friend</strong></small></a></li>
    </ul>
                </div>
              </div>
              {job.jobDescription}
            </div>

            <div className="info-block similar-jobs">
              <div className="row">
                <div className="col-12">
                  <h3 className="mt-2 main-title">
                    Similar {job.jobTitle} jobs in the area
                  </h3>
                </div>
                <div className="col-12">
                  <div className="row">
					  {
						  similarJobs.map((el,i)=> 
							<div key={i} className="col-12 col-sm-4">
							<div className="card mb-2 shadow-1">
							  <div className="card_body">
								<div className="card_bottom pb-hf">
								  <div className="row">
									<div className="col-12">
									  <a href="https://www.rhl.co.uk/job/engineering-coordinator/wWDez8v39isewE64ZMtP4u">
										<h5 className="mb-hf text-nowrap">
										  {el.title}
										</h5>
									  </a>
									</div>
									<div className="col-12 text-nowrap">
									  <div className="d-inline-block pr-1 pb-hf">
										<i className="align-middle icomoon-pointer icon-lightGrey icomoon-p-r"></i>
										<strong className="align-middle fontSize-14">
										  {el.location}
										</strong>
									  </div>
									</div>
									<div className="col-12 text-nowrap">
									  <div className="d-inline-block pb-hf">
										<i className="align-middle icomoon-pound icon-lightGrey icomoon-p-r"></i>
										<strong className="align-middle fontSize-14">
										 {el.salary}
										</strong>
									  </div>
									</div>
								  </div>
								</div>
							  </div>
							</div>
						  </div>
						  )
					  }
                  </div>
                </div>
              </div>
              <div>
                <button className="btn btn-secondary btn-back">
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
