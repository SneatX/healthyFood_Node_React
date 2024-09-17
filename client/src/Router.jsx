import React from 'react';
import { Route, Routes } from "react-router-dom"

import Home from './pages/Home';
import LogIn from './pages/LogIn';
import "../index.css"

export default function Router() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LogIn />} />
    </Routes>
  )
}

