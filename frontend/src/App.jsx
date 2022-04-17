import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainMap from './Components/Map/MainMap';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  exact path="/map" element={<MainMap />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
