import { useLayoutEffect, useRef } from 'react'
import './Sobre.css'
import '../../style/CardGlass.css'
import gsap from 'gsap'
import { useLocation } from 'react-router-dom'

const Sobre = () => {
    const location = useLocation()
    const containerRef = useRef(null)
    const cardsRef = useRef(null)

    useLayoutEffect(() => {

        const ctx = gsap.context(() => {

            gsap.fromTo(containerRef.current,
                { x: -20, opacity: 0 },
                { x: 0, opacity: 1, duration: 1 }
            )

            gsap.fromTo(cardsRef.current,
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, delay: 0.5 }
            )

        })

        return () => ctx.revert()

    }, [location.pathname])

    return (
        <section id='sobre-page'>

            <div className="container px-4 px-lg-5 py-5">

                <div className='mb-5 project-title' ref={containerRef}>
                    <h1>Sobre</h1>
                    <div className='mt-3 project-subtitle opacity-75'>
                        <p className='mb-0'>
                            Conheça meus objetivos, minhas metas e a forma como busco transformar ideias em projetos reais.
                        </p>
                    </div>
                </div>

                <div className='row g-4' ref={cardsRef}>

                    <div className='col-lg-6'>
                        <div className='cardGlass p-4 h-100 rounded-3'>
                            <h2 className='mb-3'>Sobre mim</h2>
                            <p className='mb-0 opacity-75'>
                                Desenvolvedor <strong>Full Stack</strong> em constante evolução, com foco na construção de
                                <strong> projetos modernos</strong> que equilibram <strong>design</strong>,
                                <strong> performance</strong> e <strong>experiência do usuário</strong>.
                                Estou sempre buscando evoluir tecnicamente, aplicando <strong>novas tecnologias</strong> para transformar ideias em <strong>soluções digitais</strong> sólidas e bem estruturadas.
                            </p>
                        </div>
                    </div>

                    <div className='col-lg-6'>
                        <div className='row g-4'>

                            <div className='col-12'>
                                <div className='cardGlass p-4 rounded-3'>
                                    <h2 className='mb-3'>Soft Skills</h2>

                                    <ul className='mb-0 ps-3 opacity-75'>
                                        <li className='mb-2'>
                                            <strong>Aprendizado contínuo:</strong> evolução constante através de novos desafios.
                                        </li>

                                        <li className='mb-2'>
                                            <strong>Resolução de problemas:</strong> buscar soluções simples e eficientes.
                                        </li>

                                        <li className='mb-2'>
                                            <strong>Atenção aos detalhes:</strong> foco em design, organização e UX.
                                        </li>

                                        <li>
                                            <strong>Colaboração:</strong> facilidade para trabalhar em equipe e compartilhar ideias.
                                        </li>
                                    </ul>

                                </div>
                            </div>

                            <div className='col-12'>
                                <div className='cardGlass p-4 rounded-3'>
                                    <h2 className='mb-4'>Habilidades Técnicas</h2>

                                    <div className='tech-group mb-3'>
                                        <h6 className='mb-1'>Front-end</h6>
                                        <p className='mb-0 opacity-75'>
                                            React, JavaScript, HTML, CSS, Bootstrap
                                        </p>
                                    </div>

                                    <div className='tech-group mb-3'>
                                        <h6 className='mb-1'>Back-end</h6>
                                        <p className='mb-0 opacity-75'>
                                            Node.js, APIs REST, banco de dados
                                        </p>
                                    </div>

                                    <div className='tech-group'>
                                        <h6 className='mb-1'>Ferramentas & Workflow</h6>
                                        <p className='mb-0 opacity-75'>
                                            Git, GitHub, Figma, deploy com Vercel
                                        </p>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>

                </div>

            </div>

        </section>
    )
}

export default Sobre