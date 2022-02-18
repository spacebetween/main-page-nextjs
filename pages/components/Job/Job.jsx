import React from "react";
import DescriptionBody from "./DescriptionBody";
import DescriptionHeader from "./DescriptionHeader";

const Job = ({job, sector}) => {

    const similarJobs = [{
      title: "ZLOTA RACZKA",
      salary: "30000k",
      ref: "1dsdfBC",
      location: "London",
      type: "Temporary",
      sector: "Cleaner",
      requirements:
        "fdgfgdfgdgfddsfdsfsdfdsfsd REQUIREMENTS, dfdsfdsfsdfdsfsd REQUIREMENTS, dfdsfdsfsdfdsfsd REQUIREMENTS, dfdsfdsfsdfdsfsd REQUIREMENTS, dfdsfdsfsdfdsfsd REQUIREMENTS, dfdsfdsfsdfdsfsd REQUIREMENTS, dfdsfdsfsdfdsfsd REQUIREMENTS, dfdsfdsfsdfdsfsd REQUIREMENTS, dfdsfdsfsdfdsfsd REQUIREMENTS, dfdsfdsfsdfdsfsd  ",
      }]; 

  return (
    <div className="job-details">
      <DescriptionHeader job={job} sector={sector}  />
      <DescriptionBody job={job} similarJobs={similarJobs} />
    </div>
  );
};

export default Job;
