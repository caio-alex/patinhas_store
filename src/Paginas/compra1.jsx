import styled from 'styled-components';
import React from 'react';

const Filtro = styled.div`
    position: sticky; /* Faz a div ficar "grudada" durante o scroll */
    top: 120px; /* Define a distância do topo da tela enquanto rola */
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


const ListaProduto = styled.div`
    display: flex;
    justify-content: center;
    width: 70vw;
    margin: 10px;
    gap: 12px;
    flex-wrap: wrap;

    @media (max-width: 650px) {
        width: 100%;
    }

    .card {
        width: 10rem;
        box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.2);
    }
    .btn {
        color: #FFF;
        background-color: #5158d9;
    }
    .btn:hover {
        background-color: #6a6fd8;
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
`;

const Container = styled.div`
    display: flex;
    justify-content: space-around;
`;

export function Compra() {
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
                            <button class="btn btn-outline-secondary" type="button">F</button>
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
                            <button class="btn btn-outline-secondary" type="button">F</button>
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
            <ListaProduto>
                <div className="card">
                    <img
                        className="card-img-top"
                        src="https://images.petz.com.br/fotos/1701977578928_mini.jpg"
                        alt="Imagem de capa do card"
                    ></img>
                    <div className="card-body">
                        <h5 className="card-title">Bifinho para Cães Sabor Churrasco</h5>
                    </div>
                    <p className="card-text">
                        <span>Á partir de</span> R$5,99
                    </p>
                    <a href="#" className="btn">
                        Adicionar
                    </a>
                </div>
                <div className="card">
                    <img
                        className="card-img-top"
                        src="https://images.petz.com.br/fotos/1701977578928_mini.jpg"
                        alt="Imagem de capa do card"
                    ></img>
                    <div className="card-body">
                        <h5 className="card-title">Bifinho para Cães Sabor Churrasco</h5>
                    </div>
                    <p className="card-text">
                        <span>Á partir de</span> R$5,99
                    </p>
                    <a href="#" className="btn">
                        Adicionar
                    </a>
                </div>
                <div className="card">
                    <img
                        className="card-img-top"
                        src="https://images.petz.com.br/fotos/1701977578928_mini.jpg"
                        alt="Imagem de capa do card"
                    ></img>
                    <div className="card-body">
                        <h5 className="card-title">Bifinho para Cães Sabor Churrasco</h5>
                    </div>
                    <p className="card-text">
                        <span>Á partir de</span> R$5,99
                    </p>
                    <a href="#" className="btn">
                        Adicionar
                    </a>
                </div>
                <div className="card">
                    <img
                        className="card-img-top"
                        src="https://images.petz.com.br/fotos/1701977578928_mini.jpg"
                        alt="Imagem de capa do card"
                    ></img>
                    <div className="card-body">
                        <h5 className="card-title">Bifinho para Cães Sabor Churrasco</h5>
                    </div>
                    <p className="card-text">
                        <span>Á partir de</span> R$5,99
                    </p>
                    <a href="#" className="btn">
                        Adicionar
                    </a>
                </div>
                <div className="card">
                    <img
                        className="card-img-top"
                        src="https://images.petz.com.br/fotos/1701977578928_mini.jpg"
                        alt="Imagem de capa do card"
                    ></img>
                    <div className="card-body">
                        <h5 className="card-title">Bifinho para Cães Sabor Churrasco</h5>
                    </div>
                    <p className="card-text">
                        <span>Á partir de</span> R$5,99
                    </p>
                    <a href="#" className="btn">
                        Adicionar
                    </a>
                </div>
                <div className="card">
                    <img
                        className="card-img-top"
                        src="https://images.petz.com.br/fotos/1701977578928_mini.jpg"
                        alt="Imagem de capa do card"
                    ></img>
                    <div className="card-body">
                        <h5 className="card-title">Bifinho para Cães Sabor Churrasco</h5>
                    </div>
                    <p className="card-text">
                        <span>Á partir de</span> R$5,99
                    </p>
                    <a href="#" className="btn">
                        Adicionar
                    </a>
                </div>
                <div className="card">
                    <img
                        className="card-img-top"
                        src="https://images.petz.com.br/fotos/1701977578928_mini.jpg"
                        alt="Imagem de capa do card"
                    ></img>
                    <div className="card-body">
                        <h5 className="card-title">Bifinho para Cães Sabor Churrasco</h5>
                    </div>
                    <p className="card-text">
                        <span>Á partir de</span> R$5,99
                    </p>
                    <a href="#" className="btn">
                        Adicionar
                    </a>
                </div>
                <div className="card">
                    <img
                        className="card-img-top"
                        src="https://images.petz.com.br/fotos/1701977578928_mini.jpg"
                        alt="Imagem de capa do card"
                    ></img>
                    <div className="card-body">
                        <h5 className="card-title">Bifinho para Cães Sabor Churrasco</h5>
                    </div>
                    <p className="card-text">
                        <span>Á partir de</span> R$5,99
                    </p>
                    <a href="#" className="btn">
                        Adicionar
                    </a>
                </div>
                <div className="card">
                    <img
                        className="card-img-top"
                        src="https://images.petz.com.br/fotos/1701977578928_mini.jpg"
                        alt="Imagem de capa do card"
                    ></img>
                    <div className="card-body">
                        <h5 className="card-title">Bifinho para Cães Sabor Churrasco</h5>
                    </div>
                    <p className="card-text">
                        <span>Á partir de</span> R$5,99
                    </p>
                    <a href="#" className="btn">
                        Adicionar
                    </a>
                </div>
                <div className="card">
                    <img
                        className="card-img-top"
                        src="https://images.petz.com.br/fotos/1701977578928_mini.jpg"
                        alt="Imagem de capa do card"
                    ></img>
                    <div className="card-body">
                        <h5 className="card-title">Bifinho para Cães Sabor Churrasco</h5>
                    </div>
                    <p className="card-text">
                        <span>Á partir de</span> R$5,99
                    </p>
                    <a href="#" className="btn">
                        Adicionar
                    </a>
                </div>

            </ListaProduto>
        </Container>
    );
}
