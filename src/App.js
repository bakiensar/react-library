import React from 'react'
import Home from './Pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddBook from './Pages/AddBook'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-book" element={<AddBook />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
