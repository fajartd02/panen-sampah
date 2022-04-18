import React from "react";
import Navbar from "../Navbar";
import Highlight from "./Highlight";
import Subscribe from "./Subscribe";
import Testimonials from "./Testimonials";

function Home() {
  return (
    <>
      <Navbar />
      <Highlight />
      <Testimonials />
      <Subscribe />
    </>
  );
}

export default Home;
