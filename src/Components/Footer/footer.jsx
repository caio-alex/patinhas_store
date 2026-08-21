import styled from "styled-components";
import imgLogo from '../../Images/Patinhas_logo.png'
import { Link } from "react-router-dom";

const Footers = styled.div`
    background-color: var(--brand-deep);
    padding-top: 24px;
    margin-top: 40px;
    
    .logo_img{
        width: 6rem;
        height: 5rem;
        object-fit: contain;
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    
`;

const ItensFooter = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    @media (max-width: 560px) {
        flex-direction: column;
        align-items: center;
    }
`

const Form = styled.div`
    display: block;
    padding: 10px;
    justify-content: center;
    width: 30vw;

    h4{
       color: #fff;
        text-align: center;
        font-size: 1.3rem;
        font-family: var(--font-display);
        font-weight: 500;
    }

    @media (max-width: 750px) {
        width: 70%;
        h4{
            font-size: 1.3rem;
        }
    }
    @media (max-width: 560px) {
        h4{
            font-size: 1rem;
        }
    }

    input{
        padding: 5px;
    }

    input, .dropdown {
        display: flex;
        margin: 10px auto;
        border-radius: 10px;
        border: none;
        width: 100%;
    }

    .btn{
        border: none;
        text-align: center;
        border-radius: 999px;
        margin: 10px auto;
        padding: 10px 20px;
        background-color: var(--accent-coral);
        color: #fff;
        cursor: pointer;
        font-weight: 600;
        transition: background-color 0.3s ease;
    }

    h2{
        text-align: center;
    }

    button{
        border: none;
        text-align: center;
        border-radius: 999px;
        margin: 10px auto;
        padding: 10px 20px;
        background-color: var(--accent-coral);
        color: #fff;
        cursor: pointer;
        font-weight: 600;
        transition: background-color 0.3s ease;
    }

    button:hover {
        background-color: var(--accent-sun);
        color: var(--brand-deep);
    }
`

const Abas = styled.ul`
    display: flex;
    justify-content: center;
    padding: 0;
    
    .titulo{
        color: #fff;
        font-family: var(--font-display);
        font-weight: 500;
        font-size: 1.1rem;
    }

    .topicos{
        justify-content: center;
        padding-left: 0;
        margin: 15px;
    }

    a {
        color: rgba(255,255,255,0.85);
        transition: color 0.3s ease;
    }

    a:hover {
        color: var(--accent-sun);
    }
    @media (max-width: 768px) {
        order: 2;
    }

`

const ListaInput = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    

    @media (max-width: 768px) {
        width: 100%;
        order: 1;
    }

    .dropdown-item{
        font-weight: bold;
    
    }
    .dropdown-item:hover{
        background-color: var(--brand-mid);
        color: #fff;
    }
`

export function Footer() {
    return (
        <Footers>
            <img src={imgLogo} className="logo_img" alt="Patinhas Store"></img>
            <ItensFooter>
                <Abas>
                    <ul className="topicos">
                        <h4 className="titulo">Páginas</h4>
                        <li><Link to="/compraProduto/cachorro">Cachorro</Link></li>
                        <li><Link to="/compraProduto/gato">Gato</Link></li>
                        <li><Link to="/compraProduto/aves">Aves</Link></li>
                        <li><Link to="/compraProduto/peixe">Peixes</Link></li>
                        <li><Link to="/compraProduto/casajardim">Casa & Jardim</Link></li>
                    </ul>
                    
                    <ul className="topicos">
                        <h4 className="titulo">Nossas Redes</h4>
                        <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
                        <li><a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
                        <li><a href="https://youtube.com" target="_blank" rel="noreferrer">YouTube</a></li>
                        <li><a href="https://x.com" target="_blank" rel="noreferrer">X</a></li>
                    </ul>
                </Abas>
                <Form>
                    <h4>Receba promoções e novidades para o seu pet!</h4>
                    <ListaInput>
                        <input placeholder="email" type="email"></input>
                        <div className="dropdown">
                            <button type="button" className="btn btn-secondary" data-bs-toggle="dropdown" aria-expanded="false">
                                Seu Pet
                            </button>
                            <ul className="dropdown-menu">
                                <li><button type="button" className="dropdown-item">Cachorro</button></li>
                                <li><button type="button" className="dropdown-item">Gato</button></li>
                                <li><button type="button" className="dropdown-item">Ave</button></li>
                                <li><button type="button" className="dropdown-item">Peixe</button></li>
                            </ul>
                            <button type="button">Enviar</button>
                        </div>
                    </ListaInput>
                </Form>
            </ItensFooter>
        </Footers>
    )
}