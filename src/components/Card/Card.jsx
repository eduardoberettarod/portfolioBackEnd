import React from 'react'
import './Card.css'

import Portfolio from '/image/portfolio.png'

const Card = () => {
  return (
    <>
      <div className='cardBlack'>
        <div>
            <img src={Portfolio} alt="" />
        </div>
      </div>
    </>
  )
}

export default Card
