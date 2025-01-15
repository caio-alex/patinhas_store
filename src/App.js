import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Paginas/Home';
import { Header } from './Components/Header/Header';
import { Footer } from './Components/Footer/footer';
import { Compra } from './Paginas/compra1';
import './App.css';

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/compras" element={<Compra />} />
      </Routes>
      <Footer />
    </Router>
  );
}
