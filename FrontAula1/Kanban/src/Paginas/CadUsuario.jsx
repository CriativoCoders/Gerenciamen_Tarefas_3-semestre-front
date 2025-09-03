
// 1 -conectando com o back-end, 
// recursos disponiveis para codar incluir os hooks que são mecanismos do React para lidar com estado e efeitos colaterais.
// usar o useState para gerenciar os dados do formulário
// instalar 
// npm i zod
// npm i axios
// npm i react-hook-form
// vincular com zod depois =>
// npm i @hookform/resolvers
import axios from 'axios';
import { useForm } from "react-hook-form";
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schemaCadUsuario = z.object({
    nome: z.string()
    .min(5, 'informe um nome válido')
    .max(100, 'Infome no máximo 100 caracteres'),
    email: z.string()
    .min(9, 'informe um e-mail válido')
    .max(100, 'Infome no máximo 100 caracteres')
    .email('informe um email válido')
});

export function CadUsuario(){
    // 2 - magica para fazer funcionar
    const { 
        register, // registra oque o usuario digitou no input
        handleSubmit, // no momento em que ele se submeter
        formState: { errors }, // o formulario, e se houver erros
        reset
    } = useForm({ resolver: zodResolver(schemaCadUsuario)});

    async function obterDados() {
        console.log('Obtendo dados...', data);
        try {
            await axios.post('http://localhost:3001/usuarios/', data);
            alert('Usuario cadastrado com sucesso!!')
            reset();
        } catch (error) {
            console.error('Erro ao cadastrar usuário:', error);
        }
    }

    return( // 3 - fazendo chamada de tudo que eu fiz...
        <form className="formulario" onSubmit={handleSubmit(obterDados)}> 
            <h1 className="titulo">Cadastro de Usuário</h1>
            <label>Nome: </label>
            {/* registradno oque o usuario digitol */}
            <input type="text" {...register("nome")} /> 
            {errors.nome && <p>{errors.nome.message}</p>} {/*se exister erro, e criado um paragrafo com tags html que vai conter a mensagem que tratamos, tratando erros*/}
            <label>E-mail:</label>
            <input type='email' {...register("email")} />
            {errors.email && <p>{errors.email.message}</p>} {/*tratando erros*/} {/*se tudo estiver certo e para funcionar 🆗👌*/}
            <button type="submit">Cadastrar</button>
        </form>
    )
}