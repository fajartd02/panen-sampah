import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Benefit from "./Benefit";
import Convincing from "./Convincing";
import Highlight from "./Highlight";
import StepSend from "./StepSend";
import Subscribe from "./Subscribe";
import Testimonials from "./Testimonials";

function Home() {
  return (
    <>
      <Navbar />
      <Highlight />
      <Convincing />
      <StepSend />
      <Benefit />
      <Testimonials />
      <Subscribe />
      <Footer />
    </>
  );
}

export default Home;
