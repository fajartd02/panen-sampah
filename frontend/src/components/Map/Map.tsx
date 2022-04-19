import React from "react";
import Navbar from "../Navbar";
import MapBox from "./MapBox";

interface MapInterface {
  username?: string
}

function Map(props: MapInterface) {
  const { username } = props;
  return (
    <>
      <Navbar username={username}/>
      <div className="container text-center">
        <h1 className="fs-1 fw-bold" style={{marginTop: '10%', color: '#e65f52'}}>Map Distribution</h1>
        <div className="center" style={{margin: '2% 20%'}}>
          <MapBox width="50vw" height="50vh" />
        </div>
      </div>
    </>
  );
}

export default Map;
