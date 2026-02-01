// Estilos
import './App.css'
import './style/global.css'

// Páginas
import Index from './pages/Home/Index'
import Menu from './pages/Menu/Menu'

// Components
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
      <Menu menuAberto={menuAberto} />

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/index" element={<Index />} />
      </Routes>
    </>
  )
}

export default App
