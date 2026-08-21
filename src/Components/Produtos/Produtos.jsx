import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CardProduto from "../CardProduto/CardProduto";

const Destaques = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin: 10px 10px 40px;
`;

const TituloProdutos = styled.div`
  text-align: center;
  padding: 10px;

  h2{
    font-size: 1.6rem;
    margin: 0;
  }
`;

export default function Produtos() {
  // Estado guardando a lista (plural)
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3334/produtos')
      .then((resposta) => resposta.json())
      .then((dados) => {
        console.log("O que veio do Back-End?", dados); // Espiando a resposta
        
        // Verifica se a resposta é diretamente uma lista
        if (Array.isArray(dados)) {
          setProdutos(dados);
        } 
        // Verifica se a lista veio dentro de um objeto (ex: dados.produtos ou dados.data)
        else if (dados && Array.isArray(dados.produtos)) {
          setProdutos(dados.produtos);
        } 
        // Se vier qualquer outra coisa (como um erro), mantém a lista vazia para não quebrar
        else {
          console.error("Formato inesperado:", dados);
          setProdutos([]); 
        }
      })
      .catch((erro) => console.error("Erro ao buscar produtos:", erro));
  }, []);

  return (
    <>
      <TituloProdutos id="produtos">
        <h2>Produtos que seu pet vai amar!</h2>
      </TituloProdutos>
      <Destaques>
        {produtos?.slice(0, 3).map((item) => (
          <CardProduto key={item.id} produtos={item} /> 
        ))}
      </Destaques>
      
      <TituloProdutos><h2>Em promoção!</h2></TituloProdutos>
      <Destaques>
        {produtos?.slice(4, 7).map((item) => (
          <CardProduto key={item.id} produtos={item} /> 
        ))}
      </Destaques>
    </>
  );
}