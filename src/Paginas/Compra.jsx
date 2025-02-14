import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Produtos } from "../Components/Produtos/Produtos";

const Produto = styled.div`
    background-color: #FFF;
    margin: 50px;
    padding: 10px;
    border-radius: 20px;
    border: 2px solid #6a6fd8;
    justify-content: center;

    @media(max-width: 390px){
        margin: 10px;
    }
    
    img{
        min-width: 215px;
        height: 235px;
        justify-content: center;

        
    }
    
    .imagem_titulo{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        align-items: center;
        gap: 10px;
        padding: 5px;
        @media (max-width: 750px) {  
            justify-content: center;
            
        }
    }
    
    .titulo_preco{
        text-align: center;
        padding: 1rem;
        gap: 10px;
        
        h2{
            font-weight: 0.7em;

        }
        h4{
            font-weight: bold;
            align-content: center;
            color: #6a6fd8;
            margin-bottom: 0;
        }
    }
    
    .btn_comprar{
        border-radius: 10px;
        padding: 5px;
        border: none;
        box-shadow: 0 0 4px black;
        transition: transform ease 0.3s;
        background-color: #f0ba50;
        color: #FFF;
        font-weight: bold;
        &:hover{
            transform: scale(1.1);
            background-color: #fcc558;
        }

        @media(max-width: 350px){
            font-size: 0.8rem;
        }
    }
    
    .preco_compra{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: nowrap;
        gap: 10px;
        min-width: 260px; 
        width: 100%; 
        max-width: 250px; 
        margin: 0 auto; 

        @media(max-width: 370px){
            margin: 0;
        }

        input{
            width: 25%;
            border: solid 2px #6a6fd8;
        }
    }

    .pagamento{
        margin: 10px;

        .btn{
            padding: 5px;
            margin: 5px;
            background-color: #fcc558;
            color: #FFF;
            font-weight: bold;
            &:focus{
                background-color: #a07d38;
            }
        }


        .dropdown-item{
            
            &:hover{
                background-color: #fcc558;
                color: #FFF;
            }

            &:focus{
                background-color: #a07d38;
                color: #FFF;
                
            }
        }
    }
    `

export const Compra = ({ produtos }) => {
    const [quantidade, setQuantidade] = useState(1);

    const { id } = useParams();
    const produto = produtos.find((item) => item.id === parseInt(id));
    if (!produto) {
        return <h2>Produto não encontrado</h2>;
    }

    const handleQuantidade = (event) => {
        const novaQtd = parseInt(event.target.value);
        setQuantidade(novaQtd);
    }

    return (
        <>
        <Produto>
            <div className="imagem_titulo">
                <img src={produto.imagem}></img>
                <div className="titulo_preco">
                    <h2 className="titulo">{produto.titulo}</h2>
                    <div className="preco_compra">
                        <h4> R${(quantidade * produto.preco).toFixed(2)}</h4>
                        <input required type="number" min={1} id="quantidade" placeholder="QTD" value={quantidade} onChange={handleQuantidade}></input>
                        <button className="btn_comprar">Comprar</button>
                    </div>
                    <div className="pagamento">
                        <div class="btn-group" role="group" aria-label="Grupo de botões com dropdown aninhado">
                            <button type="button" class="btn ">Crédito</button>
                            <button type="button" class="btn ">Débito</button>

                            <div class="dropdown">
                                <button id="btnGroupDrop1" href="#" role="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    Parcela
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">1x</a></li>
                                    <li><a class="dropdown-item" href="#">2x</a></li>
                                    <li><a class="dropdown-item" href="#">3x</a></li>
                                    <li><a class="dropdown-item" href="#">4x</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Produto>
        <Produtos/>
        </>
    );
};
