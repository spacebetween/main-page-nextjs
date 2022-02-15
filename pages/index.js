import { React, useState } from "react";
import Footer from "./components/Common/Footer";
import Header from "./components/Common/Header";
import JobPage from "./components/JobPage/JobPage";
import axios from 'axios';



export default function HomePage({jobsWithSectors}) {

  return (
    <div className="mega-navigation">
      <Header />
      <JobPage jobs={jobsWithSectors}/>
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {

  let jobs;
  let industries;
  let websiteLink;

      
  await axios.get('http://localhost:3001/jobs?').then(response => {
    jobs = response.data.data.value
  });

    await axios.get('http://localhost:3001/industries').then(response => {
    industries = response.data.data.value
  });  

 // ADD SECTOR TO EVERY JOB
  const jobsWithSectors = jobs.reduce((acc, job)=>{
    const industry = industries.find(industry => industry.id === job.jobIndustryId);
    return [...acc, {...job, sector: industry.jobIndustryName}]
  }, [])


  return { props: { jobsWithSectors} }
}