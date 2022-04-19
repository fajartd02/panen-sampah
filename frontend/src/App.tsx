import { Routes, Route, useNavigate } from 'react-router-dom';
import Map from "./components/Map/Map";
import React, { useEffect, useState } from "react";
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Contact from './components/Contact';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import ServiceSection from './components/ServiceSection';
import Shop from './components/Shop';
import Sampah from './components/Sampah';
import SuccessCheckout from './components/SuccessCheckout';
import Profile from './components/Profile';
import Emas from './components/Emas/indes';
function App() {
  const [id, setId] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [user, setUser] = useState({});
  const [token, setToken] = useState('');
  const [expire, setExpire]: any = useState('');
  const [money, setMoney] = useState(0);
  const [emas, setEmas] = useState(0);
  const navigate = useNavigate();

  interface User {
    userId: number,
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
        setId(decoded.userId);
      } catch (err) {
        navigate('/');
      }
  }

  useEffect(() =>{
    refreshToken();
  }, [])

  return (
    <div>
      <Routes>
        <Route path="/map" element={<Map username={name}/>} />
        <Route path="/" element={<Home username={name}/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact username={name}/>} />
        <Route path="/service" element={<ServiceSection username={name}/>} />
        <Route path="/shop" element={<Shop username={name}/>} />
        <Route path="/sampah" element={<Sampah username={name}/>} />
        <Route path="/successcheckout" element={<SuccessCheckout username={name}/>} />
        <Route path="/profile" element={<Profile username={name}/>} />
        <Route path="/emas" element={<Emas username={name}/>} />
      </Routes>

    </div>
      // <Map />
  );
}

export default App;
