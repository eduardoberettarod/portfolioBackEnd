import React from 'react';
import '../Card/Card.css';
import '../../style/CardGlass.css'

const CardItem = ({ projeto }) => {
    return (
        <div className="card-project">
            <div className="cardGlass p-3 rounded-2">

                <div className="container-visual">
                    <img src={projeto.img} alt={projeto.nomeProjeto} className='img-project' />
                    <div className='cardGlass img-projectLogo'>
                        <img src={projeto.imgLogo} />
                    </div>
                </div>

                <div>
                    <div>
                        <h1 className='title-card'>{projeto.nomeProjeto}</h1>
                    </div>
                    {/* <p>
                        {projeto.descricaoProjeto}
                    </p> */}
                </div>

                <div>
                    <button className='btn-card d-flex align-items-center justify-content-center gap-2'>
                        VER PROJETO <i className='bi bi-display fs-6'></i>
                    </button>
                </div>

            </div>
        </div>
    );
}

export default CardItem;
