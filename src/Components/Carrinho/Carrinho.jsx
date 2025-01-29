import styled from "styled-components";
import React, { useEffect, useState } from "react";

const Aside = styled.div`
    display: ${({mostrar}) => (mostrar ? "block" : "none")};
    width: 40vw;
    background-color: #F6F6F6;
    height: 70vh;
    position: fixed;
    overflow-y: auto;
    right: 0;
    z-index: 10;
    
    
    border: 5px solid #6a6fd8;
    padding: 1rem;

    @media(max-width: 650px){
        justify-content: center;
        width: 70vw;
        

        p{
            font-size: 0.8rem;
        }
    }

    @media(max-width: 520px){
        p{
            font-size: 0.6rem;
        }
    }


    h2{
        text-align: center;
        color: #6a6fd8;
    }

    li{
        margin: 5px;
        padding: 8px;
        background-color: #f0f0f0;
        border: 5px;
        padding-bottom: 2px;
    }

    .lista-carrinho{
        padding-left: 0;
        padding-bottom: 0;
    }

`;


export function Carrinho({mostrar}) {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        const produtosDoCarrinho = localStorage.getItem("produtos");
        if (produtosDoCarrinho) {
            setProdutos(JSON.parse(produtosDoCarrinho));
            
        }
    }, []);

    return (
        <Aside mostrar={mostrar}>
            <h2>Carrinho</h2>
            <hr />
            <ul className="lista-carrinho">
                {produtos.length > 0 ? (
                    produtos.map((produto) => (
                        <li key={produto.id}>
                            {/* imagem */}
                            <p><strong>{produto.titulo}</strong> - 
                            R${produto.preco} - ({produto.quantidade} unidade(s))</p>
                        </li>
                    ))
                ) : (
                    <li>Não há produtos no carrinho!</li>
                )}
            </ul>
        </Aside>
    );
}