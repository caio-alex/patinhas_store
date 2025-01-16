import React from "react";
import styled from "styled-components";

const ListaProdutoContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 70vw;
    margin: 10px;
    gap: 12px;
    flex-wrap: wrap;

    @media (max-width: 650px) {
        width: 100%;
    }

`;

const Card = styled.div`
  width: 10rem;
  box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  border-radius: 10px;

  .card-img-top {
    width: 100%;
    height: auto;
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
    display: inline-block;
    padding: 8px 16px;
    border-radius: 4px;
    text-align: center;
    
    width: 100%;

    &:hover {
      background-color: #6a6fd8;
    }
  }
`;

const produtos = [
    {
        id: 1,
        imagem: "https://images.petz.com.br/fotos/1701977578928_mini.jpg",
        titulo: "Bifinho para Cães Sabor Churrasco",
        preco: "R$5,99",
    },
    {
        id: 2,
        imagem: "https://images.petz.com.br/fotos/1701977578928_mini.jpg",
        titulo: "Bifinho para Cães Sabor Frango",
        preco: "R$6,49",
    },
    {
        id: 3,
        imagem: "https://images.petz.com.br/fotos/1701977578928_mini.jpg",
        titulo: "Bifinho para Cães Sabor Carne",
        preco: "R$6,99",
    },
    {
        id: 4,
        imagem: "https://images.petz.com.br/fotos/1701977578928_mini.jpg",
        titulo: "Bifinho para Cães Sabor Carne",
        preco: "R$6,99",
    },
    {
        id: 5,
        imagem: "https://images.petz.com.br/fotos/1701977578928_mini.jpg",
        titulo: "Bifinho para Cães Sabor Carne",
        preco: "R$6,99",
    },
    {
        id: 6,
        imagem: "https://images.petz.com.br/fotos/1701977578928_mini.jpg",
        titulo: "Bifinho para Cães Sabor Carne",
        preco: "R$6,99",
    },
    {
        id: 7,
        imagem: "https://images.petz.com.br/fotos/1701977578928_mini.jpg",
        titulo: "Bifinho para Cães Sabor Carne",
        preco: "R$6,99",
    }
];

const CardProduto = ({ imagem, titulo, preco }) => {
    const AdicionarLocalStorage = () => {
        const produtosSalvos = JSON.parse(localStorage.getItem('produtos')) || [];
        const novoProduto = { imagem, titulo, preco };

        produtosSalvos.push(novoProduto);

        localStorage.setItem('produtos', JSON.stringify(produtosSalvos))

        window.alert(`${titulo} adicionado ao carrinho`)
    };
    return (
        <Card>
            <img className="card-img-top" src={imagem} alt={titulo} />
            <div className="card-body">
                <h5 className="card-title">{titulo}</h5>
            </div>
            <p className="card-text">
                <span>Á partir de</span> {preco}
            </p>
            <button onClick={AdicionarLocalStorage} className="btn">
                Adicionar
            </button>
        </Card>
    );
};

export const ListaProduto = () => (
    <ListaProdutoContainer>
        {produtos.map((produto) => (
            <CardProduto
                key={produto.id}
                imagem={produto.imagem}
                titulo={produto.titulo}
                preco={produto.preco}
            />
        ))}
    </ListaProdutoContainer>
);

export default ListaProduto;

