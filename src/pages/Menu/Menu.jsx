import React from 'react'
import './Menu.css'
import { NavLink } from 'react-router-dom'


const Menu = () => {
    return (
        <>
            <section id="menu-page">
                <div className="menu-container">
                    <NavLink to="/index">Início</NavLink>
                    <NavLink>Projetos</NavLink>
                    <NavLink>Sobre</NavLink>
                    <NavLink>Contato</NavLink>
                </div>
            </section>
        </>
    )
}

export default Menu
