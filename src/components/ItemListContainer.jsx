import { Link } from "react-router-dom";
import "./ItemListContainer.css";

// eslint-disable-next-line react/prop-types
const ItemListContainer = ({ productsData }) => {
  return (
    <div className="wrap-product">
      {productsData.map((product) => (
        <div key={product.id} className="card" style={{ width: "18rem" }}>
          <img
            src={product.url}
            width={250}
            height={250}
            className="card-img-top"
            alt={product.nombre}
          />
          <div className="card-body">
            <h5 className="card-title">{product.nombre}</h5>
            <p className="card-text">{product.descripcion}</p>
            <Link to={`/item/${product.id}`}>Ver detalles</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemListContainer;
