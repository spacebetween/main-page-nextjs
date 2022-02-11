import { React, useState } from "react";
import Footer from "./components/Common/Footer";
import Header from "./components/Common/Header";
import JobPage from "./components/JobPage/JobPage";
import axios from 'axios';



export default function HomePage({jobs}) {

  console.log(jobs, 'jobs')

  return (
    <div className="mega-navigation">
      <Header />
      <JobPage jobs={jobs} />
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {

  let jobs;
  
  await axios.get('http://localhost:3001/jobs').then(response => {
    jobs = response.data.data.value

  });
  return {
    props: { jobs },
  }
}