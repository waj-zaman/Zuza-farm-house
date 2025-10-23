import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import HomePage from './Pages/HomePage'
import AmenitiesPage from './Pages/AmentiesPage'
import InformationPage from './Pages/InformationPage'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])

  return null
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/amenities" element={<AmenitiesPage />} />
        <Route path="/info" element={<InformationPage />} />
      </Routes>
    </>
  )
}

export default App
