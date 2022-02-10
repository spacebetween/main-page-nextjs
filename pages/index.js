import { React, useEffect, useState } from "react";
import Dropdowns from "./components/JobPage/Dropdowns";
import Inputs from "./components/JobPage/Inputs";
import JobsList from "./components/JobPage/JobsList";
import SelectedFilters from "./components/JobPage/SelectedFilters";
import SortButtons from "./components/JobPage/SortButtons";

export default function Home() {
  useEffect(() => {
    //ADD STYLES TO HTML AND BODY
    document.querySelector("html").classList.add("js");
    document.querySelector("html").classList.add("preserve3d");
    document.querySelector("html").classList.add("flexbox");
    document.querySelector("body").classList.add("negative-nav");
    document.querySelector("body").classList.add("webp");
  }, []);

  const [menuMobile, showMenuMobile] = useState(false);
  const [numberOfJobs, setNumberOfJobs] = useState(987);

  const [submenu, showSubMenu] = useState({
    careers: false,
    employers: false
  })

  const handleClickHamburger = () => {
    showMenuMobile(true);
  };

  const handleCrossClick = () => {
    showMenuMobile(false);
  };

  const removeFilter = (filter, removeAll) => {
    console.log('remove Filter')
  }

  return (
    <div className="mega-navigation">
      <header
        className={
          !menuMobile
            ? "site-header sticky-top d-flex"
            : "site-header sticky-top d-flex active"
        }
      >
        <div className="container d-flex">
          <div className="site-logo">
            <a href="/" aria-label="HR GO Recruitment">
              <img
                className="logo-large d-none d-md-block lozad"
                alt="HR GO Recruitment"
                src="https://hrgo-image-cache.spacebetween.co.uk/media/6199/hr-go-rec-sitelogo.webp?format=webp"
              />
              <img
                className="logo-small d-block d-md-none lozad"
                src="https://hrgo-image-cache.spacebetween.co.uk/media/6199/hr-go-rec-sitelogo.webp?format=webp"
                alt="HR GO Recruitment"
              />
            </a>
          </div>
          <div
            className={
              menuMobile
                ? "main-menu active header-active"
                : "main-menu header-inactive"
            }
          >
            <div onClick={handleCrossClick} className="cross d-lg-none" />
            <ul className="menu-item-list list-unstyled d-lg-flex ml-auto">
              <li className="menu-item user-link separator-bottom d-lg-none has-submenu">
                <a className="menu-link user-menu-link">
                  <i className="icon login"></i> Log in
                  <i className="chevron d-lg-none"></i>
                  <i className="arrow-down d-none d-lg-inline-block"></i>
                </a>
                <div className="submenu text-wrap">
                  <div className="container small-padding-container">
                    <ul className="submenu-item-list list-unstyled">
                      <li className="back-link d-lg-none">
                        <div className="chevron"></div> Log In
                      </li>

                      <li className="submenu-item">
                        <a
                          href="/my-account"
                          className="submenu-link submenu-item-title"
                        >
                          Job Searcher Log In
                          <i className="chevron d-lg-none"></i>
                        </a>
                      </li>
                      <li className="submenu-item">
                        <a
                          href="/account-portal/login"
                          className="submenu-link submenu-item-title"
                        >
                          Employer Log In
                          <i className="chevron d-lg-none"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="cross"></div>
                </div>
              </li>

              <li className="menu-item text-nowrap  current-page">
                <a href="https://www.hrgo.co.uk/jobs" className="menu-link ">
                  Jobs
                  <i className="chevron d-lg-none"></i>
                  <i className="arrow-down d-none d-lg-inline-block"></i>
                </a>
              </li>
              <li className="menu-item text-nowrap">
                <a
                  href="https://www.hrgo.co.uk/branch-finder"
                  className="menu-link "
                >
                  Locate
                  <i className="chevron d-lg-none"></i>
                  <i className="arrow-down d-none d-lg-inline-block"></i>
                </a>
              </li>
              <li onClick={()=>showSubMenu({...submenu, careers: true})} className={`menu-item text-nowrap has-submenu ${submenu.careers && 'active open'}`}>
                <a className="menu-link ">
                  Careers Advice
                  <i className="chevron d-lg-none"></i>
                  <i style={{marginLeft:'5px'}} className="arrow-down d-none d-lg-inline-block"></i>
                </a>
                <div onMouseLeave={()=>showSubMenu({employers:false, careers: false})} className={`submenu text-wrap ${submenu.careers && 'active'}`}>
                  <div className="container small-padding-container ">
                    <ul className="submenu-item-list list-unstyled">
                      <li className="back-link d-lg-none">
                        <div className="chevron"></div> Careers Advice
                      </li>
                      <li className="menu-item user-link separator-bottom d-lg-none">
                        <a className="menu-link user-menu-link">
                          <i className="icon login"></i> Log in
                          <i className="chevron d-lg-none"></i>
                          <i className="arrow-down d-none d-lg-inline-block"></i>
                        </a>
                      </li>

                      <li className="submenu-item">
                        <a
                          href="https://www.hrgo.co.uk/careers-advice"
                          className="submenu-link"
                        >
                          <div className="submenu-item-title">
                            Careers Advice
                          </div>
                          <div className="submenu-item-description d-none d-lg-block"></div>
                        </a>
                      </li>
                      <li className="submenu-item">
                        <a
                          href="https://www.hrgo.co.uk/careers-advice/job-search"
                          className="submenu-link"
                        >
                          <div className="submenu-item-title">Job Search</div>
                          <div className="submenu-item-description d-none d-lg-block"></div>
                        </a>
                      </li>
                      <li className="submenu-item">
                        <a
                          href="https://www.hrgo.co.uk/careers-advice/interview-advice"
                          className="submenu-link"
                        >
                          <div className="submenu-item-title">
                            Interview Advice
                          </div>
                          <div className="submenu-item-description d-none d-lg-block"></div>
                        </a>
                      </li>
                      <li className="submenu-item">
                        <a
                          href="https://www.hrgo.co.uk/careers-advice/career-guides"
                          className="submenu-link"
                        >
                          <div className="submenu-item-title">
                            Career Guides
                          </div>
                          <div className="submenu-item-description d-none d-lg-block"></div>
                        </a>
                      </li>
                      <li className="submenu-item">
                        <a
                          href="https://www.hrgo.co.uk/careers-advice/free-resources"
                          className="submenu-link"
                        >
                          <div className="submenu-item-title">
                            FREE Resources
                          </div>
                          <div className="submenu-item-description d-none d-lg-block"></div>
                        </a>
                      </li>
                      <li className="submenu-item">
                        <a
                          href="https://www.hrgo.co.uk/careers-advice/starting-a-new-job"
                          className="submenu-link"
                        >
                          <div className="submenu-item-title">
                            Starting a New Job
                          </div>
                          <div className="submenu-item-description d-none d-lg-block"></div>
                        </a>
                      </li>
                      <li className="submenu-item">
                        <a
                          href="https://www.hrgo.co.uk/careers-advice/career-development"
                          className="submenu-link"
                        >
                          <div className="submenu-item-title">
                            Career Development
                          </div>
                          <div className="submenu-item-description d-none d-lg-block"></div>
                        </a>
                      </li>
                      <li className="submenu-item">
                        <a
                          href="https://www.hrgo.co.uk/careers-advice/interview-guide"
                          className="submenu-link"
                        >
                          <div className="submenu-item-title">
                            Interview Guide
                          </div>
                          <div className="submenu-item-description d-none d-lg-block"></div>
                        </a>
                      </li>
                      <li className="submenu-item">
                        <a
                          href="https://www.hrgo.co.uk/work-for-hr-go-recruitment/work-for-us"
                          className="submenu-link"
                        >
                          <div className="submenu-item-title">Work for Us</div>
                          <div className="submenu-item-description d-none d-lg-block"></div>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="cross"></div>
                </div>
              </li>
              <li onClick={()=>showSubMenu({...submenu, employers: true})} className={`menu-item text-nowrap has-submenu ${submenu.employers && 'active open'}`}>
                <a className="menu-link ">
                  Employers
                  <i className="chevron d-lg-none"></i>
                  <i style={{marginLeft:'5px'}} className="arrow-down d-none d-lg-inline-block"></i>
                </a>
                <div onMouseLeave={()=>showSubMenu({employers:false, careers: false})} className={`submenu text-wrap ${submenu.employers && 'active'}`}>
                  <div className="container small-padding-container ">
                    <ul className="submenu-item-list list-unstyled">
                      <li className="back-link d-lg-none">
                        <div className="chevron"></div> Employers
                      </li>
                      <li className="menu-item user-link separator-bottom d-lg-none">
                        <a className="menu-link user-menu-link">
                          <i className="icon login"></i> Log in
                          <i className="chevron d-lg-none"></i>
                          <i className="arrow-down d-none d-lg-inline-block"></i>
                        </a>
                      </li>

                      <li className="submenu-item">
                        <a
                          href="https://www.hrgo.co.uk/employers/hire-staff"
                          className="submenu-link"
                        >
                          <div className="submenu-item-title">Hire Staff</div>
                          <div className="submenu-item-description d-none d-lg-block"></div>
                        </a>
                      </li>
                      <li className="submenu-item">
                        <a
                          href="https://www.hrgo.co.uk/our-sectors"
                          className="submenu-link"
                        >
                          <div className="submenu-item-title">Our Sectors</div>
                          <div className="submenu-item-description d-none d-lg-block"></div>
                        </a>
                      </li>
                      <li className="submenu-item">
                        <a
                          href="https://www.hrgo.co.uk/employers/temporary-recruitment"
                          className="submenu-link"
                        >
                          <div className="submenu-item-title">
                            Temporary Recruitment
                          </div>
                          <div className="submenu-item-description d-none d-lg-block"></div>
                        </a>
                      </li>
                      <li className="submenu-item">
                        <a
                          href="https://www.hrgo.co.uk/employers/permanent-recruitment"
                          className="submenu-link"
                        >
                          <div className="submenu-item-title">
                            Permanent Recruitment
                          </div>
                          <div className="submenu-item-description d-none d-lg-block"></div>
                        </a>
                      </li>
                      <li className="submenu-item">
                        <a
                          href="https://www.hrgo.co.uk/employers/national-sales"
                          className="submenu-link"
                        >
                          <div className="submenu-item-title">
                            National Sales
                          </div>
                          <div className="submenu-item-description d-none d-lg-block"></div>
                        </a>
                      </li>
                      <li className="submenu-item">
                        <a
                          href="https://www.hrgo.co.uk/employers/managed-services"
                          className="submenu-link"
                        >
                          <div className="submenu-item-title">
                            Managed Services
                          </div>
                          <div className="submenu-item-description d-none d-lg-block"></div>
                        </a>
                      </li>
                      <li className="submenu-item">
                        <a
                          href="https://www.hrgo.co.uk/employers/public-sector"
                          className="submenu-link"
                        >
                          <div className="submenu-item-title">
                            Public Sector
                          </div>
                          <div className="submenu-item-description d-none d-lg-block"></div>
                        </a>
                      </li>
                      <li className="submenu-item">
                        <a
                          href="https://www.hrgo.co.uk/tech-solutions"
                          className="submenu-link"
                        >
                          <div className="submenu-item-title">
                            Tech Solutions
                          </div>
                          <div className="submenu-item-description d-none d-lg-block"></div>
                        </a>
                      </li>
                      <li className="submenu-item">
                        <a
                          href="https://www.hrgo.co.uk/employers/about-hr-go"
                          className="submenu-link"
                        >
                          <div className="submenu-item-title">About HR GO</div>
                          <div className="submenu-item-description d-none d-lg-block"></div>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="cross"></div>
                </div>
              </li>
              <li className="menu-item text-nowrap">
                <a href="https://www.hrgo.co.uk/blog" className="menu-link ">
                  Blog
                  <i className="chevron d-lg-none"></i>
                  <i className="arrow-down d-none d-lg-inline-block"></i>
                </a>
              </li>
            </ul>
          </div>

          <div className="user-menu d-lg-inline-block">
            <ul
              id="hrgo-sub-menu"
              className="sm sm-rtl nav nav-pills navbar_menu navbar-only-hrgo-menu d-none d-lg-flex"
              data-smartmenus-id="16443128867640627"
            >
              <li id="members_nav" className="members_nav nav-item dropdown">
                <a
                  style={{ marginBottom: "12px" }}
                  href="#"
                  id="members-nav-icon"
                  className="nav-link has-submenu members_nav_icon_parent"
                  aria-haspopup="true"
                  aria-controls="members-menu-dropdown"
                  aria-expanded="false"
                >
                  <div
                    className="members_nav_icon"
                    style={{
                      backgroundImage:
                        "url('https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png')",
                    }}
                  ></div>
                  <span className="sub-arrow"></span>
                </a>
                <ul
                  id="members-menu-dropdown"
                  className="dropdown-menu members_nav_dropdown sm-nowrap"
                  role="group"
                  aria-hidden="true"
                  aria-labelledby="members-nav-icon"
                  aria-expanded="false"
                  style={{
                    width: "auto",
                    display: "none",
                    top: "auto",
                    left: "0px",
                    marginLeft: -"103px",
                    marginTop: "0px",
                    minWidth: "10em",
                  }}
                >
                  <li className="members_nav_item members_nav_item_bold">
                    <a
                      href="#"
                      id="members_nav_sign_in"
                      className="dropdown-item font-weight-bold"
                    >
                      Log in
                    </a>
                  </li>
                  <li className="members_nav_item members_nav_list_seperator">
                    <hr className="members_nav_item_hr" />
                  </li>
                  <li className="members_nav_item">
                    <a
                      href="#"
                      id="members_nav_register"
                      className="dropdown-item "
                    >
                      Register
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div onClick={handleClickHamburger} className="hamburger d-lg-none">
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/hamburger-menu-462145.png"
              alt="hamburger"
              width="100%"
            ></img>
          </div>
          <div className="indicator d-lg-none"></div>
        </div>
      </header>
      <div className="umb-grid">
        <div className="grid section">
          <div className="row-container pb-0 pt-0 bg-primary">
            <div className="container">
              <div className="row clearfix">
                <div className=" col-md-12 column">
                  <div>
                    <p></p>
                    <p>
                      <span className="rteText-color2">
                        <a
                          href="https://www.hrgo.co.uk/my-account"
                          title="My Account"
                          data-udi="umb://document/a0310e1fe4924bdeae866cd95488d565"
                        >
                          Save time applying for your next job. Sign Up today -
                          it only takes a minute and it's FREE!
                        </a>
                      </span>
                    </p>
                    <p></p>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row-container jobSearchForm pb-1 pt-1 bg-secondary pos-relative">
            <div className="container">
              <div className="row clearfix">
                <div className=" col-md-12 column">
                  <div>
                    <div className="jobSearchForm searchForm">
                      <form className="form">
                        <div className="row">
                          <div className="col-12 form-group searchBox">
                            <div className="jobSearchForm_mainInputs row">
                              <input
                                type="hidden"
                                value="uk"
                                id="countryCode"
                              />

                              <Inputs />
                              <div className="d-none d-lg-block col-md-2">
                                <button
                                  type="submit"
                                  className="searchForm_searchButton hvr-buzz-out"
                                  data-category="jobSearch"
                                  data-action="click"
                                  data-label="Search"
                                  tabIndex="0"
                                >
                                  <i className="icon hvr-icon"></i>
                                  Find Jobs
                                </button>
                              </div>
                              <Dropdowns />
                              <div className="d-block d-lg-none col-md-2">
                                <button
                                  type="submit"
                                  className="searchForm_searchButton hvr-buzz-out"
                                  data-category="jobSearch"
                                  data-action="click"
                                  data-label="Search"
                                  tabIndex="0"
                                >
                                  <i className="icon hvr-icon"></i>
                                  Find Jobs
                                </button>
                              </div>
                              <div
                                id="placesAttribution"
                                style={{ display: "none" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    <p style={{ textAlign: "left" }}>
                      <span className="rteText-grey">
                        <a
                          href="https://www.hrgo.co.uk/candidate-homepage"
                          title="Candidate Homepage"
                          data-udi="umb://document/780b00ee50dc4087afef7aff71381192"
                        >
                          Not sure what type of job you want? Get started here
                          &gt;
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row-container job-search-results pb-1 pt-1 bg-colour-4 pos-relative overrideSizeAndQuality">
            <div className="container">
              <div className="row clearfix">
                <div className="col-md-12 column">
                  <div>
                    <div className="row" id="scrollToHere">
                      <div className="col-md-8">
                        <div
                          style={{
                            fontSize: "28px",
                            marginTop: "40px",
                            fontWeight: "400",
                            color: "#495057",
                          }}
                          className="mb-hf "
                        >
                          Displaying {numberOfJobs} Jobs
                        </div>
                      </div>
                      <div className="col-md-4">
                        <SortButtons />
                      </div>
                    </div>
                    <SelectedFilters
                      selectedFilters={{ type: "", distance: "", sector: "" }}
                      removeFilter={removeFilter}
                    />
                    <JobsList />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="site-footer">
        <div className="container">
          <div className="main-menu">
            <ul className="menu-item-list list-unstyled d-lg-flex">
              <li className="menu-item has-submenu">
                <a href="javascript:void(0)" className="menu-link ">
                  Jobs
                  <i className="icon plus d-lg-none"></i>
                </a>
                <div className="submenu">
                  <ul className="submenu-item-list list-unstyled">
                    <li className="submenu-item">
                      <a
                        href="https://www.hrgo.co.uk/jobs"
                        className="submenu-link"
                      >
                        <div className="submenu-item-title">Jobs</div>
                      </a>
                    </li>
                    <li className="submenu-item">
                      <a
                        href="https://www.hrgo.co.uk/branch-finder"
                        className="submenu-link"
                      >
                        <div className="submenu-item-title">Branch Finder</div>
                      </a>
                    </li>
                    <li className="submenu-item">
                      <a
                        href="https://www.hrgo.co.uk/candidate-homepage"
                        className="submenu-link"
                      >
                        <div className="submenu-item-title">
                          Candidate Homepage
                        </div>
                      </a>
                    </li>
                    <li className="submenu-item">
                      <a
                        href="https://www.hrgo.co.uk/careers-advice"
                        className="submenu-link"
                      >
                        <div className="submenu-item-title">Careers Advice</div>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="menu-item has-submenu">
                <a
                  href="https://www.hrgo.co.uk/employers/hire-staff"
                  className="menu-link "
                >
                  Hire Staff
                  <i className="icon plus d-lg-none"></i>
                </a>
                <div className="submenu">
                  <ul className="submenu-item-list list-unstyled">
                    <li className="submenu-item">
                      <a
                        href="https://www.hrgo.co.uk/our-sectors"
                        className="submenu-link"
                      >
                        <div className="submenu-item-title">Our Sectors</div>
                      </a>
                    </li>
                    <li className="submenu-item">
                      <a
                        href="https://www.hrgo.co.uk/employers/temporary-recruitment"
                        className="submenu-link"
                      >
                        <div className="submenu-item-title">
                          Temporary Recruitment
                        </div>
                      </a>
                    </li>
                    <li className="submenu-item">
                      <a
                        href="https://www.hrgo.co.uk/employers/permanent-recruitment"
                        className="submenu-link"
                      >
                        <div className="submenu-item-title">
                          Permanent Recruitment
                        </div>
                      </a>
                    </li>
                    <li className="submenu-item">
                      <a
                        href="https://www.hrgo.co.uk/employers/managed-services"
                        className="submenu-link"
                      >
                        <div className="submenu-item-title">
                          Managed Services
                        </div>
                      </a>
                    </li>
                    <li className="submenu-item">
                      <a
                        href="https://www.hrgo.co.uk/employers/national-sales"
                        className="submenu-link"
                      >
                        <div className="submenu-item-title">National Sales</div>
                      </a>
                    </li>
                    <li className="submenu-item">
                      <a
                        href="https://www.hrgo.co.uk/account-portal"
                        className="submenu-link"
                      >
                        <div className="submenu-item-title">Account Portal</div>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="menu-item has-submenu">
                <a
                  href="https://www.hrgo.co.uk/careers-advice/free-resources"
                  className="menu-link "
                >
                  FREE Resources
                  <i className="icon plus d-lg-none"></i>
                </a>
                <div className="submenu">
                  <ul className="submenu-item-list list-unstyled">
                    <li className="submenu-item">
                      <a
                        href="https://www.hrgo.co.uk/careers-advice/free-resources"
                        className="submenu-link"
                      >
                        <div className="submenu-item-title">FREE Resources</div>
                      </a>
                    </li>
                    <li className="submenu-item">
                      <a
                        href="https://www.hrgo.co.uk/books/temporary-workers-handbook"
                        className="submenu-link"
                      >
                        <div className="submenu-item-title">
                          Temporary Workers Handbook
                        </div>
                      </a>
                    </li>
                    <li className="submenu-item">
                      <a
                        href="https://www.hrgo.co.uk/books/driving-temp-handbook"
                        className="submenu-link"
                      >
                        <div className="submenu-item-title">
                          Driving Temp Handbook
                        </div>
                      </a>
                    </li>
                    <li className="submenu-item">
                      <a href="#" className="submenu-link">
                        <div className="submenu-item-title"></div>
                      </a>
                    </li>
                    <li className="submenu-item">
                      <p>
                        <a
                          href="https://www.linkedin.com/company/hr-go-recruitment-ltd"
                          className="footer-media-link"
                          title="HR GO LinkedIn page"
                          target="_blank"
                          rel="noopener"
                        >
                          <img
                            alt=""
                            src="/media/6016/linkedin.png?width=50&amp;height=50&amp;mode=max"
                            data-udi="umb://media/e34d7aad5e4444a395e782fcfa90314e"
                            style={{ width: "50px", height: "50px" }}
                          />
                        </a>{" "}
                        <a
                          href="https://www.facebook.com/hrgorecruitment/"
                          className="footer-media-link"
                          title="HR GO Facebook page"
                          target="_blank"
                          rel="noopener"
                        >
                          {" "}
                          <img
                            alt=""
                            src="/media/6046/facebook.png?width=50&amp;height=50&amp;mode=max"
                            data-udi="umb://media/214596efc0854576a840132599832f74"
                            style={{ width: "50px", height: "50px" }}
                          />
                        </a>
                      </p>{" "}
                    </li>
                  </ul>
                </div>
              </li>
              <li className="menu-item has-submenu">
                <a
                  href="https://www.hrgo.co.uk/employers/about-hr-go"
                  className="menu-link "
                >
                  About HR GO
                  <i className="icon plus d-lg-none"></i>
                </a>
                <div className="submenu">
                  <ul className="submenu-item-list list-unstyled">
                    <li className="submenu-item">
                      <a
                        href="https://www.hrgo.co.uk/employers/about-hr-go"
                        className="submenu-link"
                      >
                        <div className="submenu-item-title">About HR GO</div>
                      </a>
                    </li>
                    <li className="submenu-item">
                      <a
                        href="https://www.hrgo.co.uk/work-for-hr-go-recruitment/work-for-us"
                        className="submenu-link"
                      >
                        <div className="submenu-item-title">Work for Us</div>
                      </a>
                    </li>
                    <li className="submenu-item">
                      <a
                        href="https://www.hrgoplc.co.uk/start-a-joint-venture-business"
                        className="submenu-link"
                      >
                        <div className="submenu-item-title">
                          Start a Joint Venture Business
                        </div>
                      </a>
                    </li>
                    <li className="submenu-item">
                      <a
                        href="https://www.hrgoplc.co.uk/our-heritage"
                        className="submenu-link"
                      >
                        <div className="submenu-item-title">Our Heritage</div>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="menu-item has-submenu">
                <a
                  href="https://www.hrgo.co.uk/legal-policies/mission-statement"
                  className="menu-link "
                >
                  Mission statement
                  <i className="icon plus d-lg-none"></i>
                </a>
                <div className="submenu">
                  <ul className="submenu-item-list list-unstyled">
                    <li className="submenu-item">
                      <a
                        href="https://www.hrgo.co.uk/legal-policies/complaints-policy"
                        className="submenu-link"
                      >
                        <div className="submenu-item-title">
                          Complaints Policy
                        </div>
                      </a>
                    </li>
                    <li className="submenu-item">
                      <a
                        href="https://www.hrgoplc.co.uk/privacy-policy"
                        className="submenu-link"
                      >
                        <div className="submenu-item-title">Privacy Policy</div>
                      </a>
                    </li>
                    <li className="submenu-item">
                      <a
                        href="https://www.hrgoplc.co.uk/terms-conditions"
                        className="submenu-link"
                      >
                        <div className="submenu-item-title">
                          Terms &amp; Conditions
                        </div>
                      </a>
                    </li>
                    <li className="submenu-item">
                      <a
                        href="https://www.hrgoplc.co.uk/modern-day-slavery-statement"
                        className="submenu-link"
                      >
                        <div className="submenu-item-title">
                          Modern Day Slavery Statement
                        </div>
                      </a>
                    </li>
                    <li className="submenu-item">
                      <a
                        href="https://www.hrgo.co.uk/coronavirus-worker-update"
                        className="submenu-link"
                      >
                        <div className="submenu-item-title">
                          Coronavirus Worker Update
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>

          <div className="footer-columns">
            <div className="main-column">
              <div className="footer-links">
                <p>
                  <img
                    alt=""
                    src="https://www.hrgo.co.uk/media/7444/strongertogether2022.png?width=300&height=90&mode=max"
                    data-udi="umb://media/7ff0ab89b5c34c628ec7b3fec923669d"
                    style={{ width: "300px", height: "90px" }}
                  />
                  <img
                    loading="lazy"
                    alt=""
                    src="https://www.hrgo.co.uk/media/6039/corporatemember-light.png?width=300&height=90&mode=max"
                    data-udi="umb://media/d80b5f45729149b3861dad45fb487b76"
                    style={{ width: "300px", height: "90px" }}
                  />
                </p>
              </div>
            </div>
            <div className="side-column copyright">
              <a href="https://hrgo.co.uk/" target="_blank">
                Hand-crafted by HR GO Labs © 2022
              </a>
            </div>
            <div className="side-column">
              <a
                href="https://www.reviews.co.uk//company-reviews/store/hrgo-co-uk-"
                target="_blank"
              >
                <img
                  src="https://www.hrgo.co.uk/images/logos/reviews-io.svg"
                  className="reviews-logo"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
