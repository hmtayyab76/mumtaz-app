"use client";
import React, { useState, useEffect } from "react";
import Header from "../Header/page";
import HowToUse from "../how-to-use/page";
import WhyMumtaz from "../why-mumtaz/page";
import Loading from "../../component/loading/page"; // Import the Loading component
import Footer from "../footer/page";

function HomePage() {
  // const [isLoading, setLoading] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1000);
  // }, []);

  return (
    <>
      {/* {isLoading ? (
        <Loading />
      ) : (
        <> */}
      <Header />
      <WhyMumtaz />
      <HowToUse />
      <Footer />
      {/* </>
      )} */}
    </>
  );
}

export default HomePage;
