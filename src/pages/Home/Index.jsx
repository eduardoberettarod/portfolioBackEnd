import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import './Index.css'

// components
import Background from '../../components/Background/Background'


const Index = () => {
    const containerHome = useRef(null)
    const containerButton = useRef(null)

    useEffect(() =>{

        gsap.from(containerHome.current, {
            y: 30,
            opacity: 0,
            duration: 1,
            ease: 'power2.out'
        })

        gsap.from(containerButton.current, {
            x:20,
            opacity: 0,
            duration: 1,
            ease: 'power2.out'
        })
    })
    return (
        <>
            <section id='index-page'>
                <Background />

                <div className='container-home' ref={containerHome}>
                    <h1>Eduardo Beretta</h1>
                    <p>Desenvolvedor Full Stack</p>
                </div>
                
                <div className='container-buttons' ref={containerButton}>

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
