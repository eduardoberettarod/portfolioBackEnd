import React from 'react'
import './Project.css'

// components
import CardBlack from '../../components/Card/Card'


const Project = () => {
  return (
    <>
      <section id='project-page'>
        <div className='d-flex justify-content-between'>

          <div className='container-text'>
            <h1>Projetos</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi eos accusantium iusto aliquam voluptatem minima ullam omnis delectus debitis totam quis voluptates labore harum et numquam dicta, maiores fugit ex.</p>
          </div>

          <div className=''>
            <CardBlack />
          </div>

        </div>


      </section>
    </>

  )
}

export default Project
