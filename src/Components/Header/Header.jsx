import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCartShopping, faBars } from '@fortawesome/free-solid-svg-icons';
import imgLogo from '../../Images/Patinhas_logo.png'
import styled from 'styled-components';
import { useState} from 'react';
import { Link } from 'react-router-dom';


const Navbar = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--brand-deep);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 16px rgba(27, 46, 34, 0.18);
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
    cursor: pointer;

    img{
      width: 4rem;
      height: 3.2rem;
      object-fit: contain;
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




const Lista = styled.ul`
  display: flex;
  justify-content: center;
  gap: 6px;
  list-style: none;
  width: 100%;
  padding: 6px 0 14px;
  margin-top: 4px;

  .listaMenu {
    position: relative;
    transition: background-color 0.3s ease, transform 0.2s ease;
    border-radius: 999px;
    padding: 6px 16px;
  }

  .listaMenu:hover {
    background-color: var(--accent-sun);
    transform: translateY(-1px);
  }

  .listaMenu:hover a {
    color: var(--brand-deep);
  }

  a {
    text-decoration: none;
    color: #fff;
    font-weight: 500;
    font-size: 0.95rem;
  }

  @media (max-width: 768px) {
    flex-wrap: wrap; 
    justify-content: center;
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
  background-color: var(--brand-deep);
  text-align: center;
  transition: transform 0.3s ease, height 0.3s ease;
  z-index: 1;

  h1{
    color: #fff;
    padding-top: 5px;
  }

  hr{
    height: 3px;
    background-color: #fff;
  }

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
    background-color: var(--accent-sun);
    border-radius: 10px;
  }

  li.listaMenu:hover a {
    color: var(--brand-deep);
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
        <Link to={"/"}><button className="logo" ><img src={imgLogo} alt="Patinhas Store"></img></button></Link>
        </div>
        
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
          <h1>Menu</h1>
          <hr></hr>
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