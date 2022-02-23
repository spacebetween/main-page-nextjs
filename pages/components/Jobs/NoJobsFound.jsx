import React, {Fragment} from 'react';


const NoJobsFound = () => {
   return ( <Fragment>
    <p className="fontSize-18">
    <span className="rteHelper">Please try to change your search criteria or, alternatively, register your CV below</span>
  </p>
  <div className="card_register bg-secondary transparent-overlay-secondary rounded-0 d-block w-100 lozad" data-background-image="" data-loaded="true">
  <div className="card_body align-vertical">
      <div className="card_bottom mx-1">
          <div className="row">
              <div className="col-12">
                  <h2>
                      <span className="rteHelper"><p>Register and Upload CV</p></span>
                  </h2>
              </div>
              <div className="col-12 col-md-7 fontSize-18">
                  <p>
                      <span className="rteHelper">If you don’t find a perfect match, register with us and
be alerted to new opportunities before they go online!</span>
                  </p>
              </div>
                  <div className="col-12 py-hf">
                      <a href="https://www.hrgo.co.uk/my-account" className="btn btn-primary_alternative fontSize-18">
                          <strong>
                              <span className="rteHelper"><p>Register my CV</p></span>
                          </strong>
                      </a>
                  </div>
          </div>
      </div>
  </div>
</div>
      </Fragment>)

}

export default NoJobsFound;