import { styled } from "styled-components";

const Cabeçalho = styled.header`
  position: relative;
  width: 80%;
  margin: 0 auto;
  background-color: #FFF;
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
  font-weight: bold;
  font-size: 18px;
  text-decoration: none;
`;

export {Cabeçalho, Links, ListaLinks, DesignLinks};