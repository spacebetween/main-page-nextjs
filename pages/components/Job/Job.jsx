import React from "react";
import DescriptionBody from "./DescriptionBody";
import DescriptionHeader from "./DescriptionHeader";

const Job = ({job, sector, similarJobs, linkToShare}) => {

  return (
    <div className="job-details">
      <DescriptionHeader job={job} sector={sector}  />
      <DescriptionBody similarJobs={similarJobs} linkToShare={linkToShare} job={job} />
    </div>
  );
};

export default Job;
