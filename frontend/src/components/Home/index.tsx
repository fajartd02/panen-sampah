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

function Home() {
  const [id, setId] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [users, setUsers] = useState([]);
  const [token, setToken] = useState('');
  const [expire, setExpire]: any = useState('');
  const navigate = useNavigate();

  interface User {
    id: number,
    name: string,
    email: string,
    exp: any
  }

  const axiosJWT = axios.create();
  axiosJWT.interceptors.request.use(async (config: any) => {
    const currentDate = new Date();
    if (expire * 1000 < currentDate.getTime()) {
      const response = await axios.get('http://localhost:5000/token');
      config.headers.Authorization = `Bearer ${response.data.accessToken}`;
      setToken(response.data.accessToken);
      const decoded: User = jwt_decode(response.data.accessToken);
      setName(decoded.name);
      setExpire(decoded.exp);
    }
    return config;
  }, (err) => {
    return Promise.reject(err);
  });

  const refreshToken = async() => {
      try {
        const response = await axios.get('http://localhost:5000/token');
        setToken(response.data.accessToken);
        const decoded: User = jwt_decode(response.data.accessToken);
        setName(decoded.name);
        setEmail(decoded.email);
        setId(id);
      } catch (err) {
        navigate('/');
      }
  }

  const getUsers = async () => {
    const response = await axiosJWT.get('http://localhost:5000/users', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    setUsers(response.data);
  }

  useEffect(() =>{
    refreshToken();
    getUsers();
  }, [])

  return (
    <>
      <Navbar username={name} />
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
