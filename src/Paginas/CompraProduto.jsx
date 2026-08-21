import styled from 'styled-components';
import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProdutoLista from './ProdutoLista';


const filtroStyles = `
    h3 {
        text-align: center;
        color: var(--brand-deep);
        font-size: 1.3rem;
        margin-bottom: 10px;
    }

    .form-group {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 10px;

        label {
            color: var(--brand-mid);
            font-weight: 600;
            font-size: 0.9rem;
        }

        .form-control-range {
            width: 90%;
            accent-color: var(--accent-coral);
        }
    }

    .input-group {
        display: flex;
        gap: 5px;
        margin: 10px;
        width: 100%;

        .custom-select {
            border: 1px solid var(--line);
            border-radius: 8px;
            padding: 8px;
            font-size: 0.95rem;
            font-family: var(--font-body);
            color: var(--ink);
            width: 90%;
            background-color: var(--paper);
        }
    }
`;

const Filtro = styled.div`
    position: sticky; 
    top: 120px;
    background-color: var(--surface);
    width: 25vw;
    height: 100%; 
    padding: 24px;
    margin: 20px;
    border-radius: 20px;
    border: 1px solid var(--line);
    box-shadow: 0 4px 16px rgba(22, 35, 46, 0.08);
    display: flex;
    flex-direction: column;

    @media (max-width: 650px) {
        display: none;
    }

    ${filtroStyles}
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
  min-width: 52px;
  min-height: 52px;

  background-color: var(--accent-coral);
  color: #fff;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  z-index: 3;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(255, 107, 74, 0.35);
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #e85b3c;
  }


  @media (min-width: 651px) {
    display: none;
  }
`;

const FiltroDropdown = styled.div`
  position: absolute;
  top: 150px;
  padding: 20px;
  background-color: var(--surface);
  height: auto;
  margin: 20px;
  border-radius: 20px;    
  border: 1px solid var(--line);
  box-shadow: 0 8px 20px rgba(22, 35, 46, 0.16);
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: opacity 0.3s ease-in-out, visibility 0.3s;
  z-index: 4;

  @media (min-width: 651px) {
    display: none;
  }

  ${filtroStyles}
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

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }

    const [precoMax, setPrecoMax] = useState(500);
    const [filtroCategoria] = useState("todos");
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
                        <div className="form-group">
                        <label htmlFor="formControlRange">
                            Preço(até R$ {precoMax})
                        </label>
                            <input type="range" className="form-control-range" id="formControlRange"
                                min="0"
                                max="500"
                                step="10"
                                value={precoMax}
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
                {isDropdownOpen ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-filter"></i>}
            </DropdownButton>

            {isDropdownOpen && (
                <FiltroDropdown>
                    <div>
                        <h3>Filtros</h3>
                        <form>
                            <div className="form-group">
                                <label htmlFor="formControlRangeMobile">
                                    Preço(até R$ {precoMax})
                                </label>
                                <input type="range" className="form-control-range" id="formControlRangeMobile"
                                min="0"
                                max="500"
                                step="10"
                                value={precoMax}
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
                </FiltroDropdown>
            )}
            <CardsLista className='pai'>
                
                <ProdutoLista produtos={produtosFiltrados} />

            </CardsLista>

        </Container>
    );
}


export default CompraProduto;