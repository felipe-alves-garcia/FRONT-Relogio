import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';

import Home from "./components/Home";
import Relogio from "./components/relogio";
import Relogios from "./components/Relogios"
import Todos from "./components/Todos"

import logo1 from "./assets/img/logo1.png"

function App() {

  return (
    <>
      <header className="bg1 container-fluid p-4 d-flex mb-5">
          <a href="/">
            <img src={logo1} id="logo" alt="Parobé RS"/>
          </a>
      </header>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/relogio" element={<Relogio/>}/>
              <Route path="/relogios/:user/:password/:ip/:port/:name" element={<Relogios/>}/>
              <Route path="/geral" element={<Todos/>}/>
              <Route path="*" element={<Home />} />
          </Routes>
      </BrowserRouter>  
    </>
  );
}

export default App;
