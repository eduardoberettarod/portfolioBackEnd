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
                    {/* <p>
                        {projeto.descricaoProjeto}
                    </p> */}
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
                            <img src={projeto.img} alt=""  className='img-fluid object-fit-cover'/>
                        </div>
                        <p>{projeto.descricaoProjeto}</p>
                    </div>

                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            Fechar
                        </button>
                    </div>
                </div>
            </div>
        </div>

    </>

    );
}

export default CardItem;
