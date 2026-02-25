// Estilos
import './App.css'
import './style/global.css'

// Páginas
import Index from './pages/Home/Index'
import Project from './pages/Projects/Project'
import Sobre from './pages/Sobre/Sobre'
import Contato from './pages/Contato/Contato'

// Components
import Menu from './pages/Menu/Menu'
import Navbar from './components/Navbar/Navbar'
import Loader from './components/Loader/Loader'

import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'

function App() {
  const [menuAberto, setMenuAberto] = useState(false)
  const [loading, setLoading] = useState(true)

  return (
    <>
      {loading && <Loader onComplete={() => setLoading(false)} />}

      <Navbar
        menuAberto={menuAberto}
        setMenuAberto={setMenuAberto}
      />

      <Menu
        menuAberto={menuAberto}
        setMenuAberto={setMenuAberto}
      />

      <Routes>
        <Route path="/" element={<Index loading={loading} />} />
        <Route path="/index" element={<Index loading={loading} />} />
        <Route path="/projetos" element={<Project />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </>
  )
}

export default App
