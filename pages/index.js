import { React, useState } from "react";
import Footer from "./components/Common/Footer";
import Header from "./components/Common/Header";
import JobPage from "./components/JobPage/JobPage";
import axios from 'axios';

export default function HomePage({jobsWithSectors, sectorsListWithCodes, industries}) {

  return (
    <div className="mega-navigation">
      <Header />
      <JobPage jobs={jobsWithSectors} industries={industries} sectorsListWithCodes={sectorsListWithCodes}/>
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {

  let jobs;
  let industries;

      
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

  const listfOfSectors = [
    {label: "All sectors"},
    {label: "Accounting"},
    {label: "Admin"},
    {label: "Agriculture Fishing and Forestry"},
    {label: "Airport"},
    {label: "Automotive"},
    {label: "Banking"},
    {label: "Building Services / FM"},
    {label: "Building and Construction"},
    {label: "Cleaning"},
    {label: "Community Services"},
    {label: "Construction"},
    {label: "Consultancy"},
    {label: "Customer Service"},
    {label: "Design"},
    {label: "Downstream oil and gas"},
    {label: "Driving"},
    {label: "Education and Training"},
    {label: "Electricians & Lightning Protection"},
    {label: "Electronics"},
    {label: "Engineering"},
    {label: "Estate Agent"},
    {label: "FMCG"},
    {label: "Factory"},
    {label: "Financial Services"},
    {label: "Graduates and Trainees"},
    {label: "HR"},
    {label: "Health and Safety"},
    {label: "Health and Social Care"},
    {label: "Hospitality"},
    {label: "IT"},
    {label: "Insurance"},
    {label: "Legal"},
    {label: "Leisure and Sport"},
    {label: "Life Sciences"},
    {label: "Logistics"},
    {label: "Maintenance"},
    {label: "Manufacturing"},
    {label: "Marketing"},
    {label: "Media"},
    {label: "New Media and Internet"},
    {label: "Not for Profit and Charities"},
    {label: "Nursing"},
    {label: "Oil and Gas"},
    {label: "Procurement"},
    {label: "Property and Housing"},
    {label: "Public Sector"},
    {label: "Recruitment"},
    {label: "Recruitment Consultancy"},
    {label: "Refrigeration / AC"},
    {label: "Retail"},
    {label: "Sales"},
    {label: "Science"},
    {label: "Trade"},
    {label: "Travel and Tourism"},
  ];

  const sectorsListWithCodes = listfOfSectors.reduce((acc, sector)=>{
    const value =  industries.find(industry => sector.label === industry.jobIndustryName || sector.label === industry.alias )
    const id = value ? value.id : 'All sectors'
    return [...acc, {...sector, value: id}]
  }, [])


  return { props: { jobsWithSectors, sectorsListWithCodes, industries} }
}