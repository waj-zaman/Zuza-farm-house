import React from 'react'
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AmenitiesPage from './Pages/AmentiesPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/amenities" element={<AmenitiesPage />}/>
    </Routes>
  )
}

export default App
