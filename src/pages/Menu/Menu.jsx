import { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import gsap from 'gsap'
import './Menu.css'

const Menu = ({ menuAberto }) => {
    const menuPage = useRef(null)
    const menuContainer = useRef(null)

    useEffect(() => {
        if (menuAberto) {
            gsap.to(menuPage.current, {
                opacity: 1,
                duration: 0.5,
                ease: 'power2.out',
                pointerEvents: 'auto'
            })
        } else {
            gsap.to(menuPage.current, {
                opacity: 0,
                duration: 0.4,
                ease: 'power2.in',
                pointerEvents: 'none'
            })
        }
    }, [menuAberto])


    useEffect(() => {
        if (!menuAberto) return

        const tl = gsap.timeline()

        tl.from(menuPage.current, {
            opacity: 0,
            duration: 0.3
        })
            .from(menuContainer.current, {
                y: 30,
                opacity: 0,
                duration: 0.4
            }, '-=0.1')

    }, [menuAberto])


    return (
        <section id="menu-page" ref={menuPage}>
            <div className="menu-container" ref={menuContainer}>
                <NavLink to="/index">Início</NavLink>
                <NavLink>Projetos</NavLink>
                <NavLink>Sobre</NavLink>
                <NavLink className="menu-link contato-link d-flex align-items-center justify-content-between">
                    Contato
                    <i className="bi bi-arrow-up-right"></i>
                </NavLink>
            </div>
        </section>
    )
}

export default Menu
