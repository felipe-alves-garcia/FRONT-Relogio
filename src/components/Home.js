import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Home (){

    //---
    
    const navigate = useNavigate();

    //---

    const [user, setUser] = useState(null);
    const [password, setPassword] = useState(null);
    const [ip, setIp] = useState(null);
    const [port, usePorte] = useState(null);


    return(
        <>
            <main className="container px-0 pt-5">
                <form>
                    <div className="row">
                        <div className="col-sm-6 px-4 mt-3">
                            <label onChange={(e) => {setUser(e.target.value)}} for="user" className="form-label ps-2 m-0">Usuário</label>
                            <input id="user" type="text" name="user" className="w-100 form-control"/>
                        </div>
                        <div className="col-sm-6 px-4 mt-3">
                            <label onChange={(e) => {setPassword(e.target.value)}} for="password" className="form-label ps-2 m-0">Senha</label>
                            <input id="password" type="password" name="password" className="w-100 form-control"/>
                        </div>
                        <div className="col-sm-6 px-4 mt-3">
                            <label onChange={(e) => {setIp()}} for="ip" className="form-label ps-2 m-0">IP do Relógio</label>
                            <input id="ip" type="text" name="ip" className="w-100 form-control"/>
                        </div>
                        <div className="col-sm-6 px-4 mt-3">
                            <label for="port" className="form-label ps-2 m-0">Porta do Relógio</label>
                            <input id="port" type="number" name="port" className="w-100 form-control"/>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="d-flex justify-content-center">
                            <button id="baixar" className="px-5 py-1 rounded-5 text-white bg-dark border-none">Baixar</button>
                        </div>
                    </div>
                </form>
                
            </main>
        </>
    );
}

export default Home;