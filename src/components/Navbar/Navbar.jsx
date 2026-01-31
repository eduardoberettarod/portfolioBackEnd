import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
      <div className='d-flex justify-content-between fixed-top align-items-center navbar-system'>
        <div className='container-navbar-image'>
          <img src="/image/logo-white.svg" alt="" />
        </div>

        <div className='container-navbar-button'>
          <button className='button-navbar'>
            MENU
          </button>
        </div>
      </div>
    </>
  )
}

export default Navbar
