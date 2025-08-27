
// import { BarraNavegacao } from './Componentes/BarraNavegacao'
// import { Cabecalho } from './Componentes/Cabecalho'
// import { CadTarefa } from './Paginas/CadTarefa';
// import './Style/main.scss'


import { Rotas } from './Rotas/Rotas';
import { BrowserRouter } from 'react-router-dom';
function App() {

  return (
    <BrowserRouter>
      <Rotas />
    </BrowserRouter>
  )
}
export default App;
