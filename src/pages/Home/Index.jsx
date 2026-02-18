import { useRef, useEffect as useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'
import gsap from 'gsap'
import './Index.css'

// components
import Background from '../../components/Background/Background'

const Index = () => {
  const containerHome = useRef(null)
  const containerButton = useRef(null)
  const containerDesc = useRef(null)

  const location = useLocation()

  useLayoutEffect(() => {
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
        duration: 1.2,
        ease: 'power2.out'
      }
    )

    gsap.fromTo(
      containerDesc.current,
      { y: 20, opacity: 0 },
      {
        y: 0,
        delay: 0.5,
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
          <a href='https://github.com/eduardoberettarod' target='_blank' className='text-decoration-none text-white'>
            <i className="bi bi-github fs-4"></i>
          </a>
        </div>
      </div>

    <div className='container-desc' ref={containerDesc}>
      <p>
        Os detalhes técnicos deste projeto, incluindo tecnologias utilizadas e estrutura de desenvolvimento, estão descritos no README.md disponível no GitHub.
      </p>
    </div>

    </section>
  )
}

export default Index
