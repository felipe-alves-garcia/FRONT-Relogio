import { useState } from "react";
//import { useNavigate } from "react-router-dom";
import axios from "axios";

function Relogio (){

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
                <form onSubmit={funBaixarAFD}>
                    <div className="row text-white">
                        <div className="col-sm-6 px-4 mt-3">
                            <label for="user" className="form-label ps-2 m-0">Usuário</label>
                            <input onChange={(e) => {setUser(e.target.value)}} id="user" type="text" name="user" className="w-100 form-control"/>
                        </div>
                        <div className="col-sm-6 px-4 mt-3">
                            <label for="password" className="form-label ps-2 m-0">Senha</label>
                            <input onChange={(e) => {setPassword(e.target.value)}} id="password" type="password" name="password" className="w-100 form-control"/>
                        </div>
                        <div className="col-sm-6 px-4 mt-3">
                            <label for="ip" className="form-label ps-2 m-0">IP do Relógio</label>
                            <input onChange={(e) => {setIp(e.target.value)}} id="ip" type="text" name="ip" className="w-100 form-control"/>
                        </div>
                        <div className="col-sm-6 px-4 mt-3">
                            <label for="port" className="form-label ps-2 m-0">Porta do Relógio</label>
                            <input onChange={(e) => {setPort(e.target.value)}} id="port" type="number" name="port" className="w-100 form-control"/>
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

export default Relogio;