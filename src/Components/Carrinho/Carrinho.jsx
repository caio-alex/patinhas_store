import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Overlay = styled.div`
  display: ${({ mostrar }) => (mostrar ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5); 
  z-index: 9; 
`;

const Aside = styled.div`
  display: ${({ mostrar }) => (mostrar ? "block" : "none")};
  width: 40vw;
  background-color: #f6f6f6;
  height: 80vh;
  position: fixed;
  overflow-y: auto;
  right: 0;
  z-index: 10;
  border-radius: 20px 0 0 20px;
  border: 5px solid #6a6fd8;
  padding: 1rem;

  p {
    margin-bottom: 0;
  }
  @media (max-width: 650px) {
    justify-content: center;
    width: 70vw;

    p {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 520px) {
    p {
      font-size: 0.6rem;
    }
  }

  h2 {
    text-align: center;
    color: #6a6fd8;
  }

  li {
    margin: 10px;
    padding: 8px;
    background-color: #f0f0f0;
    border: 5px;
    padding-bottom: 2px;
    display: flex;
    gap: 10px;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.6);
    transition: ease 0.5s;
    &:hover{
        box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.6);

    }

    

    .btn_compra {
      border-radius: 10px;
      border: solid 2px #6a6fd8;

        &:hover{
            background-color: #bbbdda;
        }
    }

    .btn_exclui {
      border-radius: 10px;
      border: solid 2px #f31212;
      color: #f31212;
      font-weight: bold;
      &:hover{
            background-color: #e2c7c7;
        }
    }

    .botoes {
      flex-wrap: nowrap;
      display: flex;
      gap: 5px;
    }
  }

  .lista-carrinho {
    padding-left: 0;
    padding-bottom: 0;
  }
`;

export function Carrinho({ mostrar, onClose }) {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const produtosSalvos = JSON.parse(localStorage.getItem('produtos')) || [];
    setProdutos(produtosSalvos);
  }, []); 
  const removerDoCarrinho = (id) => {
    const produtoRemovido = produtos.filter((produto) => produto.id !== id);
    setProdutos(produtoRemovido); 
    localStorage.setItem("produtos", JSON.stringify(produtoRemovido));
  };

  return (
    <>
    <Overlay mostrar={mostrar} onClick={onClose} />
    <Aside mostrar={mostrar}>
      <h2>Carrinho</h2>
      <hr />
      <ul className="lista-carrinho">
        {produtos.length > 0 ? (
          produtos.map((produto) => (
            <li key={produto.id}>
              <p>
                <strong>{produto.titulo}</strong> - R${produto.preco} - ({produto.quantidade}x)
              </p>
              <div className="botoes">
                <Link to={`/Compra/${produto.id}`}>
                  <button className="btn_compra">
                    <i className="fa-solid fa-sack-dollar"></i>
                  </button>
                </Link>
                <button className="btn_exclui" onClick={() => removerDoCarrinho(produto.id)}>
                  X
                </button>
              </div>
            </li>
          ))
        ) : (
          <li>Não há produtos no carrinho!</li>
        )}
      </ul>
    </Aside>
    </>
  );
}
