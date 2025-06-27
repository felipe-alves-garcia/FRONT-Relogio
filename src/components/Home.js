//import { useNavigate } from "react-router-dom";

//const navigate = useNavigate();

function Home (){


    return(
        <>
            <div className="container pt-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-6 mb-4">
                        <a href="/relogio" className="a bg1 p-5 d-flex justify-content-center rounded-5 text-decoration-none">
                            <div className="text-white fs-4 d-flex align-items-center">
                                <i className="bi bi-plus-circle me-3"></i>
                                <h2 className="m-0 fs-4">Novo Relógio Ponto</h2>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <a href="/relogios/0/0/0/0/0" className="a bg1 p-5 d-flex justify-content-center rounded-5 text-decoration-none">
                            <div className="text-white fs-4 d-flex align-items-center">
                                <i className="bi bi-list me-3"></i>
                                <h2 className="m-0 fs-4">Lista de Relógios Ponto</h2>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-6">
                        <a href="/geral" className="a bg1 p-5 d-flex justify-content-center rounded-5 text-decoration-none">
                            <div className="text-white fs-4 d-flex align-items-center">
                                <i className="bi bi-journal-arrow-down me-3"></i>
                                <h2 className="m-0 fs-4">Baixar Todos os AFDs</h2>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;