import React, {Fragment} from "react";
import Footer from "./components/Common/Footer";
import Header from "./components/Common/Header";
import Link from "next/link"


const ErrorPage  = () => {

  return (
    <div className="mega-navigation bg-secondary">
      <Header />
      <div style={{padding: '80px 0'}} className='container bg-secondary' >
  <div className="card_register bg-secondary transparent-overlay-secondary rounded-0 d-block w-100 lozad">
  <div className="card_body align-vertical">
      <div className="card_bottom mx-1">
          <div className="row">
              <div className="col-12">
                  <h2>
                      <span className="rteHelper"><p>Ooops! We couldn't find the page you're looking for.</p></span>
                  </h2>
              </div>
              <div className="col-12 col-md-7 fontSize-18">
              </div>
                  <div className="col-12 py-hf">
                  <Link href='/'>
      <button className="btn btn-primary_alternative fontSize-18" >GO BACK</button>
      </Link>
                  </div>
          </div>
      </div>
  </div>
</div>
      </div>
      <Footer />
    </div>
  );
}

export default ErrorPage;