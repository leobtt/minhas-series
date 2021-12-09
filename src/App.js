import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './pages/Header/index'
import Home from './pages/Home/index'
import Generos from './pages/Generos/index'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/" exact element={<Home />} />
          <Route path="generos" exact element={<Generos />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
