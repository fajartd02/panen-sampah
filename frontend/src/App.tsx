import { Routes, Route } from 'react-router-dom';
import Map from "./components/Map/Map";
import React from "react";
import Home from './components/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/map" element={<Map />} />
        <Route path="/" element={<Home />} />
      </Routes>

    </div>
      // <Map />
  );
}

export default App;
