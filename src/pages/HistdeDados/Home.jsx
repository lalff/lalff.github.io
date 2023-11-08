import React from "react";

import Header from "../../componets/Header/Header";
import MapaHome from "./MapaHome"

import {Caixa} from "./style"

const Home = () => {

  return (
    <div>
      <Header/>

      <Caixa>
        <label> Início: 
          <input
            type="date"
          />
        </label>

        <label> Fim: 
          <input
            type="date"
          />
        </label>

        <label> Variáveis: 
          <input
            type="text"
          />
        </label>

        <label> Frequência: 
          <input
            type="text"
          />
        </label>

        <br />
        <br />

        <label> Estação: 
          <input
            type="text"
          />
        </label>

        <label><strong> ou</strong> Ponto de monitoramento: 
          <input
            type="text"
          />
        </label>

        <label> Operação: 
          <input
            type="text"
          />
        </label>
      </Caixa>  

    </div>
  );
};

export default Home;