import { HeroSection } from '../Components/HeroSection/HeroSection';
import { Produtos } from '../Components/Produtos/Produtos';
import { Beneficios } from '../Components/Beneficios/Beneficios';
import { Carrinho } from '../Components/Carrinho/Carrinho';

export function Home() {


    return (
        <div>
            <Carrinho />
            <HeroSection />
            <Produtos />
            <Beneficios />
        </div>
    )
}