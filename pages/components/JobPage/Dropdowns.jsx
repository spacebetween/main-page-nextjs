import React, { useState } from "react";

const Dropdowns = () => {
  const listOfTypes = ["All", "Permanent", "Contract", "Temporary"];
  const listOfDistances = [
    "Any",
    "up to 5 miles",
    "up to 10 miles",
    "up to 20 miles",
    "up to 30 miles",
    "up to 50 miles",
  ];
  const listfOfSectors = [
    "All sectors",
    "Accounting",
    "Admin",
    "Agriculture Fishing and Forestry",
    "Airport",
    "Automotive",
    "Banking",
    "Building Services / FM",
    "Building and Construction",
    "Cleaning",
    "Community Services",
    "Construction",
    "Consultancy",
    "Customer Service",
    "Design",
    "Downstream oil and gas",
    "Driving",
    "Education and Training",
    "Electricians &amp; Lightning Protection",
    "Electronics",
    "Engineering",
    "Estate Agent",
    "FMCG",
    "Factory",
    "Financial Services",
    "Graduates and Trainees",
    "HR",
    "Health and Safety",
    "Health and Social Care",
    "Hospitality",
    "IT",
    "Insurance",
    "Legal",
    "Leisure and Sport",
    "Life Sciences",
    "Logistics",
    "Maintenance",
    "Manufacturing",
    "Marketing",
    "Media",
    "New Media and Internet",
    "Not for Profit and Charities",
    "Nursing",
    "Oil and Gas",
    "Procurement",
    "Property and Housing",
    "Public Sector",
    "Recruitment",
    "Recruitment Consultancy",
    "Refrigeration / AC",
    "Retail",
    "Sales",
    "Science",
    "Trade",
    "Travel and Tourism",
  ];

  const initialStateDropdowns = {
    type: false,
    distance: false,
    sector: false,
  };

  const [dropdowns, showDropdowns] = useState(initialStateDropdowns);

  const [selectedFilters, setSelectedFilters] = useState({
    type: "",
    distance: "",
    sector: "",
  });

  const handleSelectType = (el) => {
    setSelectedFilters({ ...selectedFilters, type: el });
  };

  const handleSelectDistance = (el) => {
    setSelectedFilters({ ...selectedFilters, distance: el });
  };

  const handleSelectSector = (el) => {
    setSelectedFilters({ ...selectedFilters, sector: el });
  };

  return (
    <div className="advancedPanel col-md-10">
      <div className="filter-wrapper">
        {selectedFilters.type.length <= 0 ? (
          <div className={dropdowns.type ? "dropdown show" : "dropdown"}>
            <a
              href="#"
              className="btn dropdown-remove"
              style={{ display: "none" }}
              type="button"
            />

            <button
              className="btn dropdown-toggle"
              id="menu-jobTypeInput"
              type="button"
              onFocus={() =>
                showDropdowns({
                  type: true,
                  distance: false,
                  sector: false,
                })
              }
              onBlur={() =>
                showDropdowns({
                  type: true,
                  distance: false,
                  sector: false,
                })
              }
            >
              Job type
            </button>

            <ul
              className={
                dropdowns.type ? "dropdown-menu show" : "dropdown-menu"
              }
              role="menu"
              aria-labelledby="menu-jobTypeInput"
              style={{
                position: "absolute",
                top: "0px",
                left: "0px",
                willChange: "transform",
              }}
            >
              {dropdowns.type &&
                listOfTypes.map((el, i) => {
                  return (
                    <li
                      key={i}
                      style={{ cursor: "pointer" }}
                      className="dropdown-item"
                      onClick={() => handleSelectType(el)}
                    >
                      {el}
                    </li>
                  );
                })}
            </ul>
          </div>
        ) : (
          <div className="dropdown">
            <a
              href="#"
              className="btn dropdown-remove"
              style={{ display: "inline-block" }}
              id="menu-remove-jobTypeInput"
              onClick={() => {
                setSelectedFilters({ ...selectedFilters, type: "" });
                showDropdowns(initialStateDropdowns);
              }}
              type="button"
            >
              <span id="menu-remove-text-jobTypeInput">
                {selectedFilters.type}
              </span>
              &nbsp;
              <span aria-hidden="true">×</span>
            </a>
          </div>
        )}
      </div>
      <div className="filter-wrapper">
        {selectedFilters.distance.length <= 0 ? (
          <div className={dropdowns.distance ? "dropdown show" : "dropdown"}>
            <a
              href="#"
              className="btn dropdown-remove"
              style={{ display: "none" }}
              type="button"
            />
            <button
              className="btn dropdown-toggle"
              id="menu-distanceInput"
              type="button"
              onFocus={() =>
                showDropdowns({
                  type: false,
                  distance: true,
                  sector: false,
                })
              }
              onBlur={() =>
                showDropdowns({
                  type: false,
                  distance: true,
                  sector: false,
                })
              }
            >
              Distance to job
            </button>
            <ul
              className={
                dropdowns.distance ? "dropdown-menu show" : "dropdown-menu"
              }
              role="menu"
              aria-labelledby="menu-distanceInput"
              style={{
                position: "absolute",
                top: "0px",
                left: "0px",
                willChange: "transform",
              }}
            >
              {dropdowns.distance &&
                listOfDistances.map((el, i) => {
                  return (
                    <li
                      key={i + "distance"}
                      style={{ cursor: "pointer" }}
                      className="dropdown-item"
                      onClick={() => {
                        handleSelectDistance(el);
                      }}
                    >
                      {el}
                    </li>
                  );
                })}
            </ul>
          </div>
        ) : (
          <div className="dropdown">
            <a
              href="#"
              className="btn dropdown-remove"
              style={{ display: "inline-block" }}
              id="menu-remove-distanceInput"
              onClick={() => {
                setSelectedFilters({ ...selectedFilters, distance: "" });
                showDropdowns(initialStateDropdowns);
              }}
              type="button"
            >
              <span id="menu-remove-text-distanceInput">
                {selectedFilters.distance}
              </span>
              &nbsp;
              <span aria-hidden="true">×</span>
            </a>
          </div>
        )}
      </div>
      <div className="filter-wrapper">
        {selectedFilters.sector.length <= 0 ? (
          <div className={dropdowns.sector ? "dropdown show" : "dropdown"}>
            <a
              href="#"
              className="btn dropdown-remove"
              style={{ display: "none" }}
              type="button"
            />
            <button
              className="btn dropdown-toggle"
              id="menu-distanceInput"
              type="button"
              onFocus={() =>
                showDropdowns({
                  type: false,
                  distance: false,
                  sector: true,
                })
              }
              onBlur={() =>
                showDropdowns({
                  type: false,
                  distance: false,
                  sector: true,
                })
              }
            >
              Job sector
            </button>

            <ul
              className={
                dropdowns.sector ? "dropdown-menu show" : "dropdown-menu"
              }
              role="menu"
              aria-labelledby="menu-sectorInput"
              style={{
                position: "absolute",
                top: "0px",
                left: "0px",
                willChange: "transform",
              }}
            >
              {dropdowns.sector &&
                listfOfSectors.map((el, i) => {
                  return (
                    <li
                      key={i + "sector"}
                      style={{ cursor: "pointer" }}
                      className="dropdown-item"
                      onClick={() => {
                        handleSelectSector(el);
                      }}
                    >
                      {el}
                    </li>
                  );
                })}
            </ul>
          </div>
        ) : (
          <div className="dropdown">
            <a
              href="#"
              className="btn dropdown-remove"
              style={{ display: "inline-block" }}
              id="menu-remove-sectorInput"
              onClick={() => {
                setSelectedFilters({ ...selectedFilters, sector: "" });
                showDropdowns(initialStateDropdowns);
              }}
              type="button"
            >
              <span id="menu-remove-text-sectorInput">
                {selectedFilters.sector}
              </span>
              &nbsp;
              <span aria-hidden="true">×</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdowns;
