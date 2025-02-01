import styled from "styled-components"

const Promocao = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;

    .card{
        align-items: center;
        min-height: 60vh;
        flex-direction: column;
        justify-content: space-between;
    }
    
    h2{
        text-align: center;
        margin: 0;
        font-size: 1.5rem;
        
    }
    ul{
        padding: 0 0 0 0;
    }

    li{
        padding: 10px;
        
    }
    
    .esquerda{
        background-color: #5158d9;
        border-radius: 20px;
        padding: 10px;
        color: #FFF;
        max-width: 40vw;
        margin: 10px;
    }
    .direita{
        background-color: #e6b553;
        border-radius: 20px;
        padding: 10px;
        color: #FFF;
        max-width: 40vw;
        margin: 10px;
    }
    
    @media (max-width: 640px) {
        display: block;
        justify-content: center;
        align-items: center;
        .direita{
            max-width: 90vw;
        }
        .esquerda{
            max-width: 90vw;
        }
    }

    .BotaoAddPromo{
        justify-content: center;
    }

    .botao{
        text-align: center;
        padding: 5px;
        border-radius: 10px;
        border: 2px solid #FFF;
        background-color: rgba(255, 255, 255, 0.007);
        color: #FFF;
        transition: transform 0.3s ease;
        }
        button:hover {
            transform: scale(1.1); 
    }
    `;

const TituloBeneficios = styled.div`
    text-align: center;
    margin: 0 0 0px;
    color: #6a6fd8;
    font-weight: bold;
`

export function Beneficios (){
    return(
        <>
        <TituloBeneficios>
            <h2>Benefícios pra você</h2>
        </TituloBeneficios>
        <Promocao>
            <div className="card esquerda">
            <h2><i class="fa-solid fa-dog"></i>Produtos de Qualidade</h2>
                <ul>
                    <li>Na Patinhas Store, garantimos o melhor conforto, saúde e diversão ao seu pet.</li>
                    <li>Com nossa logística eficiente, garantimos que suas compras cheguem até você de forma rápida e segura.</li>
                    <li>Oferecemos preços acessíveis e promoções especiais para garantir que você encontre tudo o que precisa.</li>
                </ul>
                <div className="BotaoAddPromo">
                    <button className="botao">Adquira</button>
                </div>
            </div>
            <div className=" card direita">
                <h2><i class="fa-solid fa-cat"></i>Variedade de Produtos</h2>
                <ul>
                    <li>Encontre tudo em um só lugar: acessórios, roupas, medicamentos e até itens exclusivos.</li>
                    <li>Trabalhamos apenas com marcas confiáveis e produtos que realmente fazem a diferença no dia a dia do seu pet.</li>
                    <li>Aproveite descontos e ofertas especiais pensadas para você economizar.</li>
                </ul>
                <div className="BotaoAddPromo">
                    <button className="botao">Adquira</button>
                </div>
            </div>
        </Promocao>
        </>
    )
}