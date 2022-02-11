import React, {useState} from 'react';


const Footer = () => {



  const [footerSubmenu, showFooterSubmenu] = useState({
    jobs: false,
    hireStaff: false,
    freeRes: false,
    about: false,
    mission: false
  })

return (
    <footer className="site-footer">
    <div className="container">
      <div className="main-menu">
        <ul className="menu-item-list list-unstyled d-lg-flex">
          <li className={`menu-item has-submenu ${footerSubmenu.jobs && 'active'}`}>
            <a onClick={()=>showFooterSubmenu({...footerSubmenu, jobs:!footerSubmenu.jobs})} className="menu-link">
              Jobs
              <i className="icon plus d-lg-none"></i>
            </a>
            <div style={{height: footerSubmenu.jobs ? 'auto' : ''}} className={`submenu ${footerSubmenu.jobs && 'is-opened'}`}>
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
          <li  className={`menu-item has-submenu ${footerSubmenu.hireStaff && 'active'}`}>
            <a
             onClick={()=>showFooterSubmenu({...footerSubmenu, hireStaff:!footerSubmenu.hireStaff})} 
              className="menu-link"
            >
              Hire Staff
              <i className="icon plus d-lg-none"></i>
            </a>
            <div style={{height: footerSubmenu.hireStaff ? 'auto' : ''}} className={`submenu ${footerSubmenu.hireStaff && 'is-opened'}`}>
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
          <li  className={`menu-item has-submenu ${footerSubmenu.freeRes && 'active'}`}>
            <a
             onClick={()=>showFooterSubmenu({...footerSubmenu, freeRes:!footerSubmenu.freeRes})}
              className="menu-link "
            >
              FREE Resources
              <i className="icon plus d-lg-none"></i>
            </a>
            <div style={{height: footerSubmenu.freeRes ? 'auto' : ''}} className={`submenu ${footerSubmenu.freeRes && 'is-opened'}`}>
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
                        src="https://www.hrgo.co.uk/media/6016/linkedin.png?width=50&height=50&mode=max"
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
                        src="https://www.hrgo.co.uk/media/6046/facebook.png?width=50&height=50&mode=max"
                        data-udi="umb://media/214596efc0854576a840132599832f74"
                        style={{ width: "50px", height: "50px" }}
                      />
                    </a>
                  </p>{" "}
                </li>
              </ul>
            </div>
          </li>
          <li className={`menu-item has-submenu ${footerSubmenu.about && 'active'}`}>
            <a
             onClick={()=>showFooterSubmenu({...footerSubmenu, about:!footerSubmenu.about})}
              className="menu-link "
            >
              About HR GO
              <i className="icon plus d-lg-none"></i>
            </a>
            <div style={{height: footerSubmenu.about ? 'auto' : ''}} className={`submenu ${footerSubmenu.about && 'is-opened'}`}>
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
          <li  className={`menu-item has-submenu ${footerSubmenu.mission && 'active'}`}>
            <a
              onClick={()=>showFooterSubmenu({...footerSubmenu, mission:!footerSubmenu.mission})}
              className="menu-link "
            >
              Mission statement
              <i className="icon plus d-lg-none"></i>
            </a>
            <div style={{height: footerSubmenu.mission ? 'auto' : ''}} className={`submenu ${footerSubmenu.mission && 'is-opened'}`}>
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
)
}

export default Footer;