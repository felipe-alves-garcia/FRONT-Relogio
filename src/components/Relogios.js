import { useState, useEffect } from "react";
import { useRef } from "react";
//import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

import load from "../assets/img/load.gif";
import erro from "../assets/img/erro.png"

function Relogios (){

    const [ relogios, setRelogios ] = useState([]);

    function listaRelogios (){
        axios.get("http://10.10.112.53:7001/relogios").then((resp) => {
            //console.log(resp.data);
            setRelogios(resp.data);
        }).catch((error) => {
            //console.log(error);
        })
    }

    //---
    
    //const navigate = useNavigate();

    //---

    /*const userRef = useRef()
    const passwordRef = useRef()
    const ipRef = useRef()
    const portRef = useRef()*/
    
    const { user } = useParams();
    const { password } = useParams();
    const { ip } = useParams();
    const { port } = useParams();
    const { name } = useParams();

    const [loadGif, setLoadGif] = useState("d-none");
    const [erroImg, setErroImg] = useState("d-none");

    async function funBaixarAFD (e){
        //e.preventDefault();
        /*const user = userRef.current.value;
        const password = passwordRef.current.value;
        const ip = ipRef.current.value;
        const port = portRef.current.value;*/
        if(user !== "0" && password !== "0" && ip !== "0" && port !== "0"){
            //console.log("User: "+user+"\nPassword: "+password+"\nIP: "+ip+"\nPort: "+port)
            setLoadGif("mt-5");
            setErroImg("d-none");
            await axios.get(`http://10.10.112.53:7001/baixar-afd/${user}/${password}/${ip}/${port}`).then((resp) => {
                //console.log(resp);
                baixarAfd(resp.data);   
            }).catch((error) => {
                //console.log(error);
                setErroImg("mt-5");
            })    
            setLoadGif("d-none");
        }      
    }

    const hasRun = useRef(false);

    useEffect(() => {
    if (hasRun.current) return;
        hasRun.current = true;

        listaRelogios()
        funBaixarAFD()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function baixarAfd(conteudo) {
        const blob = new Blob([conteudo], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.style.display = 'none'; // invisível
        link.href = url;
        link.download = `${name}.txt`;

        // simula clique e remove o link invisível
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        URL.revokeObjectURL(url);
    }

    return(
        <>
            <main className="container pt-sm-5">
                <div className="row">
                    {
                        relogios.map((item, index) => {

                            return(
                                <div className="col-lg-6 mb-4 mx-0" key={index}>
                                    <a href={`/relogios/${item.login}/${item.password}/${item.ip}/${item.port}/${item.name}`} className="w-100 a bg1 p-5 d-flex justify-content-center rounded-5 text-decoration-none border border-dark">
                                        <div className="text-white fs-4 d-flex align-items-center">
                                            <i className="bi bi-clock-fill me-3"></i>
                                            <h2 className="m-0 fs-4">{item.name}</h2>
                                        </div>
                                    </a>
                                </div>
                            )
                        })
                    }    
                </div>
                <div className={`${loadGif} row`}>
                    <div className="col-12 d-flex justify-content-center pt-1">
                        <img id="load" src={load} alt="baixando..."></img>
                    </div>
                    <div className="col-12 d-flex justify-content-center text-white fs-6">
                        <p>Baixando...</p>
                    </div>
                </div>
                <div className={`${erroImg} row`}>
                    <div className="col-12 d-flex justify-content-center pt-1">
                        <img id="load" src={erro} alt="Erro, tente novamente"></img>
                    </div>
                    <div className="col-12 d-flex justify-content-center text-danger fs-6">
                        <p>Tente Novamente</p>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Relogios;