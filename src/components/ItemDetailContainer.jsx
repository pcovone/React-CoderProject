import "./ItemDetails.css";

// eslint-disable-next-line react/prop-types
const ItemDetailContainer = ({ productData }) => {
  const product = productData;
  if (!product) {
    return <div>No se encontró el producto</div>;
  }

  return (
    <div className="product">
      <img src={product.url} alt={product.nombre} />
      <h2>{product.nombre}</h2>
      <p>Precio: ${product.precio}</p>
      <p>{product.descripcion}</p>
      <button className="buy-button">Comprar Ahora</button>
    </div>
  );
};

export default ItemDetailContainer;
