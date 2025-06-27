import { useState, useEffect } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
//import { useParams } from "react-router-dom";
import axios from "axios";

import load from "../assets/img/load.gif";
import erro from "../assets/img/erro.png"

function Todos (){

    const navigate = useNavigate();

    //---

    const [ relogios, setRelogios ] = useState([]);
    const [ status, setStatus ] = useState([]);

    function listaRelogios (){
        axios.get("http://localhost:7001/relogios").then((resp) => {
            console.log(resp.data);
            let statusBuild = [];
            for(let i=0; i<resp.data.length; i++){
                statusBuild[i] = "bg1";
            }
            setStatus(statusBuild);
            setRelogios(resp.data);
        }).catch((error) => {
            console.log(error);
            setErroImg("mt-5")
            setTimeout(() => {
                navigate("/");
            }, 1500);
        })
    }

    //---
    

    /*const userRef = useRef()
    const passwordRef = useRef()
    const ipRef = useRef()
    const portRef = useRef()*/

    const [loadGif, setLoadGif] = useState("d-none");
    const [erroImg, setErroImg] = useState("d-none");

    async function funBaixarAFD (){
        //e.preventDefault();
        /*const user = userRef.current.value;
        const password = passwordRef.current.value;
        const ip = ipRef.current.value;
        const port = portRef.current.value;*/
        let i = 0;
        let statusBuild = [];
        /* eslint-disable no-loop-func */
        for(const item of relogios){
            console.log("User: "+item.login+"\nPassword: "+item.password+"\nIP: "+item.ip+"\nPort: "+item.port)
            setLoadGif("mt-5");
            setErroImg("d-none");
            await axios.get(`http://localhost:7001/baixar-afd/${item.login}/${item.password}/${item.ip}/${item.port}`).then((resp) => {
                console.log(resp);
                /* eslint-disable no-loop-func */
                for(let n=i; n<status.length; n++){
                    if(n===i){
                        statusBuild[n] = "bg2";
                    }
                    else{
                        statusBuild[n] = status[n];
                    }
                }
                baixarAfd(resp.data, item.name);   
            }).catch((error) => {
                console.log(error);
                /* eslint-disable no-loop-func */
                for(let n=i; n<status.length; n++){
                    if(n===i){
                        statusBuild[n] = "bg3";
                    }
                    else{
                        statusBuild[n] = status[n];
                    }
                }
                setErroImg("mt-5");
            })    
            setLoadGif("d-none");    
            i++;
        }
        setStatus(statusBuild);

        
    }

    const hasRun = useRef(false);

    useEffect(() => {
    if (hasRun.current) return;
        hasRun.current = true;

        listaRelogios()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const hasRun2 = useRef(false);

    useEffect(() => {
        if(relogios.length > 0){
            if (hasRun2.current) return;
                hasRun2.current = true;
            funBaixarAFD();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [relogios.length])

    function baixarAfd(conteudo, name) {
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
            <main className="container pt-sm-5 pb-5">
                <div className="row">
                    {
                        relogios.map((item, index) => {
                            return(
                                <div className="mb-2 mx-0" key={index}>
                                    <div className={`w-100 ${status[index]} px-5 py-4 d-flex justify-content-start rounded-4 text-decoration-none border border-dark`}>
                                        <div className="text-white fs-4 d-flex align-items-center">
                                            <i className="bi bi-clock-fill me-3"></i>
                                            <h2 className="m-0 fs-4">{item.name}</h2>
                                        </div>
                                    </div>
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

export default Todos;