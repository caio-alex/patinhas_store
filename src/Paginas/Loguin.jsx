import styled from "styled-components"

const DadosPerfil = styled.div`
    justify-content: center;
    text-align: center;
`

const Dados = styled.div`
    padding: 60px;
    margin: 10px;
    padding-top: 20px;
    justify-content: center;
    display: block;
    @media(max-width: 650px){
        padding: 10px;
    }


    .form-row1{
        display: flex;
        text-align: center;
        justify-content: center;
        gap: 10px;
    }

    input{
        margin: 10px;
        padding: 10px;
        border: #6a6fd8 solid 2px;
    }

    .btn{
        padding: 10px;
        background-color: #6a6fd8;
        color: #FFF;
    }
`;

export default function Loguin() {
    const AddDadosLocalStorage = (event) => {
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);

        const dados = Object.fromEntries(formData.entries());

        if (dados.nome && dados.email && dados.senha) {
            localStorage.setItem("dados", JSON.stringify(dados));
            window.alert(`Os dados foram salvos com sucesso!`);
        } else {
            window.alert(`Preencha todos os campos obrigatórios.`);
        }
    }
    return (
        <DadosPerfil>
            <h1>Meus Dados</h1>
            <p>Confira os seus dados de cadastro</p>
            <Dados>
                <form onSubmit={AddDadosLocalStorage}>
                    <div class="form-row1">
                        <div class="form-group1 col-md-8">
                            <label htmlFor="nome">Nome</label>
                            <input
                                required
                                type="text"
                                className="form-control"
                                id="nome"
                                name="nome"
                                placeholder="Nome"
                            />
                            <label htmlFor="email">Email</label>
                            <input
                                required
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                placeholder="Email"
                            />
                            <label htmlFor="senha">Senha</label>
                            <input
                                required
                                type="password"
                                className="form-control"
                                id="senha"
                                name="senha"
                                placeholder="Senha"
                            />
                        </div>
                    </div>
                    <div class="form-row1 col-md-12">
                        <div class="form-group col-md-4">
                            <label htmlFor="cidade">Cidade</label>
                            <input
                                required
                                type="text"
                                className="form-control"
                                id="cidade"
                                name="cidade"
                                placeholder="Cidade"
                            />
                        </div>
                        <div class="form-group col-md-4">
                            <label htmlFor="estado">Estado</label>
                            <input
                                required
                                type="text"
                                className="form-control"
                                id="estado"
                                name="estado"
                                placeholder="Estado"
                            />
                        </div>
                    </div>
                    <div class="form-row1 ">
                        <div class="form-group col-md-8">
                            <label htmlFor="endereco">Endereço</label>
                            <input
                                required
                                type="text"
                                className="form-control"
                                id="endereco"
                                name="endereco"
                                placeholder="Rua dos Bobos, nº 0"
                            />
                            <label htmlFor="cpf">CPF</label>
                            <input
                                required
                                type="text"
                                className="form-control"
                                id="cpf"
                                name="cpf"
                                placeholder="CPF"
                            />
                            <div className="form-group">
                                <label htmlFor="celular">Celular</label>
                                <input
                                    required
                                    type="number"
                                    className="form-control"
                                    id="celular"
                                    name="celular"
                                    placeholder="DDD+Celular"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="telefone">Telefone</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="telefone"
                                    name="telefone"
                                    placeholder="DDD+Telefone"
                                />
                            </div>
                        </div>
                    </div>


                    <button type="submit" class="btn">Salvar</button>
                </form>
            </Dados>
        </DadosPerfil>
    )
}