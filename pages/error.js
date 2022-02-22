import { React, useState } from "react";
import Footer from "./components/Common/Footer";
import Header from "./components/Common/Header";
import Link from "next/link"

const ErrorPage  = () => {

  return (
    <div className="mega-navigation">
      <Header />
      <div style={{padding:'18rem'}} >
          TEMPORARY PROBLEM
      </div>
      <Link href='/'>
      <button>REFRESH</button>
      </Link>
      <Footer />
    </div>
  );
}

export default ErrorPage;