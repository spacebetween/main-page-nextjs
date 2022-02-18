import React from "react";
import { listOfTypes, listOfDistances } from "../helperLists";

const Dropdowns = ({
  handleSelectFilter,
  selectedFilters,
  cleanFilter,
  showDropdowns,
  hideDropdowns,
  dropdowns,
  sectorsListWithCodes,
}) => {
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
              onBlur={() => hideDropdowns("type")}
              onClick={() => showDropdowns("type")}
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
                      onMouseDown={(e) => {
                        e.preventDefault();
                        handleSelectFilter("type", el);
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
              id="menu-remove-jobTypeInput"
              onClick={() => {
                cleanFilter("type");
                showDropdowns("closeAll");
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
              onBlur={() => hideDropdowns("distance")}
              onClick={() => showDropdowns("distance")}
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
                      onMouseDown={(e) => {
                        e.preventDefault();
                        handleSelectFilter("distance", el.value);
                      }}
                    >
                      {el.label}
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
                cleanFilter("distance");
                showDropdowns("closeAll");
              }}
              type="button"
            >
              <span id="menu-remove-text-distanceInput">
                {
                  listOfDistances.find(
                    (el) => el.value === selectedFilters.distance
                  ).label
                }
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
              onBlur={() => hideDropdowns("sector")}
              onClick={() => showDropdowns("sector")}
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
                sectorsListWithCodes.map((el, i) => {
                  return (
                    <li
                      key={i + "sector"}
                      style={{ cursor: "pointer" }}
                      className="dropdown-item"
                      onMouseDown={(e) => {
                        e.preventDefault();
                        handleSelectFilter("sector", el.value);
                      }}
                    >
                      {el.label}
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
                cleanFilter("sector");
                showDropdowns("closeAll");
              }}
              type="button"
            >
              <span id="menu-remove-text-sectorInput">
                {
                  sectorsListWithCodes.find(
                    (el) => el.value === selectedFilters.sector
                  ).label
                }
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
