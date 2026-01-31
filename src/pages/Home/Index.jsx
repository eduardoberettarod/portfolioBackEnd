import React from 'react'
import './Index.css'

// components
import Background from '../../components/Background/Background'


const Index = () => {
    return (
        <>
            <section id='index-page'>
                <Background />
                <div className='container-home'>
                    <h1>Eduardo Beretta</h1>
                    <p>Desenvolvedor Full Stack</p>
                </div>
                <div className='container-buttons'>
                    <div>
                        <button>
                            <i className="bi bi-github fs-4"></i>
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Index
