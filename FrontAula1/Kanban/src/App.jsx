// import { BarraNavegacao } from './Componentes/BarraNavegacao'
// import { Cabecalho } from './Componentes/Cabecalho'
//import { CadTarefa } from './Paginas/CadTarefa';
// import './Style/main.scss'


import { Inicial } from './Paginas/inicial';
import { Tarefas } from './Paginas/Tarefas';
import { Rotas } from './Rotas/Rotas';
import { BrowserRouter } from 'react-router-dom';
function App() {

  return (
    <BrowserRouter>
      <Rotas /> 
      <Tarefas />
    </BrowserRouter>
  )
}
export default App;
