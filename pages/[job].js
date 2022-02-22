import { React, useState } from "react";
import Footer from "./components/Common/Footer";
import Header from "./components/Common/Header";
import JobDescription from "./components/Job/Job";
import axios from 'axios';

const Job = ({job, sector, similarJobs, linkToShare}) => {

  return (
    <div className="mega-navigation">
      <Header />
      <JobDescription job={job} sector={sector} similarJobs={similarJobs} linkToShare={linkToShare} />
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {

  const { id } = context.query;
  const { elo } = context.params;

  console.log(elo, 'ELO')

  let job;
  let industries;
  let sector;
  let similarJobs;
  let linkToShare;

  await axios.get(`http://localhost:3001/jobs/${id}`).then(response => {
    job = response.data.data.value
  }).catch((e) => {
    return { redirect: '/error' }
  });

  await axios.get('http://localhost:3001/industries').then(response => {
    industries = response.data.data.value
  });  


  const listfOfSectors = [
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

  if (job) {
    sectorsListWithCodes.map((el)=>{
      if (el.value === job.jobIndustryId) {
        sector = el.label
      }
    })
    linkToShare = `${job.jobTitle.replace(/[^0-9a-zA-Z. ]/g, '').split(' ').filter(x => x.length > 0).join('-').toLowerCase()}` + `?id=` +`${id}` 
  }

  // FOR SIMILAR JOBS:
if (job) {
  await axios
  .get("http://localhost:3001/jobs", {
    params: {
      excludeNationwide: true,
      activeOnly: true,
      jobIndustryIds: job.jobIndustryId,
      latitude: job.geoLocation.coordinates[0],
      longitude: job.geoLocation.coordinates[1],
      items: 6
    }
  })
  .then((response) => {
    similarJobs = response.data.data.value
  })
  .catch((e) => console.log("error", e));
}

if (job) {
  return { props: { job:job, sector, similarJobs, linkToShare} }
} return { redirect : '/error'}
}

export default Job;