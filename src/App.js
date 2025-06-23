import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';

import Home from "./components/Home";

function App() {
  return (
    <>
      <header className="container-fluid p-4 bg-dark d-flex">
          <i className="bi bi-server text-white me-3 ms-4"></i>
          <h1 className="fw-bold fs-5 m-0 text-white">PAROBÉ - Relógio Ponto</h1>
      </header>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<Home />} />
          </Routes>
      </BrowserRouter>    
    </>
  );
}

export default App;
