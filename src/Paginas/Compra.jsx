import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Produtos } from "../Components/Produtos/Produtos";

const Produto = styled.div`
    background-color: var(--surface);
    max-width: 720px;
    margin: 40px auto;
    padding: 20px;
    border-radius: 20px;
    border: 1px solid var(--line);
    box-shadow: 0 8px 24px rgba(22, 35, 46, 0.08);
    justify-content: center;

    @media(max-width: 390px){
        margin: 10px;
    }
    
    img{
        min-width: 215px;
        max-width: 260px;
        height: 235px;
        object-fit: contain;
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
        
        h2.titulo{
            font-size: 1.4rem;
        }
        h4{
            font-family: var(--font-tag);
            font-weight: 700;
            align-content: center;
            color: var(--brand-deep);
            background-color: var(--sand);
            display: inline-block;
            padding: 4px 12px;
            border-radius: 8px;
            margin-bottom: 0;
        }
    }
    
    .btn_comprar{
        border-radius: 999px;
        padding: 10px 20px;
        border: none;
        box-shadow: 0 4px 12px rgba(255, 107, 74, 0.35);
        transition: transform ease 0.2s, background-color 0.2s ease;
        background-color: var(--accent-coral);
        color: #FFF;
        font-weight: 600;
        cursor: pointer;
        &:hover{
            transform: translateY(-1px);
            background-color: #e85b3c;
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
        max-width: 300px; 
        margin: 0 auto; 

        @media(max-width: 370px){
            margin: 0;
        }

        input{
            width: 70px;
            flex-shrink: 0;
            padding: 10px 12px;
            font-size: 1.05rem;
            text-align: center;
            border-radius: 8px;
            border: 1px solid var(--line);
            font-family: var(--font-body);

            &:focus{
                outline: none;
                border-color: var(--brand-mid);
            }
        }
    }

    .pagamento{
        margin: 16px 0 0;

        .btn-group{
            display: flex;
            justify-content: center;
            gap: 8px;
            flex-wrap: wrap;
        }

        .btn{
            padding: 8px 16px;
            border-radius: 999px;
            border: 1px solid var(--line);
            background-color: var(--paper);
            color: var(--brand-deep);
            font-weight: 600;
            cursor: pointer;
            transition: background-color 0.2s ease, color 0.2s ease;

            &:hover, &:focus{
                background-color: var(--accent-sun);
                color: var(--brand-deep);
            }
        }

        .dropdown-toggle{
            padding: 12px 24px;
            font-size: 1.05rem;
            min-width: 140px;
        }

        .dropdown-menu{
            min-width: 140px;
        }

        .dropdown-item{
            padding: 10px 16px;
            font-size: 1rem;

            &:hover{
                background-color: var(--accent-sun);
                color: var(--brand-deep);
            }

            &:focus{
                background-color: var(--brand-mid);
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
                <img src={produto.imagem} alt={produto.titulo}></img>
                <div className="titulo_preco">
                    <h2 className="titulo">{produto.titulo}</h2>
                    <div className="preco_compra">
                        <h4> R${(quantidade * produto.preco).toFixed(2)}</h4>
                        <input required type="number" min={1} id="quantidade" placeholder="QTD" value={quantidade} onChange={handleQuantidade}></input>
                        <button className="btn_comprar">Comprar</button>
                    </div>
                    <div className="pagamento">
                        <div className="btn-group" role="group" aria-label="Formas de pagamento">
                            <button type="button" className="btn">Crédito</button>
                            <button type="button" className="btn">Débito</button>

                            <div className="dropdown">
                                <button id="btnGroupDrop1" type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    Parcela
                                </button>
                                <ul className="dropdown-menu">
                                    <li><button type="button" className="dropdown-item">1x</button></li>
                                    <li><button type="button" className="dropdown-item">2x</button></li>
                                    <li><button type="button" className="dropdown-item">3x</button></li>
                                    <li><button type="button" className="dropdown-item">4x</button></li>
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