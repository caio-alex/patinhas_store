import { Header } from '../Components/Header/Header';
import { Banner } from '../Components/Banner/Banner';
import { Produtos } from '../Components/Produtos/Produtos';
import { Beneficios } from '../Components/Beneficios/Beneficios';
import { Footer } from '../Components/Footer/footer';

export function Home() {
    return(
        <>
        <Banner/>
        <Produtos/>
        <Beneficios/>
        </>
    )
}