import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCartShopping, faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons';
import imgHeader from '../../Images/header_pata.png';
import imgLogo from '../../Images/Patinhas_logo.png'
import styled from 'styled-components';
import { useState} from 'react';
import { Link } from 'react-router-dom';


const Navbar = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
   z-index: 1000;
  background-image: url(${imgHeader});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  flex-wrap: wrap; 
 

  .logo {
    font-weight: bold;
    color: #fff;
    margin: 0;
    border: none;
    background: none;

    img{
      width: 5rem;
      height: 4rem;
    }

    @media (max-width: 390px) {
    font-size: 1.1rem;
  }  
  }

  .drop_logo{
    display: flex;
    align-items: center;
  }

`;

const Icones = styled.div`
  display: flex;
  align-items: center;

  .icone{
    margin: 10px;
    font-size: 170%;
    cursor:pointer;
    transition: all ease 0.5s;

    @media (max-width: 390px) {
    font-size: 1.1rem;
  }  
  }

  .icone:hover{
    transform: scale(1.2) ;
  }
  
`;


const InputPesquisa = styled.div`
.pesquisa {
    flex: 1;
    width: auto;
    width: 16em;
    padding: 5px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

  .lupa{
    padding-left: 5px;
    transition: 0.5s transform;
    cursor:pointer

  }
  .lupa:hover{
    transform: rotate(25deg);
  }
  
  @media (max-width: 768px) {
    .pesquisa {
      margin: 10px 0;
    }
  }
  @media (max-width: 640px) {
    .pesquisa {
      width: 10em;
    }
  @media (max-width: 530px) {
    
      display: none;
    }
  }

`;

const Lista = styled.ul`
  display: flex;
  justify-content: space-around; 
  list-style: none;
  width: 100%;
  padding: 0; 
  margin-top: 10px; 

  .listaMenu {
    position: relative;
    transition: ease 0.6s;
  }

  .listaMenu::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 3px;
    background-color: #fff;
    transform: translateX(-50%);
    border-radius: 80px;
    transition: width 0.4s ease, background-color 0.4s ease;
  }

  .listaMenu:hover::after {
    width: 100%;
  }

  a {
    text-decoration: none;
    color: #fff;
  }

  @media (max-width: 768px) {
    flex-wrap: wrap; 
    justify-content: space-around;
  }

  @media (max-width: 530px) {
    display: none;
  }
  
`;

const MenuIcon = styled.div`
  display: none;
  cursor: pointer;
  font-size: 2rem;
  margin-left: 5px;


  @media (max-width: 530px) {
    display: block;
  }  
  @media (max-width: 390px) {
    font-size: 1.1rem;
  }  
`;

const Dropdown = styled.div`
  display: none;
  position: fixed;
  top: 100px;
  left: 50%;
  transform: translateX(-50%) scaleY(0);
  width: 70%;
  height: 0;
  overflow: hidden;
  border-radius: 10px;
  background-color: #032341f0;
  text-align: center;
  transition: transform 0.3s ease, height 0.3s ease;
  z-index: 1;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li.listaMenu {
    padding: 10px;
    width: 100%;
  }

  li.listaMenu:hover {
    background-color: #02182cef;
    border-radius: 10px;
  }

  a {
    color: #fff;
    text-decoration: none;
  }

  &.active {
    transform: translateX(-50%) scaleY(1);
    height: auto;
  }

  @media (max-width: 530px) {
    display: block;
  }
`;


const InputPesquisa2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  padding: 0 10px;

  .pesquisa {
    flex: 1;
    width: 100%;
    padding: 5px;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-right: 15px;
  }

  .lupa {
    cursor: pointer;
  }
`;


export function Header({toggleCarrinho}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }


  
  return (
    <Navbar>
      <Menu>
        <div className='drop_logo'>
          <MenuIcon onClick={toggleDropdown}>
            <FontAwesomeIcon icon={faBars} style={{ color: '#fff' }} />
          </MenuIcon>
        <Link to={"/"}><button className="logo" ><img src={imgLogo}></img></button></Link>
        </div>
        {/* <InputPesquisa>
          <input type="search" className="pesquisa" placeholder="Pesquisa"/>
          <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#f5f5f5" }} className='lupa' />
        </InputPesquisa> */}
        <Icones>
          <Link to="/Usuario"><FontAwesomeIcon icon={faUser} style={{ color: "#f5f5f5" }} className='icone' /></Link>
          <FontAwesomeIcon icon={faCartShopping} style={{ color: "#f5f5f5" }} className='icone' onClick={toggleCarrinho}/>
        </Icones>
      </Menu>


      <Lista >
        <li className="listaMenu">
          <Link to="/compraProduto/cachorro">Cachorro</Link>

        </li>
        <li className="listaMenu">
          <Link to="/compraProduto/gato">Gato</Link>
        </li>
        <li className="listaMenu">
          <Link to="/compraProduto/aves">Aves</Link>
        </li>
        <li className="listaMenu">
          <Link to="/compraProduto/peixe">Peixes</Link>
        </li>
        <li className="listaMenu">
          <Link to="/compraProduto/casajardim">Casa & Jardim</Link>
        </li>
      </Lista>
      

      {isDropdownOpen && (
        <Dropdown className={isDropdownOpen ? 'active' : ''}>
          {/* <InputPesquisa2>
            <input type="search" className="pesquisa" placeholder="Pesquisar" />
            <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#f5f5f5" }} className="lupa" />
          </InputPesquisa2> */}
          <ul>
            <li className="listaMenu">
              <Link to="/compraProduto/cachorro">Cachorro</Link>
            </li>
            <li className="listaMenu">
              <Link to="/compraProduto/gato">Gato</Link>
            </li>
            <li className="listaMenu">
              <Link to="/compraProduto/aves">Aves</Link>
            </li>
            <li className="listaMenu">
              <Link to="/compraProduto/peixe">Peixes</Link>
            </li>
            <li className="listaMenu">
              <Link to="/compraProduto/casajardim">Casa & Jardim</Link>
            </li>
          </ul>
        </Dropdown>
      )}

    </Navbar>
  );
}
