import React, {useState} from "react";

import LinkHome from "../../componets/Links/LinkHome";
import LinkGrafico from "../../componets/Links/LinkGrafico";
import LinkMapa from "../../componets/Links/LinkMapa";
import LinkTabela from "../../componets/Links/LinkTabela";

import { data } from "./dados";

const Table = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const filteredData = data.filter((item) => {
    return (
      item.id.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
  

return (

  <div style={{textAlign: "center"}}>
    <input
        type="text"
        placeholder="Pesquisar..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    <table style={{ borderCollapse: "collapse"}}>
      <thead>
          <tr>
          <th colSpan="15" style={{ backgroundColor: "black", color: "white"}}>Registros da estação - Vidigal</th>
          </tr>
          <tr>
          <th colSpan="15" style={{ backgroundColor: "lightgray"}}>Chuva(i)</th>
          </tr>
          <tr>
              <th rowSpan="2">HORA DA LEITURA</th>
              <th style={{ padding: "5px", backgroundColor: "lightgray" , textAlign: "center"}}>05min</th>
              <th style={{ padding: "5px", backgroundColor: "lightgray" , textAlign: "center"}}>10min</th>
              <th style={{ padding: "5px", backgroundColor: "lightgray" , textAlign: "center"}}>15min</th>
              <th style={{ padding: "5px", backgroundColor: "lightgray" , textAlign: "center"}}>30min</th>
              <th style={{ padding: "5px", backgroundColor: "lightgray" , textAlign: "center"}}>1hora</th>
              <th style={{ padding: "5px", backgroundColor: "lightgray" , textAlign: "center"}}>2horas</th>
              <th style={{ padding: "5px", backgroundColor: "lightgray" , textAlign: "center"}}>3horas</th>
              <th style={{ padding: "5px", backgroundColor: "lightgray" , textAlign: "center"}}>4horas</th>
              <th style={{ padding: "5px", backgroundColor: "lightgray" , textAlign: "center"}}>6horas</th>
              <th style={{ padding: "5px", backgroundColor: "lightgray" , textAlign: "center"}}>12horas</th>
              <th style={{ padding: "5px", backgroundColor: "lightgray" , textAlign: "center"}}>24horas</th>
              <th style={{ padding: "5px", backgroundColor: "lightgray" , textAlign: "center"}}>96horas</th>
              <th style={{ padding: "5px", backgroundColor: "lightgray" , textAlign: "center"}}>Mensal</th>
              <th style={{ padding: "5px", backgroundColor: "lightgray" , textAlign: "center"}}>Tx-1h</th>
          </tr>
      </thead>
    <tbody>
      {filteredData.map((item) => (
        <tr key={item.id}>
          <td style={{ textAlign: "center" }}>{item.id}</td>
          <td style={{ textAlign: "center" }}>{item.name}</td>
          <td style={{ textAlign: "center" }}>{item.description}</td>
          <td style={{ textAlign: "center" }}>{item["15min"]}</td> 
          <td style={{ textAlign: "center" }}>{item["30min"]}</td>
          <td style={{ textAlign: "center" }}>{item["1h"]}</td>
          <td style={{ textAlign: "center" }}>{item["2h"]}</td>
          <td style={{ textAlign: "center" }}>{item["3h"]}</td>
          <td style={{ textAlign: "center" }}>{item["4h"]}</td>
          <td style={{ textAlign: "center" }}>{item["6h"]}</td>
          <td style={{ textAlign: "center" }}>{item["12h"]}</td>
          <td style={{ textAlign: "center" }}>{item["24h"]}</td>
          <td style={{ textAlign: "center" }}>{item["96h"]}</td>
          <td style={{ textAlign: "center" }}>{item["Mensal"]}</td>
          <td style={{ textAlign: "center" }}>{item["Tx-1h"]}</td>
        </tr>
      ))
      }
    </tbody>
  </table>
</div>
  );
};

export default function App() {

return (
    <div>
      <LinkHome/>
      <LinkGrafico/>
      <LinkMapa/>
      <LinkTabela/>
      
      <Table/>
    </div>
  );
};
