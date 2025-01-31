import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CardProduto from "../CardProduto/CardProduto";

const Destaques = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin: 10px 10px 30px;
`;

const TituloProdutos = styled.div`
  text-align: center;
  padding: 10px;
`;

export function Produtos() {
  const [produto, setProdutos] = useState([]);

  useEffect(() => {
    async function fetchProdutos() {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/caio-alex/produtosPet/refs/heads/main/produtos.json"
        );
        const data = await response.json();
        setProdutos(data);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    }
    fetchProdutos();
  }, []);

  return (
    <>
      <TituloProdutos>
        <h2>Produtos que seu pet vai amar!</h2>
      </TituloProdutos>
      <Destaques>
        {produto.slice(0, 6).map((produtos) => (
          <CardProduto key={produtos.id} produtos={produtos} />
        ))}
      </Destaques>
    </>
  );
}
