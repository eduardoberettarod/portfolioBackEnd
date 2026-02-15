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

import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'

function App() {
  const [menuAberto, setMenuAberto] = useState(false)
  return (
    <>
      <Navbar
        menuAberto={menuAberto}
        setMenuAberto={setMenuAberto}
      />
      <Menu
        menuAberto={menuAberto}
        setMenuAberto={setMenuAberto}
      />


      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/index" element={<Index />} />
        <Route path="/projetos" element={<Project />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />

      </Routes>
    </>
  )
}

export default App
