// Estilos
import './App.css'
import './style/global.css'

// Páginas
import Index from './pages/Home/Index'
import Project from './pages/Projects/Project'

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
      </Routes>
    </>
  )
}

export default App
