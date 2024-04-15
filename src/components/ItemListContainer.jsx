import { useState, useEffect } from "react";
import { getProducts, getProductByMarca } from "../AsynMock";
import ItemList from "./ItemList/ItemList";
import Page from "./Page";
import { useParams } from "react-router-dom";

function ItemListContainer() {

  const [products, setProducts] = useState([]);

  const { marca } = useParams()

  useEffect(() => {
    const asyncFunc = marca ? getProductByMarca : getProducts

    asyncFunc(marca)
      .then(response => {
        setProducts(response)
      })
      .catch ((error) => {
        console.log(error)
      })
  }, [marca])
  

  return (
    <Page title="Nuestros Productos">
      <ItemList products={products} />
    </Page>
  );
}

export default ItemListContainer;
