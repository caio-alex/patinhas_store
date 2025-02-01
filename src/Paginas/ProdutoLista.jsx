import CardProduto from '../Components/CardProduto/CardProduto';
import styled from "styled-components"

const Info = styled.div`
  text-align: center;
  font-weight: bold;
  align-items: center;

`

const ProdutoLista = ({ produtos }) => {
  if (!Array.isArray(produtos) || produtos.length === 0) {
    return <Info>Nenhum produto encontrado.</Info>;
  }
  return (
    <div className="container">
      <div className="row">
        {produtos.map((produto) => (
          
          <CardProduto 
            key={produto.id} 
            produtos={produto} 
          />
        ))}
      </div>
    </div>
  );
};


export default ProdutoLista;

