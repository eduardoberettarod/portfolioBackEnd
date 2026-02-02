import React from 'react';
import '../Card/Card.css';

const CardItem = ({ projeto }) => {
    return (
        <div className="card-project mb-4">
            <div className="row g-3">

                {/* Coluna lateral: Ano e Link */}
                <div className="col-md-4 d-flex flex-column justify-content-between">
                    <div className="card-ano mb-3">
                        <h2>{projeto.ano}</h2>
                    </div>

                    <div>
                        <a href={projeto.github} className="card-a" target="_blank" rel="noopener noreferrer">
                            Ver no Github
                            <i className="bi bi-github fs-6"></i>
                        </a>
                    </div>
                </div>

                {/* Coluna principal: Título, descrição e tags */}
                <div className="col-md-8 bg-dark py-4 px-4 rounded-3">
                    <div className="d-grid gap-3">

                        <div className="card-title d-flex align-items-center gap-3">
                           
                                <a href={projeto.link} target='_blank' rel='noopener noreferrer'>{projeto.nomeProjeto}</a>
                                <i className="bi bi-arrow-up-right fs-6 "></i>
                            
                        </div>

                        <div className="card-content">
                            <p>{projeto.descricaoProjeto}</p>
                        </div>

                        <div className="container-tags">
                            <ul className="d-flex gap-2 flex-wrap list-unstyled">
                                {projeto.tags.map((tag, index) => (
                                    <li key={index} className=" tag-item">{tag}</li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default CardItem;
