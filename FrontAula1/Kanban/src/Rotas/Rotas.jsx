import{Routes, Route} from 'react-router-dom';
import{ Inicial } from '../Paginas/inicial'; // tive que importa o inicial mesmo
import { CadUsuario } from '../paginas/CadUsuario';
import { Quadro } from '../Paginas/CadTarefa';

export function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<Inicial />} />
               <Route index element={<Quadro />} />
               <Route path="/CadTarefa" element={<CadTarefa />} />
               <Route path="/CadUsuario" element={<CadUsuario />} />
        </Routes>
    )
}
