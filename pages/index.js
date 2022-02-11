import { React, useState } from "react";
import Footer from "./components/Common/Footer";
import Header from "./components/Common/Header";
import Link from 'next/link'
import JobPage from "./components/JobPage/JobPage";

export default function Home() {


  return (
    <div className="mega-navigation">
      <Header/>
      <JobPage/>
      <Footer/>
    </div>
  );
}
