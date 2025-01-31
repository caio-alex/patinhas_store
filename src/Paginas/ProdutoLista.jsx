import CardProduto from '../Components/CardProduto/CardProduto';

const ProdutoLista = ({ produtos }) => {
  if (!Array.isArray(produtos) || produtos.length === 0) {
    return <p>Nenhum produto encontrado.</p>;
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

