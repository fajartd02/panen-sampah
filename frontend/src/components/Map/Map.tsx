import React from "react";
import Navbar from "../Navbar";
import MapBox from "./MapBox";

function Map() {
  return (
    <>
      <Navbar />
      <div className="container text-center">
        <h1 className="fs-1 fw-bold" style={{paddingTop: '2%', color: '#e65f52'}}>Map Distribution</h1>
        <MapBox width="50vw" height="50vh" />
      </div>
    </>
  );
}

export default Map;
