import React,  { useState } from "react";
import {Cabeçalho, Links, ListaLinks, DesignLinks} from "./style";
import Logo from "./Logo";

import LinkGrafico from "../Links/LinkGrafico";
import LinkHome from "../Links/LinkHome";
import LinkMapa from "../Links/LinkMapa";
import LinkTabela from "../Links/LinkTabela";

const Header = () => {

  return (
    <div>
      <br></br>
      <Cabeçalho>
        <Logo/>
        <br></br>
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

export default Header;