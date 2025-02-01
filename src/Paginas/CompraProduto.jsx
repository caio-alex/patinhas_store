
import styled from 'styled-components';
import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ProdutoLista from './ProdutoLista';


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
        width: 100%;

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
            width:90%;

        }
    }
`;


const Container = styled.div`
    display: flex;
    justify-content: space-around;
    
    .row{
        justify-content: space-around;
        gap: 5px;
    }
`;

const DropdownButton = styled.button`
  position: absolute;
  top: 10rem;
  left: 10px;
  height: 8vh;
  width: 8vw;

  background-color: #6a6fd8;
  color: #fff;
  border: none;
  border-radius: 50px;
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
            width: 90%;

        }
    }
`;

const CardsLista = styled.div`
    width: 70vw;
    
    @media (max-width:650px) {
        justify-content: center;
    }
`;

const CompraProduto = () => {
    const { categoria } = useParams();
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        const fetchProdutos = async () => {
            const response = await fetch(
                `https://raw.githubusercontent.com/caio-alex/produtosPet/refs/heads/main/produtos.json`
            );
            const data = await response.json();

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

    //   // // // // /// /// /////////

    const [precoMax, setPrecoMax] = useState(500);
    const [filtroCategoria, setFiltroCategoria] = useState("todos");
    const [filtroTipo, setFiltroTipo] = useState("todos")

    const produtosFiltrados = produtos.filter((produto) => {
        const matchCategoria = filtroCategoria === "todos" || produto.categoria === filtroCategoria;
        const matchPreco = precoMax === 0 || produto.preco <= precoMax;
        const matchTipo = filtroTipo === "todos" || produto.tipo === filtroTipo
        return matchCategoria && matchPreco && matchTipo;
    });

    return (
        <Container>
            <Filtro>
                <div>
                    <h3>Filtros</h3>
                    <form>
                        <div class="form-group">
                        <label htmlFor="formControlRange">
                            Preço(até R$ {precoMax})
                        </label>
                            <input type="range" class="form-control-range" id="formControlRange"
                                min="0"
                                max="500"
                                step="10"
                                onChange={(e) => setPrecoMax(e.target.value)}></input>
                        </div>
                    </form>
                    <div className="input-group">
                            
                            <select
                                className="custom-select"
                                onChange={(e) => setFiltroTipo(e.target.value)}
                                value={filtroTipo}
                                aria-label="Selecione uma categoria"
                            >
                                <option value="todos">Todos os produtos</option>
                                <option value="Alimento">Alimento</option>
                                <option value="Ambiente">Ambiente</option>
                                <option value="Higiene">Higiene</option>
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
                            <div className="form-group">
                                <label htmlFor="formControlRange">
                                    Preço(até R$ {precoMax})
                                </label>
                                <input
                                    type="range"
                                    className="form-control-range"
                                    id="formControlRange"
                                    min="0"
                                    max="500"
                                    step="10"
                                    value={precoMax}
                                    onChange={(e) => setPrecoMax(Number(e.target.value))} 
                                />
                            </div>
                        </form>
                        <div className="input-group">
                            <select
                                className="custom-select"
                                onChange={(e) => setFiltroTipo(e.target.value)}
                                value={filtroTipo}
                                aria-label="Selecione uma categoria"
                            >
                                <option value="todos">Todos os produtos</option>
                                <option value="Alimento">Alimento</option>
                                <option value="Ambiente">Ambiente</option>
                                <option value="Higiene">Higiene</option>
                            </select>
                        </div>
                    </div>
                </FiltroDropdown>
            )}
            <CardsLista className='pai'>
                
                <ProdutoLista produtos={produtosFiltrados} />

            </CardsLista>

        </Container>
    );
}


export default CompraProduto;
