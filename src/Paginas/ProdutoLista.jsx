import CardProduto from '../Components/CardProduto/CardProduto';

const ProdutoLista = ({ produtos }) => {
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

