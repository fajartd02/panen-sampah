import React from "react";
import Navbar from "../Navbar";
import MapBox from "./MapBox";

function Map() {
  return (
    <>
      <Navbar />
      <div className="container text-center">
        <h1>Map Distribution</h1>
        <MapBox width="50vw" height="50vh" />
      </div>
    </>
  );
}

export default Map;
