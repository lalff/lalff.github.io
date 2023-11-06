import React from "react";
import {Cabeçalho, Links, ListaLinks, DesignLinks, Imagem} from "./style";

import LinkGrafico from "../Links/LinkGrafico";
import LinkHome from "../Links/LinkHome";
import LinkMapa from "../Links/LinkMapa";
import LinkTabela from "../Links/LinkTabela";

export default function Header () {

  return (
    <div>
      <Cabeçalho>
        <Links>
          <ListaLinks>
            <DesignLinks><LinkHome/></DesignLinks>
          </ListaLinks>
          <ListaLinks>
            <DesignLinks><LinkGrafico/></DesignLinks>
          </ListaLinks>
          <ListaLinks>
            <DesignLinks><LinkMapa/></DesignLinks>
          </ListaLinks>
          <ListaLinks>
            <DesignLinks><LinkTabela/></DesignLinks>
          </ListaLinks>
        </Links>
      </Cabeçalho>
    </div>
  );
};