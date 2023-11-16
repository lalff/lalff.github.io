import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/HistdeDados/Home';
import { Grafico }  from './pages/Grafico/Grafico';
import { Map } from './pages/Mapa/Mapa';
import { TabelaPage } from './pages/Tabela/Tabela'
import Pesquisa from './pages/Pesquisa/Pesquisa'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='grafico' element={<Grafico/>} />
        <Route path='mapa' element={<Map/>} />
        <Route path='tabela' element={<TabelaPage/>} />
        <Route path='pesquisa' element={<Pesquisa/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>

);
