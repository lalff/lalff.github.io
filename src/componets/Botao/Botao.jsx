import React from 'react';
import {App, AppBody, Button} from "./style"

function Botao() {

  return (
    <App> 
      <AppBody>
        <Button>
          Extrair PDF 
        </Button>
        <Button>
          Extrair CSV
        </Button>
        <Button>
          Extrair PNG
        </Button>
      </AppBody>
    </App>
  );
}

export default Botao;