import { useRef, useEffect } from 'react'
import { useLocation } from 'react-router-dom' // 🔥 1. importar isso
import gsap from 'gsap'
import './Index.css'

// components
import Background from '../../components/Background/Background'

const Index = () => {
  const containerHome = useRef(null)
  const containerButton = useRef(null)

  const location = useLocation() // 🔥 2. pegar a rota atual

  useEffect(() => {
    // 🔹 sempre que entrar no /index, isso roda

    gsap.fromTo(
      containerHome.current,
      { y: 30, opacity: 0 },   // estado inicial
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out'
      }
    )

    gsap.fromTo(
      containerButton.current,
      { x: 20, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out'
      }
    )

  }, [location.pathname]) // 🔥 3. isso é a chave

  return (
    <section id="index-page">
      <Background />

      <div className="container-home" ref={containerHome}>
        <h1>Eduardo Beretta</h1>
        <p>Desenvolvedor Full Stack</p>
      </div>

      <div className="container-buttons" ref={containerButton}>
        <div>
          <button>
            <i className="bi bi-github fs-4"></i>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Index
