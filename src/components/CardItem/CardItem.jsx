import { useRef } from 'react';
import '../Card/Card.css';
import './CardItem.css'
import '../../style/CardGlass.css'
import * as bootstrap from 'bootstrap';

const CardItem = ({ projeto }) => {

    const modalRef = useRef(null);

    const abrirModal = () => {
        const modal = new bootstrap.Modal(modalRef.current);
        modal.show();
    };

    return (<>

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
                    <p className='small opacity-75' style={{ fontFamily: 'Neue Montreal', letterSpacing: '1.2px' }}>
                        {projeto.ano}
                    </p>
                </div>

                <div>
                    <button
                        className="btn-card d-flex align-items-center justify-content-center gap-2"
                        onClick={abrirModal}
                    >
                        VER PROJETO <i className="bi bi-display fs-6"></i>
                    </button>
                </div>

            </div>
        </div>

        <div
            className="modal fade"
            tabIndex={-1}
            ref={modalRef}
        >
            <div className="modal-dialog modal-dialog-centered modal-xl">
                <div className="modal-content modal-project">
                    <div className="modal-header">
                        <h5 className="modal-title">{projeto.nomeProjeto}</h5>
                        <button
                            type="button"
                            className="btn btn-close-custom"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        >
                            <i className="bi bi-x-lg"></i>
                        </button>
                    </div>

                    <div className="modal-body">
                        <div className='mb-4'>
                            <img src={projeto.img} alt="" className='img-fluid object-fit-cover' />
                            <div className='w-100 mt-4'>
                                <ul className='tags-project'>
                                    {Array.isArray(projeto.tags)
                                        ? projeto.tags.map((tag, idx) => (
                                            <li key={idx}>{tag}</li>
                                        ))
                                        : <li>{projeto.tags}</li>
                                    }
                                </ul>
                            </div>
                        </div>
                        <p>{projeto.descricaoProjeto}</p>
                    </div>

                    <div className="modal-footer">
                        <div className='row g-2 w-100'>

                            <div className='col-12 col-md-6'>
                                <button className='d-flex gap-2 justify-content-center align-items-center btn-live'>
                                    Ver Projeto Online <i className="bi bi-arrow-up-right"></i>
                                </button>
                            </div>

                            <div className='col-12 col-md-6'>
                                <button className='d-flex gap-2 justify-content-center align-items-center btn-github'>
                                    Ver no Github
                                    <i className='bi bi-github'></i>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>

    );
}

export default CardItem;
