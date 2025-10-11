import React from 'react'
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AmenitiesPage from './Pages/AmentiesPage';
import InformationPage from './Pages/InformationPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/amenities" element={<AmenitiesPage />}/>
      <Route path="/info" element={<InformationPage />}/>
    </Routes>
  )
}

export default App
