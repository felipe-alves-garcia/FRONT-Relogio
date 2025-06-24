import { useState, useEffect } from "react";
//import { useNavigate } from "react-router-dom";
import axios from "axios";

function Relogios (){

    const [ relogios, setRelogios ] = useState([]);

    function listaRelogios (){
        axios.get("http://localhost:7001/relogios").then((resp) => {
            console.log(resp.data);
            setRelogios(resp.data);
        }).catch((error) => {
            console.log(error);
        })
    }
    useEffect(listaRelogios, []);

    //---
    
    //const navigate = useNavigate();

    //---

    const [user, setUser] = useState(null);
    const [password, setPassword] = useState(null);
    const [ip, setIp] = useState(null);
    const [port, setPort] = useState(null);


    async function funBaixarAFD (e){
        e.preventDefault();
        console.log("User: "+user+"\nPassword: "+password+"\nIP: "+ip+"\nPort: "+port)
        await axios.get(`http://localhost:7001/baixar-afd/${user}/${password}/${ip}/${port}`).then((resp) => {
            console.log(resp);
            baixarAfd(resp.data);   
        }).catch((error) => {
            console.log(error);
        })
    }

    function baixarAfd(conteudo, nome = "AFD.txt") {
        const blob = new Blob([conteudo], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.style.display = 'none'; // invisível
        link.href = url;
        link.download = nome;

        // simula clique e remove o link invisível
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        URL.revokeObjectURL(url);
    }

    return(
        <>
            <main className="container px-0 pt-5">
                <div className="row">
                    {
                        relogios.map((item) => {

                            return(
                                <>
                                    <form onSubmit={funBaixarAFD} className="col-6 mb-4">
                                        <input id="user" type="hidden" name="user" className="w-100 form-control"/>
                                        <input id="password" type="hidden" name="password" className="w-100 form-control"/>
                                        <input id="ip" type="hidden" name="ip" className="w-100 form-control"/>
                                        <input id="port" type="hidden" name="port" className="w-100 form-control"/>
                                        <button type="submit" href="/relogio" className="w-100 a bg1 p-5 d-flex justify-content-center rounded-5 text-decoration-none border border-dark">
                                            <div className="text-white fs-4 d-flex">
                                                <i className="bi bi-clock-fill me-3"></i>
                                                <h2 className="m-0 mt-1 fs-4">{item.name}</h2>
                                            </div>
                                        </button>
                                    </form>
                                </>
                            )
                        })
                    }    
                </div>
                






                <form onSubmit={funBaixarAFD}>
                    <div className="row text-white">
                        <div className="col-sm-6 px-4 mt-3">
                            <label for="user" className="form-label ps-2 m-0">Usuário</label>
                        </div>
                        <div className="col-sm-6 px-4 mt-3">
                            <label for="password" className="form-label ps-2 m-0">Senha</label>
                        </div>
                        <div className="col-sm-6 px-4 mt-3">
                            <label for="ip" className="form-label ps-2 m-0">IP do Relógio</label>
                        </div>
                        <div className="col-sm-6 px-4 mt-3">
                            <label for="port" className="form-label ps-2 m-0">Porta do Relógio</label>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="d-flex justify-content-center">
                            <input type="submit" id="baixar" className="a px-5 py-1 rounded-5 text-dark fw-bold fs-5 bg-white border border-white" value="Baixar"/>
                        </div>
                    </div>
                </form>
            </main>
        </>
    );
}

export default Relogios;