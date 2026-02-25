import { useRef, useEffect as useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'
import gsap from 'gsap'
import './Index.css'

// components
import Background from '../../components/Background/Background'

const Index = ({ loading }) => {
  const containerLed = useRef(null)
  const containerEdu = useRef(null)
  const containerButton = useRef(null)
  const containerDesc = useRef(null)

  const location = useLocation()

  useLayoutEffect(() => {

  if (loading) return

  const tl = gsap.timeline()

  tl.fromTo(
    containerLed.current,
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 1, ease: 'power2.out' }
  )
  .fromTo(
    containerEdu.current,
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 1.3, ease: 'power2.out' },
    "-=0.3"
  )
  .fromTo(
    containerButton.current,
    { x: 20, opacity: 0 },
    { x: 0, opacity: 1, duration: 1.3, ease: 'power2.out' },
    "-=1"
  )
  .fromTo(
    containerDesc.current,
    { y: 20, opacity: 0 },
    { y: 0, opacity: 1, duration: 1.3, ease: 'power2.out' },
    "-=1"
  )

  return () => {
    tl.kill()
  }

}, [location.pathname, loading])  

  return (
    <section id="index-page">
      <Background />

      <div className="container-home">
        <div className='d-flex text-led' ref={containerLed}>
          <div className='word'>
            <span>H</span>
            <span id='reverse'>E</span>
            <span>L</span>
            <span>L</span>
            <span>O</span>
          </div>

          <div className='word'>
            <span>W</span>
            <span>O</span>
            <span>R</span>
            <span>L</span>
            <span>D</span>
          </div>
        </div>
        <h3 className='text-edu d-flex gap-3' ref={containerEdu}>
            <span>EDUARDO</span>
            <span>BERETTA</span>
        </h3>
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
