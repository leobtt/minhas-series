import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'

import Header from './pages/Header/index'
import Home from './pages/Home/index'
import Generos from './pages/Generos/index'
import NovoGenero from './pages/Generos/NovoGenero'
import EditarGenero from './pages/Generos/EditarGenero'
import Series from './pages/Series/index'
import NovaSerie from './pages/Series/NovaSerie'
import EditarSerie from './pages/Series/EditarSerie'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/" exact element={<Home />} />
          <Route path="generos" exact element={<Generos />} />
          <Route path="generos/novo" exact element={<NovoGenero />} />
          <Route path="generos/:id" exact element={<EditarGenero />} />
          <Route path="series" element={<Series />} />
          <Route path="series/novo" element={<NovaSerie />} />
          <Route path="series/:id" element={<EditarSerie />} />
          <Route path="*" exact element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
