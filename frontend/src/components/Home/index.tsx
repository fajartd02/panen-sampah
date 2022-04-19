/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Awardee from "./Awardee";
import Benefit from "./Benefit";
import Convincing from "./Convincing";
import Highlight from "./Highlight";
import StepSend from "./StepSend";
import Subscribe from "./Subscribe";
import Testimonials from "./Testimonials";
import TitleMap from "./TitleMap";
import jwt_decode from 'jwt-decode';
import axios from "axios";

interface HomeInterface {
  username?: string
}

function Home(props: HomeInterface) {
  const { username } = props;
  return (
    <>
      <Navbar username={username}/>
      <Highlight />
      <Convincing />
      <StepSend />
      <Benefit />
      <Awardee />
      <TitleMap />
      <Testimonials />
      <Subscribe />
      <Footer />
    </>
  );
}

export default Home;
