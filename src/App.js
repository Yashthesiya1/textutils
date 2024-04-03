import React from "react";
import "./App.css";
// import Navbar from "./componets/Navbar"
import From from "./componets/From"
// import Hero from "./componets/Hero"
function demo() {
  return (
    <>
      {/* <div className="container text-info text-bg-dark mt-3 mx-auto"><Navbar /></div> */}
      <div className="container mt-3 ">
        <From  heading="Enter The Text "/>
        {/* <Hero title="Props IS Here"/> */}
        {/* <Hero/> */}
      </div>
    </>
  );
};
export default demo; 