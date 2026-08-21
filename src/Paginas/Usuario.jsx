import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Perfil = styled.div`
  text-align: center;
  padding: 30px 10px;

  h1{
    font-size: 1.8rem;
  }

  > p {
    color: var(--ink);
    opacity: 0.7;
    margin-bottom: 20px;
  }

  .infos {
    justify-content: center;
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: center;
  }

  .info {
    background-color: var(--surface);
    border-radius: 12px;
    padding: 12px 16px;
    border: 1px solid var(--line);
    font-size: 0.9em;
    text-align: left;
    justify-content: center;
    width: 60vw;
    max-width: 420px;
    align-items: center;

    strong{
      color: var(--brand-deep);
      font-family: var(--font-tag);
      font-size: 0.7rem;
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }
  }

  .info_pessoal {
    text-align: left;
    justify-content: center;
  }

  .contato {
    display: flex;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;

    @media (max-width: 768px) {
      width: 100%;
      gap: 10px;
    }

    .infoContato {
      width: 30vw;
      min-width: 160px;
      @media (max-width: 768px) {
        width: 100%;
        gap: 5px;
      }
    }
  }

  .btnAtualizar {
    padding: 12px 28px;
    margin-top: 20px;
    border-radius: 999px;
    border: none;
    background-color: var(--accent-coral);
    transition: background-color 0.2s ease, transform 0.15s ease;
    color: #fff;
    font-weight: 600;
    cursor: pointer;

    &:hover {
      transform: translateY(-1px);
      background-color: #e85b3c;
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
        <h1>🐾 Meus Dados</h1>
        <p>Confira os seus dados de cadastro</p>
        <DadosPerfil>
          <div className="infos">
            <p className="info info_pessoal">
              <strong>Nome</strong>
              <br />
              {dados.nome || "Não informado"}
            </p>
            <p className="info info_pessoal">
              <strong>Email</strong>
              <br />
              {dados.email || "Não informado"}
            </p>
            <p className="info info_pessoal">
              <strong>Senha</strong>
              <br />
              {dados.senha ? "••••••••" : "Não informado"}
            </p>
          </div>
          <div className="contato">
            <p className="info infoContato">
              <strong>Cidade</strong>
              <br />
              {dados.cidade || "Não informado"}
            </p>
            <p className="info infoContato">
              <strong>Estado</strong>
              <br />
              {dados.estado || "Não informado"}
            </p>
          </div>
          
          <div className="infos">
            <p className="info">
              <strong>Endereço</strong>
              <br />
              {dados.endereco || "Não informado"}
            </p>
          </div>

          <div className="contato">
            <p className="info infoContato">
              <strong>CPF</strong>
              <br />
              {dados.cpf || "Não informado"}
            </p>
            <p className="info infoContato">
              <strong>Celular</strong>
              <br />
              {dados.celular || "Não informado"}
            </p>
            <p className="info infoContato">
              <strong>Telefone</strong>
              <br />
              {dados.telefone || "Não informado"}
            </p>
          </div>
        </DadosPerfil>
        <Link to={"/Login"}>
          <button className="btnAtualizar">Atualizar Cadastro</button>
        </Link>
      </Perfil>
    </div>
  );
}