import { useParams } from "react-router-dom";
import { productsData } from "../json/productsData";
import ItemListContainer from "../components/ItemListContainer";

const Category = () => {
  const { categoryId } = useParams();

  const filterProduct = function (productsData) {
    const filteredProducts = productsData.filter(
      (product) => product.categoria === categoryId
    );
    filteredProducts.forEach((product) => {
      product.url = product.url.replace("src/img/", "../../src/img/");
      product.key = product.id;
    });
    return filteredProducts;
  };

  // filteredProducts.forEach(
  //   (product) =>
  //     (product.url = product.url.replace("src/img/", "../../src/img/"))
  // );

  return (
    <div>
      <ItemListContainer productsData={filterProduct(productsData)} />
    </div>
  );
};

export default Category;
