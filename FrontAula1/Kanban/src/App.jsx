
import { BarraNavegacao } from './components/BarraNavegacao'
import { Cabecalho } from './components/Cabecalho'
import './Style/main.scss'

function App() {

  return (
    // barra fantasma <></>  foi tenho mais de um elemento sendo renderizado
    <>
      <BarraNavegacao />
      <Cabecalho />
    </>
  )
}

export default App
