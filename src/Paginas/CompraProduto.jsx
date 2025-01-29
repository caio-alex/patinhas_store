
import styled from 'styled-components';
import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProdutoLista from './ProdutoLista';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Filtro = styled.div`
    position: sticky; 
    top: 120px;
    background-color: #f5f5fa;
    width: 25vw;
    height: 100%; 
    padding: 20px;
    margin: 20px;
    border-radius: 20px;
    border: 2px solid #6a6fd8;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;

    @media (max-width: 650px) {
        display: none;
    }

    h3 {
        text-align: center;
        color: #6a6fd8;
        font-size: 1.5rem;
        margin-bottom: 10px;
    }

    .form-group {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 10px;

        label {
            color: #5158d9;
            font-weight: bold;
            font-size: 1rem;
        }

        .form-control-range {
            width: 90%;
            accent-color: #6a6fd8; 
        }
    }

    .input-group {
        display: flex;
        gap: 5px;
        margin: 10px;

        .input-group-prepend {
            display: flex;

            button {
                background-color: #6a6fd8;
                color: #fff;
                font-weight: bold;
                border: none;
                border-radius: 5px;
                padding: 5px 10px;
                transition: background-color 0.3s;

                &:hover {
                    background-color: #5158d9;
                }
            }
        }

        .custom-select {
            border: 1px solid #6a6fd8;
            border-radius: 5px;
            padding: 5px;
            font-size: 1rem;
            color: #5158d9;
            width: 70%;

        }
    }
`;


const Container = styled.div`
    display: flex;
    justify-content: space-around;
`;

const DropdownButton = styled.button`
  position: absolute;
  top: 10rem;
  left: 10px;
  height: 10vh;
  background-color: #6a6fd8;
  color: #fff;
  border: none;
  border-radius: 10%;
  font-size: 1rem;
  z-index: 3;
  cursor: pointer;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #5158d9;
  }


  @media (min-width: 651px) {
    display: none;
  }
`;

const FiltroDropdown = styled.div`
  position: absolute;
  top: 150px;
  padding: 20px;
  background-color: #f5f5fa;
  height: auto;
  padding: 20px;   
  margin: 20px;
  border-radius: 20px;    
  border: 2px solid #6a6fd8;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: opacity 0.3s ease-in-out, visibility 0.3s;
  z-index: 4;

  @media (min-width: 651px) {
    display: none;
  }

  h3 {
        text-align: center;
        color: #6a6fd8;
        font-size: 1.5rem;
        margin-bottom: 10px;
    }

    .form-group {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 10px;

        label {
            color: #5158d9;
            font-weight: bold;
            font-size: 1rem;
        }

        .form-control-range {
            width: 90%;
            accent-color: #6a6fd8; 
        }
    }

    .input-group {
        display: flex;
        gap: 5px;
        margin: 10px;

        .input-group-prepend {
            display: flex;

            button {
                background-color: #6a6fd8;
                color: #fff;
                font-weight: bold;
                border: none;
                border-radius: 5px;
                padding: 5px 10px;
                transition: background-color 0.3s;

                &:hover {
                    background-color: #5158d9;
                }
            }
        }

        .custom-select {
            border: 1px solid #6a6fd8;
            border-radius: 5px;
            padding: 5px;
            font-size: 1rem;
            color: #5158d9;
            width: 70%;

        }
    }
`;

const CardsLista = styled.div`
    @media (max-width:650px) {
        justify-content: center;
    }
`;

const CompraProduto = () => {
    const { categoria } = useParams(); // Captura a categoria da URL
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        const fetchProdutos = async () => {
            const response = await fetch(
                `https://raw.githubusercontent.com/caio-alex/produtosPet/refs/heads/main/produtos.json`
            );
            const data = await response.json();

            // Filtrando os produtos pela categoria
            const produtosFiltrados = data.filter((produto) => produto.categoria === categoria);
            setProdutos(produtosFiltrados);
        };

        fetchProdutos();
    }, [categoria]);

    //  // // // // // // // //
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }

    return (
        <Container>
            <Filtro>
                <div>
                    <h3>Filtros</h3>
                    <form>
                        <div class="form-group">
                            <label for="formControlRange">Preço(R$)</label>
                            <input type="range" class="form-control-range" id="formControlRange"></input>
                        </div>
                    </form>
                    <div class="input-group ">
                        <div class="input-group-prepend">
                            <button class="btn btn-outline-secondary" type="button"><i class="fa-solid fa-filter"></i></button>
                        </div>
                        <select class="custom-select" id="inputGroupSelect03" aria-label="Exemplo de select com botão addon">
                            <option selected>Produto</option>
                            <option value="1">Um</option>
                            <option value="2">Dois</option>
                            <option value="3">Três</option>
                        </select>
                    </div>
                    <div class="input-group ">
                        <div class="input-group-prepend">
                            <button class="btn btn-outline-secondary" type="button"><i class="fa-solid fa-filter"></i></button>
                        </div>
                        <select class="custom-select" id="inputGroupSelect03" aria-label="Exemplo de select com botão addon">
                            <option selected>Marca</option>
                            <option value="1">Um</option>
                            <option value="2">Dois</option>
                            <option value="3">Três</option>
                        </select>
                    </div>
                </div>
            </Filtro>
            <DropdownButton onClick={toggleDropdown}>
                {isDropdownOpen ? <i class="fa-solid fa-xmark"></i> : <i class="fa-solid fa-filter"></i>}
            </DropdownButton>

            {isDropdownOpen && (
                <FiltroDropdown>
                    <div>
                        <h3>Filtros</h3>
                        <form>
                            <div class="form-group">
                                <label for="formControlRange">Preço(R$)</label>
                                <input type="range" class="form-control-range" id="formControlRange"></input>
                            </div>
                        </form>
                        <div class="input-group ">
                            <div class="input-group-prepend">
                                <button class="btn btn-outline-secondary" type="button"><i class="fa-solid fa-filter"></i></button>
                            </div>
                            <select class="custom-select" id="inputGroupSelect03" aria-label="Exemplo de select com botão addon">
                                <option selected>Produto</option>
                                <option value="1">Um</option>
                                <option value="2">Dois</option>
                                <option value="3">Três</option>
                            </select>
                        </div>
                        <div class="input-group ">
                            <div class="input-group-prepend">
                                <button class="btn btn-outline-secondary" type="button"><i class="fa-solid fa-filter"></i></button>
                            </div>
                            <select class="custom-select" id="inputGroupSelect03" aria-label="Exemplo de select com botão addon">
                                <option selected>Marca</option>
                                <option value="1">Um</option>
                                <option value="2">Dois</option>
                                <option value="3">Três</option>
                            </select>
                        </div>
                    </div>
                </FiltroDropdown>
            )}
            <CardsLista className='pai'>
            
                <ProdutoLista produtos={produtos} />
            
            </CardsLista>      

        </Container>
    );
}


export default CompraProduto;
