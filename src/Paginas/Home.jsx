import { Banner } from '../Components/Banner/Banner';
import { Produtos } from '../Components/Produtos/Produtos';
import { Beneficios } from '../Components/Beneficios/Beneficios';
import { Carrinho } from '../Components/Carrinho/Carrinho';

export function Home() {


    return (
        <div>
            <Carrinho />
            <Banner />
            <Produtos />
            <Beneficios />
        </div>
    )
}