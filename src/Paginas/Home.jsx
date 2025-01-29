import { Banner } from '../Components/Banner/Banner';
import { Produtos } from '../Components/Produtos/Produtos';
import { Beneficios } from '../Components/Beneficios/Beneficios';
import { Carrinho } from '../Components/Carrinho/Carrinho';
import { useState } from 'react';
import { Header } from '../Components/Header/Header';

export function Home() {
    
    
    
    return(
        <>
        <Carrinho/>
        <Banner/>
        <Produtos/>
        <Beneficios/>
        </>
    )
}