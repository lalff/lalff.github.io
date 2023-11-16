import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/HistdeDados/Home';
import Grafico  from './pages/Grafico/Grafico';
import Mapa from './pages/Mapa/Mapa';
import Tabela from './pages/Tabela/Tabela'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='grafico' element={<Grafico/>} />
        <Route path='mapa' element={<Mapa/>} />
        <Route path='tabela' element={<Tabela/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>

);
