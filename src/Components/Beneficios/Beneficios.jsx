import styled from "styled-components"

const Promocao = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
    h2{
        text-align: center;
        margin: 0px 0px 0px;
        font-size: 1.9rem;
    }
    ul{
        padding: 0 0 0 0;
    }

    li{
        padding: 10px;
        font-size: 0.8rem;
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
`

export function Beneficios (){
    return(
        <>
        <TituloBeneficios>
            <h2>Benefícios pra você</h2>
        </TituloBeneficios>
        <Promocao>
            <div className="esquerda">
                <h2>werfgb</h2>
                <ul>
                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, suscipit.</li>
                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis!</li>
                    <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
                </ul>
                <div className="BotaoAddPromo">
                    <button className="botao">Adquira</button>
                </div>
            </div>
            <div className="direita">
                <h2>werfgb</h2>
                <ul>
                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, suscipit.</li>
                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis!</li>
                    <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
                </ul>
                <div className="BotaoAddPromo">
                    <button className="botao">Adquira</button>
                </div>
            </div>
        </Promocao>
        </>
    )
}