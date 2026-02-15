import React from 'react'
import './Contato.css'
import '../../style/CardGlass.css'

const Contato = () => {
    return (
        <>
            <section id='contato-page'>
                <div className="container px-4 px-lg-5 py-5">

                    <div className='mb-5 project-title'>
                        <h1>Contato</h1>
                        <div className='mt-3 project-subtitle opacity-75'>
                            <p className='mb-0'>
                                Aberto a novas conexões, projetos e oportunidades.
                                Vamos conversar.

                            </p>
                        </div>
                    </div>

                    <div className="row g-4">

                        <div className="col-lg-5">
                            <div className="cardGlass p-4 h-100 rounded-3">
                                <div className='row g-3'>

                                    <div className='col-12'>
                                        <h2>Envie uma mensagem</h2>
                                    </div>

                                    <div className='col-12'>
                                        <label className='form-label' htmlFor='nome'>Nome</label>
                                        <input type="text" className='input' placeholder='Seu nome' id='nome' />
                                    </div>

                                    <div className='col-12'>
                                        <label className='form-label' htmlFor='email'>Email</label>
                                        <input type="email" className='input' placeholder='email@email.com' id='email' />
                                    </div>

                                    <div className='col-12'>
                                        <label className='form-label' htmlFor='mensagem'>Mensagem</label>
                                        <textarea type="text" className='input textarea' placeholder='Sua mensagem' id='mensagem' />
                                    </div>

                                    <div className='col-12'>
                                        <button type="submit" className="btn-contato">
                                            Enviar Mensagem <i className="bi bi-arrow-up-right"></i>
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-7">
                            <div className="cardGlass p-4 rounded-3 h-100">

                                <h2 className="mb-1">Redes & Contato</h2>
                                <p className='mb-4 opacity-75'>Clique para ser direcionado.</p>

                                <div className="social-links d-flex flex-column gap-3">

                                    <a
                                        href="https://github.com/eduardoberettarod"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="social-item"
                                    >
                                        <i className="bi bi-github"></i>
                                        <span>GitHub</span>
                                    </a>

                                    <a
                                        href="https://www.linkedin.com/in/eduardo-beretta-a597ba356/"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="social-item"
                                    >
                                        <i className="bi bi-linkedin"></i>
                                        <span>LinkedIn</span>
                                    </a>

                                    <a
                                        href="mailto:eduardo.berettarod@gmail.com"
                                        className="social-item"
                                    >
                                        <i className="bi bi-envelope"></i>
                                        <span>eduardo.berettarod@gmail.com</span>
                                    </a>

                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Contato
