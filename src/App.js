import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Paginas/Home';
import { Header } from './Components/Header/Header';
import { Footer } from './Components/Footer/footer';
import CompraProduto from './Paginas/CompraProduto';
import './App.css';
import { Carrinho } from './Components/Carrinho/Carrinho';
import Login from './Paginas/Login';
import { Usuario } from './Paginas/Usuario';
import { Compra } from './Paginas/Compra';
import { useEffect } from 'react';


export default function App() {
  const [mostrarCarrinho, setMostraCarrinho] = useState(false);
  const toggleCarrinho = () => {
    setMostraCarrinho(!mostrarCarrinho);
  };
  

  const [produtos, setProdutos] = useState([]); 
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/caio-alex/produtosPet/refs/heads/main/produtos.json")
    .then((res) => res.json())
    .then((data) => setProdutos(data))
    .catch((err) => console.error("Erro ao carregar produtos:", err));
}, []);


  return (

    <Router>
      <Header toggleCarrinho={toggleCarrinho} />
      <Carrinho mostrar={mostrarCarrinho} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/compraProduto/:categoria" element={<CompraProduto />} />
        <Route path="/Usuario" element={<Usuario />} />
        <Route path="/Login" element={<Login />} />
        <Route path={`/Compra/:id`} element={<Compra produtos={produtos} />} />
      </Routes>
      <Footer />
    </Router>
 
  );
}
