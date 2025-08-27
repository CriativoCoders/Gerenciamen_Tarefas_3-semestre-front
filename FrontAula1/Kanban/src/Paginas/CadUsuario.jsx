
export function CadUsuario(){
    return(
        <form className="formulario">
            <h1 className="titulo">Cadastro de Usuário</h1>
            <label>Nome: </label>
            <input type="text" />
            <label>E-mail:</label>
            <input type='email' />
            <button type="submit">Cadastrar</button>
        </form>
    )
}