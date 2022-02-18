import React from "react";
import DescriptionBody from "./DescriptionBody";
import DescriptionHeader from "./DescriptionHeader";

const Job = ({job, sector, similarJobs}) => {

  return (
    <div className="job-details">
      <DescriptionHeader job={job} sector={sector}  />
      <DescriptionBody similarJobs={similarJobs} job={job} />
    </div>
  );
};

export default Job;
