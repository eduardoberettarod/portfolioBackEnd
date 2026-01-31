// Estilos
import './App.css'
import './style/global.css'

// Páginas
import Index from './pages/Home/Index'
import Menu from './pages/Menu/Menu'

// Components
import Navbar from './components/Navbar/Navbar'

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <Menu />

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/index" element={<Index />} />
      </Routes>
    </>
  )
}

export default App
