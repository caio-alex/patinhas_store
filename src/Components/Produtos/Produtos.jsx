import styled from "styled-components"

const Destaques = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    margin: 10px 10px 30px;
    .card{
        width: 12rem;
        box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.2);
    }
    .btn{
        color: #FFF;
        background-color: #5158d9;
    }
    .btn:hover{
        background-color: #6a6fd8;
    }

    .card-body{
        padding-bottom: 5px;
    }

    .card-text{
        padding: 10px;
        padding-bottom: 0;

        span{
            color: #6a6fd8;
            font-weight: bold;
        }
    }
`;


const TituloProdutos = styled.div`
    text-align: center;
    padding: 10px;
`;

export function Produtos() {
    return (
        <>
        <TituloProdutos>
            <h2>Produtos que seu pet vai amar!</h2>
        </TituloProdutos>   
        <Destaques>
            <div class="card" >
                <img class="card-img-top" src="https://images.petz.com.br/fotos/1701977578928_mini.jpg" alt="Imagem de capa do card"></img>
                <div class="card-body">
                    <h5 class="card-title">Bifinho para Cães Sabor Churrasco</h5>
                </div>
                    <p class="card-text"><span>Á partir de</span> R$5,99</p>
                    <a href="#" class="btn">Adicionar</a>
            </div>
            <div class="card" >
                <img class="card-img-top" src="https://images.petz.com.br/fotos/1666986102340_mini.jpg" alt="Imagem de capa do card"></img>
                <div class="card-body">
                    <h5 class="card-title">Fralda Descartável Super Secão</h5>
                </div>
                    <p class="card-text"><span>Á partir de</span> R$35,99</p>
                    <a href="#" class="btn">Adicionar</a>
            </div>
            <div class="card">
                <img class="card-img-top" src="https://images.petz.com.br/fotos/1725981608055_mini.jpg" alt="Imagem de capa do card"></img>
                <div class="card-body">
                    <h5 class="card-title">Areia Higiênica Petz Grãos Finos Floral</h5>
                </div>
                    <p class="card-text"><span>Á partir de</span> R$19,99</p>
                    <a href="#" class="btn">Adicionar</a>
            </div>
            <div class="card">
                <img class="card-img-top" src="https://images.petz.com.br/fotos/1605041433424_mini.jpg" alt="Imagem de capa do card"></img>
                <div class="card-body">
                    <h5 class="card-title">Granulado Higiênico de Madeira para Pássaros Petz</h5>
                </div>
                    <p class="card-text"><span>Á partir de</span> R$16,99</p>
                    <a href="#" class="btn">Adicionar</a>
            </div>
            <div class="card">
                <img class="card-img-top" src="https://images.petz.com.br/fotos/1632948750925_mini.jpg" alt="Imagem de capa do card"></img>
                <div class="card-body">
                    <h5 class="card-title">Cama Zee.Dog Skull Zee.Bed Preta</h5>
                </div>
                    <p class="card-text"><span>Á partir de</span> R$499,99</p>
                    <a href="#" class="btn">Adicionar</a>
            </div>
        </Destaques>
        </>
    )
}
