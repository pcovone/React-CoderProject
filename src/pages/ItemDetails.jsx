import { useParams } from "react-router-dom";
import { productsData } from "../json/productsData";
import ItemDetailContainer from "../components/ItemDetailContainer";

const ItemDetails = () => {
  const { itemId } = useParams();

  const filteredProduct = productsData
    .filter((product) => product.id === itemId)
    .map((product) => {
      product.url = product.url.replace("src/img/", "../../src/img/");
      product.key = product.id;
      return product;
    });

  return <ItemDetailContainer productData={filteredProduct} />;
};

export default ItemDetails;
