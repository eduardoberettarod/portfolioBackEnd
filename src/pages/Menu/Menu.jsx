import { useEffect, useRef, useCallback } from 'react'
import { NavLink } from 'react-router-dom'
import gsap from 'gsap'
import './Menu.css'

const Menu = ({ menuAberto }) => {
  const menuPage = useRef(null)
  const menuContainer = useRef(null)

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine)
  }, [])

  useEffect(() => {
    if (menuAberto) {
      const tl = gsap.timeline()

      tl.to(menuPage.current, {
        opacity: 1,
        pointerEvents: 'auto',
        duration: 0.3,
        ease: 'power2.out'
      })
      .from(menuContainer.current, {
        y: 30,
        opacity: 0,
        duration: 0.4,
        ease: 'power2.out'
      }, '-=0.1')
    } else {
      gsap.to(menuPage.current, {
        opacity: 0,
        pointerEvents: 'none',
        duration: 0.3,
        ease: 'power2.in'
      })
    }
  }, [menuAberto])

  return (
    <section id="menu-page" ref={menuPage}>

      <div className="menu-container" ref={menuContainer}>
        <NavLink to="/index">Início</NavLink>
        <NavLink>Projetos</NavLink>
        <NavLink>Sobre</NavLink>
        <NavLink className="menu-link contato-link">
          Contato
        </NavLink>
      </div>

    </section>
  )
}

export default Menu
