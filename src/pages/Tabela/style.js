import { styled } from "styled-components";

const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  font-family: Arial, sans-serif;

  th {
  background-color: white;
  color: black;
  }

  th,
  td {
  padding: 5px;
  text-align: center;
  } 

  thead {
  th {
  background-color: lightgray;
  }
  }
`;

const TableRow = styled.tr`
  &:nth-child(even) {
  background-color: #f2f2f2;
  }
`;

const TableHeader = styled.th`
  background-color: lightgray;
  &:first-child {
  background-color: black;
  color: white;
  }
`;

export {StyledTable, TableRow, TableHeader};