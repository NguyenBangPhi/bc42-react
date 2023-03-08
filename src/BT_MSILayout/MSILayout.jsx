import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import PhoneList from "./PhoneList";
import LaptopList from "./LaptopList";
import Footer from "./Footer";

function MSILayout() {
  return (
    <div className="bg-dark">
      <Navbar />
      <Banner />
      <PhoneList />
      <LaptopList />
      <Footer />
    </div>
  );
}

export default MSILayout;
