import { useEffect ,useRef} from 'react'
import { useLocation } from 'react-router-dom'
import gsap from 'gsap'
import './Project.css'

// components
import CardBlack from '../../components/Card/Card'


const Project = () => {

  const containerRef = useRef(null)
  const location = useLocation()

   useEffect(() => {

    gsap.fromTo(
      containerRef.current,
      { x: -30, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out'
      }
    )

  }, [location.pathname])

  return (
    <>
      <section id='project-page'>
        <div className="container px-4 px-lg-5 py-5">
          <div className='mb-4 project-title' ref={containerRef}>
            <h1>Projetos</h1>
            <div className='mt-3 project-subtitle'>
              <h3 className='mb-0'>Projetos selecionados</h3>
              <p>Cada um deles representa um avanço na minha evolução como desenvolvedor.</p>
            </div>
          </div>
          <CardBlack />
        </div>
      </section>
    </>

  )
}

export default Project
