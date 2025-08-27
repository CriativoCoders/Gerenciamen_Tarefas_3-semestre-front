export function CadTarefa() {
    return (
        <form className="formulario">
            <h1 className="titulo">Cadastro de Tarefa</h1>
            <label>Descrição: </label>
            <input type="text" alt="campo descrição"/>
            <label>Setor:</label>
            <input type='text' alt='setor' required/>
            <label>Prioridade</label>
            <select>
                <option>Selecione a Prioridade</option>
                <option value="baixa">Baixa</option>
                <option value="media">Média</option>
                <option value="alta">Alta</option>
            </select>
            <button type="submit">Cadastrar</button>
        </form>
    )
}
// criando componentes para depois fazer o Style
// fiz o formulario
// depois fui no app removi CadUsuario e testei o CadTarefa