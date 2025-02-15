import styled from "styled-components"
import { useState } from "react";

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
        align-items: center;
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

const EstadoButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #6a6fd8;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background-color: #575db8;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(106, 111, 216, 0.8);
  }
`;

const EstadoDropdown = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;

  .dropdown-menu {
    width: 100%;
    max-height: 200px;
    overflow-y: auto;
    border-radius: 8px;
  }

  .dropdown-item {
    padding: 10px;
    transition: 0.3s;
    
    &:hover {
      background-color: #f0f0f0;
    }
  }
`;


export default function Login() {
    const AddDadosLocalStorage = (event) => {
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);
        const dados = Object.fromEntries(formData.entries());
        dados.estado = estadoSelecionado;
        if (dados.nome && dados.email && dados.senha && dados.estado) {
        
            localStorage.setItem("dados", JSON.stringify(dados));
            window.alert(`Os dados foram salvos com sucesso!`);
        } else {
            window.alert(`Preencha todos os campos obrigatórios.`);
        }
    };

    const estados = ["AC", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "PA", "PB", "PR", "RJ", "RN", "RS", "SC", "SP", "TO"];
    const [estadoSelecionado, setEstadoSelecionado] = useState("");

    return (
        <DadosPerfil>
            <h1>Atualize os Dados</h1>
            <Dados>
                <form onSubmit={AddDadosLocalStorage}>
                    <div className="form-row1">
                        <div className="form-group1 col-md-8">
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
                    <div className="form-row1 col-md-12">
                        <div className="form-group col-md-4">
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
                        <div className="form-group col-md-4">
                            <label htmlFor="estado">Estado</label>
                            <EstadoDropdown>
                                <EstadoButton
                                    id="estado"
                                    className="dropdown-toggle estado"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    name="estado"
                                >
                                    {estadoSelecionado || "Selecione um Estado"}
                                </EstadoButton>
                                <ul className="dropdown-menu">
                                    {estados.map((estado, index) => (
                                        <li key={index}>
                                            <button
                                                className="dropdown-item"
                                                onClick={() => setEstadoSelecionado(estado)}
                                            >
                                                {estado}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </EstadoDropdown>
                        </div>
                    </div>
                    <div className="form-row1">
                        <div className="form-group col-md-8">
                            <label htmlFor="endereco">Endereço</label>
                            <input
                                required
                                type="text"
                                className="form-control"
                                id="endereco"
                                name="endereco"
                                placeholder="Rua, nº 0"
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

                    <button type="submit" className="btn">Salvar</button>
                </form>
            </Dados>
        </DadosPerfil>
    );
}