import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Awardee from "./Awardee";
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
      <Awardee />
      <Testimonials />
      <Subscribe />
      <Footer />
    </>
  );
}

export default Home;
