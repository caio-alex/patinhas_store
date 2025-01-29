import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Perfil = styled.div`
  text-align: center;
  padding: 10px;

  .infos {
    justify-content: center;
    display: flex;
    gap: 5px;
    flex-direction: column;
    align-items: center;
  }

  .info {
    background-color: #ececec;
    border-radius: 5px;
    padding: 10px;
    border: #6a6fd8 solid 2px;
    font-size: 0.8em;
    justify-content: center;
    width: 60vw;
    align-items: center;
  }

  .info_pessoal {
    text-align: center;
    justify-content: center;
  }

  .contato {
    display: flex;
    justify-content: space-around;

    @media (max-width: 768px) {
      width: 100%;
      gap: 5px;
    }

    .infoContato {
      width: 30vw;
      @media (max-width: 768px) {
        width: 100%;
        gap: 5px;
      }
    }
  }

  .btnAtualizar {
    padding: 10px;
    border-radius: 20px;
    border: none;
    background-color: #5158d9;
    transition: transform ease 0.4s;
    color: #fff;

    &:hover {
      transform: scale(1.1);
      background-color: #6a6fd8;
    }
  }
`;

const DadosPerfil = styled.div`
  text-align: center;
`;

export function Usuario() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    const dadosCadastrados = localStorage.getItem("dados");
    if (dadosCadastrados) {
      setDados(JSON.parse(dadosCadastrados));
    }
  }, []);

  if (!dados) {
    return <p>Não há dados</p>;
  }

  return (
    <div>
      <Perfil>
        <h1>Meus Dados</h1>
        <p>Confira os seus dados de cadastro</p>
        <DadosPerfil>
          <div className="infos">
            <p className="info info_pessoal">
              <strong>Nome: </strong>
              <br />
              {dados.nome || "Não informado"}
            </p>
            <p className="info info_pessoal">
              <strong>Email: </strong>
              <br />
              {dados.email || "Não informado"}
            </p>
            <p className="info info_pessoal">
              <strong>Senha: </strong>
              <br />
              {dados.senha || "Não informado"}
            </p>
          </div>
          <div className="contato">
            <p className="info infoContato">
              <strong>Cidade: </strong>
              <br />
              {dados.cidade || "Não informado"}
            </p>
            <p className="info infoContato">
              <strong>Estado: </strong>
              <br />
              {dados.estado || "Não informado"}
            </p>
          </div>
          
          <div className="infos">
            <p className="info">
              <strong>Endereço: </strong>
              <br />
              {dados.endereco || "Não informado"}
            </p>
          </div>

          <div className="contato">
            <p className="info infoContato">
              <strong>CPF: </strong>
              <br />
              {dados.cpf || "Não informado"}
            </p>
            <p className="info infoContato">
              <strong>Celular: </strong>
              <br />
              {dados.celular || "Não informado"}
            </p>
            <p className="info infoContato">
              <strong>Telefone: </strong>
              <br />
              {dados.telefone || "Não informado"}
            </p>
          </div>
        </DadosPerfil>
        <Link to={"/Loguin"}>
          <button className="btnAtualizar">Atualizar Cadastro</button>
        </Link>
      </Perfil>
    </div>
  );
}
