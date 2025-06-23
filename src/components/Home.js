//import { useNavigate } from "react-router-dom";

//const navigate = useNavigate();

function Home (){


    return(
        <>
            <div className="container pt-5">
                <div className="row">
                    <div className="col-6">
                        <a href="/relogio" className="a bg1 p-5 d-flex justify-content-center rounded-5 text-decoration-none">
                            <div className="text-white fs-4 d-flex">
                                <i className="bi bi-clock-fill me-3"></i>
                                <h2 className="m-0 mt-1 fs-4">Novo Relógio Ponto</h2>
                            </div>
                        </a>
                    </div>
                    <div className="col-6">
                        <a href="/relogios" className="a bg1 p-5 d-flex justify-content-center rounded-5 text-decoration-none">
                            <div className="text-white fs-4 d-flex">
                                <i className="bi bi-list me-3"></i>
                                <h2 className="m-0 mt-1 fs-4">Lista de Relógios Ponto</h2>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;