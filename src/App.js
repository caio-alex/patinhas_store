import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Paginas/Home';
import { Header } from './Components/Header/Header';
import { Footer } from './Components/Footer/footer';
import CompraProduto from './Paginas/CompraProduto';
import './App.css';
import { Carrinho } from './Components/Carrinho/Carrinho';
import Loguin from './Paginas/Loguin';
import { Usuario } from './Paginas/Usuario';

export default function App() {
  const [mostrarCarrinho, setMostraCarrinho] = useState(false)
  
      const toggleCarrinho = () => {
          setMostraCarrinho(!mostrarCarrinho);
      }

  return (
    <Router>
      <Header toggleCarrinho={toggleCarrinho}/>
      <Carrinho mostrar={mostrarCarrinho}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/compraProduto/:categoria" element={<CompraProduto />} />
        <Route path='/Usuario' element={<Usuario/>}/>
        <Route path='/Loguin' element={<Loguin/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}
