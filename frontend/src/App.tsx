import { Routes, Route } from 'react-router-dom';
import Map from "./components/Map/Map";
import React from "react";
import Home from './components/Home';
import Login from './components/Login';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/map" element={<Map />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>

    </div>
      // <Map />
  );
}

export default App;
