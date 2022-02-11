import React, {useState} from 'react';


const Header = () => {

    const [menuMobile, showMenuMobile] = useState(false);
  
    const [submenu, showSubMenu] = useState({
      careers: false,
      employers: false
    })

    const [loginDropdown, setShowLoginDropdown] = useState(false);

  
    const handleClickHamburger = () => {
      showMenuMobile(true);
    };
  
    const handleCrossClick = () => {
      showMenuMobile(false);
    };

    const submenuCareers = [{
        title: "Careers Advice",
        link:"https://www.hrgo.co.uk/careers-advice",
      },
    {
      title: "Job Search",
      link: "https://www.hrgo.co.uk/careers-advice/job-search",
    },
    {
      title: "Interview Advice",
      link: "https://www.hrgo.co.uk/careers-advice/interview-advice",
    },
    {
      title: "Career Guides",
      link: "https://www.hrgo.co.uk/careers-advice/career-guides",
    },
    {
      title: "FREE Resources",
      link: "https://www.hrgo.co.uk/careers-advice/free-resources",
    },
    {
      title: "Starting a New Job",
      link: "https://www.hrgo.co.uk/careers-advice/starting-a-new-job",
    },
    {
      title: "Career Development",
      link: "https://www.hrgo.co.uk/careers-advice/career-development",
    },
    {
      title: "Interview Guide",
      link: "https://www.hrgo.co.uk/careers-advice/interview-guide",
    },
    {
      title: "Work for Us",
      link: "https://www.hrgo.co.uk/work-for-hr-go-recruitment/work-for-us",
    }
    ];
    
    const submenuEmployers = [{
      title: "Hire Staff",
      link:"https://www.hrgo.co.uk/employers/hire-staff",
    },
    {
    title: "Our Sectors",
    link: "https://www.hrgo.co.uk/our-sectors",
    },
    {
    title: "Temporary Recruitment",
    link: "https://www.hrgo.co.uk/employers/temporary-recruitment",
    },
    {
    title: "Permanent Recruitment",
    link: "https://www.hrgo.co.uk/employers/permanent-recruitment",
    },
    {
    title: "National Sales",
    link: "https://www.hrgo.co.uk/employers/national-sales",
    },
    {
    title: "Managed Services",
    link: "https://www.hrgo.co.uk/employers/managed-services",
    },
    {
    title: "Public Sector",
    link: "https://www.hrgo.co.uk/employers/public-sector",
    },
    {
    title: "Tech Solutions",
    link: "https://www.hrgo.co.uk/tech-solutions",
    },
    {
    title: "About HR GO",
    link: "https://www.hrgo.co.uk/employers/about-hr-go",
    }
    ];

    const loginMobile = () => 
    <li className="menu-item user-link separator-bottom d-lg-none">
    <a className="menu-link user-menu-link">
      <i className="icon login"></i> Log in
      <i className="chevron d-lg-none"></i>
      <i className="arrow-down d-none d-lg-inline-block"></i>
    </a>
  </li>

    return (
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
          <li onClick={()=>showSubMenu({...submenu, careers: true})} style={{cursor:'pointer'}}  className={`menu-item text-nowrap has-submenu ${submenu.careers  && 'active open'}`}>
            <a className="menu-link ">
              Careers Advice
              <i className="chevron d-lg-none"></i>
              <i style={{marginLeft:'5px'}} className="arrow-down d-none d-lg-inline-block"></i>
            </a>
            <div onMouseLeave={()=>showSubMenu({employers:false, careers: false})} className={`submenu text-wrap ${submenu.careers && 'active'}`}>
              <div className="container small-padding-container ">
                <ul className="submenu-item-list list-unstyled">
                  <li className="back-link d-lg-none">
                    <div className="chevron">
                      </div> Careers Advice
                  </li>
                  {loginMobile()}
                  {submenuCareers.map((el, i)=>{
                    return (
                      <li key={i + 'careers'} className="submenu-item">
                    <a
                      href={el.link}
                      className="submenu-link"
                    >
                      <div className="submenu-item-title">
                        {el.title}
                      </div>
                      <div className="submenu-item-description d-none d-lg-block"></div>
                    </a>
                  </li>
                    )
                  })}
                </ul>
              </div>
              <div className="cross"></div>
            </div>
          </li>
          <li onClick={()=>showSubMenu({...submenu, employers: true})} style={{cursor:'pointer'}} className={`menu-item text-nowrap has-submenu ${submenu.employers  && 'active open'}`}>
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
                  {loginMobile()}
                  {submenuEmployers.map((el, i )=>{
                    return (
                      <li key={i + 'empl'}  className="submenu-item">
                    <a
                      href={el.link}
                      className="submenu-link"
                    >
                      <div className="submenu-item-title">
                        {el.title}
                      </div>
                      <div className="submenu-item-description d-none d-lg-block"></div>
                    </a>
                  </li>
                    )
                  })}
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
          <li onMouseLeave={()=>{setShowLoginDropdown(false)}} id="members_nav" className="members_nav nav-item dropdown">
            <a
            onMouseEnter={()=>{setShowLoginDropdown(true)}}
              style={{ marginBottom: "12px" }}
              href="#"
              id="members-nav-icon"
              className={`nav-link has-submenu members_nav_icon_parent ${loginDropdown && 'highlighted'} `}
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
                display: loginDropdown ? "block" : "none",
                top: "auto",
                left: "0px",
                marginLeft: "-103px",
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
  </header>)
}

export default Header;