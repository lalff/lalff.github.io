import { styled } from "styled-components";

const Cabeçalho = styled.header`
  position: relative;
  width: 80%;
  margin: 0 auto;
  background-color: #000;
`;

const Links = styled.nav`
  position: absolute;
  top: 12px;
  right: 0px;
  display: inline-block;
`;

const ListaLinks = styled.li`
  display: inline;
  margin: 15px;
`;

const DesignLinks = styled.a`
  text-decoration: none;
  font-weight: bold;
  font-size: 18px;
`;

const Imagem = styled.img`
  top: 15px;
}
`;

export {Cabeçalho, Links, Imagem, ListaLinks, DesignLinks};