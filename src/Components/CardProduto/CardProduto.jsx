import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";



const Card = styled.div`
  min-width: 12rem;
  max-width: 14rem;
  box-shadow: 0 2px 8px rgba(27, 46, 34, 0.1);
  background-color: var(--surface);
  border-radius: 16px;
  margin: 10px;
  padding-top: 10px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-decoration: none;
  list-style: none;
  overflow: hidden;

  .link{
    text-decoration: none;
    list-style: none;
  }

  &:hover{
    transform: translateY(-6px);
    box-shadow: 0 16px 28px rgba(27, 46, 34, 0.16);
  }
  
  .card-img-top{
    height: 200px;
    width: 100%;
    object-fit: contain;
    padding: 8px;
    box-sizing: border-box;
  }  

  
  .card-conteudo{
    height: auto;
    text-decoration: none;
    list-style: none;
    padding: 0 12px 12px;
  }

  .card-title{
    padding: 4px 0 10px;
    font-size: 0.95em;
    font-family: var(--font-body);
    font-weight: 600;
    color: var(--ink);
  }
  
  .card-body {
    padding-bottom: 0;
  }
  
  .card-text {
    padding: 0;
    padding-bottom: 12px;
    display: flex;
    align-items: baseline;
    gap: 6px;

    span {
      font-family: var(--font-tag);
      font-size: 0.7rem;
      color: var(--brand-mid);
      text-transform: uppercase;
      letter-spacing: 0.03em;
    }

    .preco{
      font-family: var(--font-tag);
      font-weight: 700;
      font-size: 1.05rem;
      color: var(--brand-deep);
      background-color: var(--sand);
      padding: 2px 8px;
      border-radius: 6px;
    }
  }
  
  .btn {
    color: #fff;
    background-color: var(--accent-coral);
    text-decoration: none;
    padding: 10px 16px;
    border-radius: 999px;
    text-align: center;
    font-weight: 600;
    border: none;
    width: 100%;
    cursor: pointer;
    transition: background-color 0.2s ease, transform 0.15s ease;

    &:hover {
      background-color: #e85b3c;
      transform: scale(1.02);
    }
  }
`;

const CardProduto = ({ produtos }) => {
  
  const AdicionarLocalStorage = (event) => {
    event.preventDefault();
    const produtosSalvos = JSON.parse(localStorage.getItem("produtos")) || [];

    const produtoExistente = produtosSalvos.find(
      (produto) => produto.id === produtos.id
    );

    if (produtoExistente) {
      produtoExistente.quantidade += 1;
    } else {
      produtosSalvos.push({ ...produtos, quantidade: 1 });
    }

    localStorage.setItem("produtos", JSON.stringify(produtosSalvos));

    window.alert(`${produtos.titulo} adicionado ao carrinho`);

    window.location.reload()

  };

  return (


    <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center cards">
      <Card> 
      <Link to={`/Compra/${produtos.id}`} style={{ textDecoration: "none", color: "inherit" }}>
        <img className="card-img-top" src={produtos.imagem} alt={produtos.titulo}/>
      </Link>
        <div className="card-conteudo">
        <div className="card-body">
          <h5 className="card-title">{produtos.titulo}</h5>
        </div>
          <p className="card-text">
            <span>a partir de</span> <span className="preco">R${produtos.preco}</span>
          </p>
          
          <button onClick={AdicionarLocalStorage} className="btn" >
            Adicionar <i className="fa-solid fa-cart-shopping" ></i>
          </button>
          </div>
      </Card>
      
    </div>
  );
};

export default CardProduto;