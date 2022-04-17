import { Routes, Route } from 'react-router-dom';
import "./App.css";
import Map from "./components/Map/Map";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/map" element={<Map />} />
      </Routes>

    </div>
      // <Map />
  );
}

export default App;
