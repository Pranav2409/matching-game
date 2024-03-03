import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Screen2 from './Screen2';
import ActScreen from './ActScreen'; // Import the ActivityScreen component
import FinalScreen from './FinalScreen';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Screen2" element={<Screen2 />} />
        <Route path="/ActScreen" element={<ActScreen />} /> {/* Route to ActivityScreen*/}
        <Route path ="/FinalScreen" element={<FinalScreen/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
