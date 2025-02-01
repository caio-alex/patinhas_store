import styled from "styled-components";
import imgLogo from '../../Images/Patinhas_logo.png'
import { Link } from "react-router-dom";

const Footers = styled.div`
    background-color: #5158d9;
    
    .logo_img{
        width: 7rem;
        height: 6rem;
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
       color: #171a50;
        text-align: center;
        font-size: 1.5rem;
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
        border-radius: 10px;
        margin: 10px auto;
        padding: 10px 20px;
        background-color: #e6b553;
        color: #fff;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    h2{
        text-align: center;
    }

    button{
        border: none;
        text-align: center;
        border-radius: 10px;
        margin: 10px auto;
        padding: 10px 20px;
        background-color: #e6b553;
        color: #fff;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    button:hover {
        background-color: #ff7425;
    }
`

const Abas = styled.ul`
    display: flex;
    justify-content: center;
    padding: 0;
    
    .titulo{
        color: #171a50;
    }

    .topicos{
        justify-content: center;
        padding-left: 0;
        margin: 15px;
    }

    a {
        color: #fff;
        transition: color 0.3s ease;
    }

    a:hover {
        color: #ff9e57;
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
        background-color: #3d42a1;
        color: #fff;
    }
`

export function Footer() {
    return (
        <Footers>
            <img src={imgLogo} className="logo_img"></img>
            <ItensFooter>
                <Abas>
                    <ul className="topicos">
                        <h4 className="titulo">Páginas</h4>
                        <Link to="/compraProduto/cachorro"><li><a href="#">Cachorro</a></li></Link>
                        <Link to="/compraProduto/gato"><li><a href="#">Gato</a></li></Link>
                        <Link to="/compraProduto/aves"><li><a href="#">Aves</a></li></Link>
                        <Link to="/compraProduto/peixe"><li><a href="#">Peixes</a></li></Link>
                        <Link to="/compraProduto/casajardim"><li><a href="#">Casa & Jardim</a></li></Link>
                        
                    </ul>
                    
                    <ul className="topicos">
                        <h4 className="titulo">Nossas Redes</h4>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">YouTube</a></li>
                        <li><a href="#">X</a></li>
                    </ul>
                </Abas>
                <Form>
                    <h4>Receba promoções e novidades para o seu pet!</h4>
                    <ListaInput>
                        <input placeholder="email" type="email"></input>
                        <div class="dropdown">
                            <a class="btn btn-secondary " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Seu Pet
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Cachorro</a></li>
                                <li><a class="dropdown-item" href="#">Gato</a></li>
                                <li><a class="dropdown-item" href="#">Ave</a></li>
                                <li><a class="dropdown-item" href="#">Peixe</a></li>
                            </ul>
                            <button>Enviar</button>
                        </div>
                    </ListaInput>
                </Form>
            </ItensFooter>
        </Footers>
    )
}