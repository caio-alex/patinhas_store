import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";



const Card = styled.div`
  min-width: 12rem;
  max-width: 14rem;
  box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  border-radius: 10px;
  margin: 20px;
  padding-top: 10px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  transition:  ease 0.6s;
  text-decoration: none;
  list-style: none;

  .link{
    text-decoration: none;
    list-style: none;
  }

  &:hover{
    
    transform: scale(1.04);
  }
  
  .card-img-top{
    height: 220px;
    
    
  }  

  
  .card-conteudo{
    height: auto;
    text-decoration: none;
    list-style: none;
  }

  .card-title{
    padding: 10px;
    font-size: 0.9em;
    
  }
  
  .card-body {
    padding-bottom: 5px;
  }
  
  .card-text {
    padding: 10px;
    padding-bottom: 0;

    span {
      color: #6a6fd8;
      font-weight: bold;
    }
  }
  
  .btn {
    color: #fff;
    background-color: #5158d9;
    text-decoration: none;
    padding: 8px 16px;
    border-radius: 4px;
    text-align: center;
    
    width: 100%;

    &:hover {
      background-color: #6a6fd8;
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
            <span>Á partir de </span>R${produtos.preco}
          </p>
          
          <button onClick={AdicionarLocalStorage} className="btn" >
            Adicionar ao <i class="fa-solid fa-cart-shopping" ></i>
          </button>
          </div>
      </Card>
      
    </div>
  );
};

export default CardProduto;