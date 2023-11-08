import {styled} from "styled-components"

const App = styled.div`
  text-align: center;
`

const AppBody = styled.section`
  height: 15vh;
  width: 100%;
  display: flex;
  gap:15px;
  justify-content: center;
  align-items: center;
`

const Button = styled.button`
  padding: 10px 16px;
  font-size: 14px;
  background-color: transparent;
  border: 1px solid #61dafb;
  border-radius: 6px;
  color: #61dafb;
  font-weight: bold;
  transition: ease-in 0.3s;

  &:hover {
    backgroundColor: '#61dafb',
    color: '#fff',
    cursor: 'pointer',
  }
`

export {App, AppBody, Button};