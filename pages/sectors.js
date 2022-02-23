import { React, useState } from "react";
import Footer from "./components/Common/Footer";
import Header from "./components/Common/Header";
import SectorJobs from "./components/SectorJobs/SectorJobs";
import axios from "axios";

export default function Sector({
  jobsList,
  sectorsListWithCodes,
  numberOfJobs,
  numberOfPages,
  params,
  paginationMessage,
  sector,
}) {
  return (
    <div className="mega-navigation">
      <Header />
      <SectorJobs
        numberOfJobs={numberOfJobs}
        numberOfPages={numberOfPages}
        jobs={jobsList}
        params={params}
        sectorsListWithCodes={sectorsListWithCodes}
        paginationMessage={paginationMessage}
        sector={sector}
      />
      <Footer />
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const { page, sortBy, jobIndustryIds, sector } = query;

  let params = {
    excludeNationwide: true,
    activeOnly: true,
    page: page || 1,
  };
  if (sortBy) {
    params.sortBy = sortBy;
  }
  if (jobIndustryIds) {
    params.jobIndustryIds = jobIndustryIds;
  }

  let jobs;
  let industries;
  let websites;
  let numberOfJobs;

  await axios
    .get("http://localhost:3001/jobs", {
      params,
    })
    .then((response) => {
      jobs = response.data.data.value;
      numberOfJobs = response.data.data.totalCount;
    });

  await axios.get("http://localhost:3001/industries").then((response) => {
    industries = response.data.data.value;
  });

  await axios.get("http://localhost:3001/websites").then((response) => {
    websites = response.data.data.value;
  });

  const listfOfSectors = [
    { label: "All sectors" },
    { label: "Accounting" },
    { label: "Admin" },
    { label: "Agriculture Fishing and Forestry" },
    { label: "Airport" },
    { label: "Automotive" },
    { label: "Banking" },
    { label: "Building Services / FM" },
    { label: "Building and Construction" },
    { label: "Cleaning" },
    { label: "Community Services" },
    { label: "Construction" },
    { label: "Consultancy" },
    { label: "Customer Service" },
    { label: "Design" },
    { label: "Downstream oil and gas" },
    { label: "Driving" },
    { label: "Education and Training" },
    { label: "Electricians & Lightning Protection" },
    { label: "Electronics" },
    { label: "Engineering" },
    { label: "Estate Agent" },
    { label: "FMCG" },
    { label: "Factory" },
    { label: "Financial Services" },
    { label: "Graduates and Trainees" },
    { label: "HR" },
    { label: "Health and Safety" },
    { label: "Health and Social Care" },
    { label: "Hospitality" },
    { label: "IT" },
    { label: "Insurance" },
    { label: "Legal" },
    { label: "Leisure and Sport" },
    { label: "Life Sciences" },
    { label: "Logistics" },
    { label: "Maintenance" },
    { label: "Manufacturing" },
    { label: "Marketing" },
    { label: "Media" },
    { label: "New Media and Internet" },
    { label: "Not for Profit and Charities" },
    { label: "Nursing" },
    { label: "Oil and Gas" },
    { label: "Procurement" },
    { label: "Property and Housing" },
    { label: "Public Sector" },
    { label: "Recruitment" },
    { label: "Recruitment Consultancy" },
    { label: "Refrigeration / AC" },
    { label: "Retail" },
    { label: "Sales" },
    { label: "Science" },
    { label: "Trade" },
    { label: "Travel and Tourism" },
  ];

  // Add id value from backend for every sector that is in the sectors dropdown list
  const sectorsListWithCodes = listfOfSectors.reduce((acc, sector) => {
    const value = industries.find(
      (industry) =>
        sector.label === industry.jobIndustryName ||
        sector.label === industry.alias
    );
    const id = value ? value.id : "All sectors";
    return [...acc, { ...sector, value: id }];
  }, []);

  // Assign website to each job to determine agency logo and link
  const jobsList = jobs.reduce((acc, agency) => {
    const website = websites.find(
      (website) => agency.primaryWebsiteId === website.id
    );
    return [...acc, { ...agency, website: website.websiteName }];
  }, []);

  // Pagination Data:
  const itemsPerPage = 50;
  const selectedPageNumber = Number(page) || 1;
  const numberOfPages = Math.ceil(numberOfJobs / itemsPerPage);
  let paginationMessage;

  let startOfSet;
  let endOfSet;

  if (numberOfPages === 1) {
    paginationMessage = `${numberOfJobs} of ${numberOfJobs} jobs`;
  } else {
    startOfSet =
      selectedPageNumber === 1
        ? 1
        : selectedPageNumber +
          itemsPerPage * selectedPageNumber -
          itemsPerPage -
          selectedPageNumber;
    endOfSet = selectedPageNumber * itemsPerPage;
    paginationMessage = `${startOfSet} - ${
      endOfSet > numberOfJobs ? numberOfJobs : endOfSet
    } of ${numberOfJobs} jobs`;
  }


  return {
    props: {
      jobsList,
      sectorsListWithCodes,
      numberOfJobs,
      params,
      paginationMessage,
      numberOfPages,
      sector: sector || "",
    },
  };
}
