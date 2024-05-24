import React, { useEffect } from 'react'
import { Route, Routes, useLocation, Navigate } from 'react-router-dom'

import './App.css'

import MainLayout from './layouts/Main'
import FullScreenLayout from './layouts/FullScreen'
import Home from './views'

function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path='/' element={<Navigate to='/home' replace />} />
        <Route path='/home' element={<Home />} />
      </Route>
      <Route path='/' element={<FullScreenLayout />}></Route>
      <Route path='*' element={<div>404 Page</div>} />
    </Routes>
  )
}

export default App
