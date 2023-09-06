import ItemListContainer from "../components/ItemListContainer";

import { productsData } from "../json/productsData";

const Home = () => {
  return <ItemListContainer productsData={productsData} />;
};

export default Home;
