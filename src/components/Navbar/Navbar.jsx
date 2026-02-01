import { useEffect, useRef } from 'react'
import './Navbar.css'
import gsap from 'gsap'

const Navbar = ({ menuAberto, setMenuAberto }) => {
  const buttonRef = useRef(null)
  const navbarLogo = useRef(null)

  function fnMostrarMenu() {
    setMenuAberto(prev => !prev)
  }

  useEffect(() => {

    gsap.from(navbarLogo.current, {
      x: -20,
      opacity: 0,
      duration: 1,
      ease: 'power2.out'
    })

  })

  useEffect(() => {
    if (!buttonRef.current) return

    // anima saída
    gsap.to(buttonRef.current, {
      y: -10,
      opacity: 0,
      duration: 0.15,
      ease: 'power1.in',
      onComplete: () => {
        // anima entrada
        gsap.fromTo(
          buttonRef.current,
          { y: 10, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.2,
            ease: 'power1.out'
          }
        )
      }
    })
  }, [menuAberto])

  return (
    <div className="d-flex justify-content-between fixed-top align-items-center navbar-system">
      <div className="container-navbar-image">
        <img src="/image/logo-white.svg" alt="Logo" ref={navbarLogo} />
      </div>

      <div className="container-navbar-button">
        <button
          ref={buttonRef}
          className="button-navbar"
          onClick={fnMostrarMenu}
        >
          {menuAberto ? <i className="bi bi-x-lg" /> : 'MENU'}

        </button>
      </div>
    </div>
  )
}

export default Navbar
