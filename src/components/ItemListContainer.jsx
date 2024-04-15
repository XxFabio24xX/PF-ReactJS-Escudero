import { useState, useEffect } from "react";
import { getProducts, getProductByMarca } from "../AsynMock";
import ItemList from "./ItemList/ItemList";
import Page from "./Page";
import { useParams } from "react-router-dom";
import Loading from "./Loading/Spinner";

function ItemListContainer() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] =  useState(false)

  const { marca } = useParams()

  useEffect(() => {
    setLoading(true)
    const asyncFunc = marca ? getProductByMarca : getProducts

    asyncFunc(marca)
      .then(response => {
        setProducts(response)
      })
      .catch ((error) => {
        console.log(error)
      })
      .finally(() => {
        setLoading(false);
      });
  }, [marca])

  if (loading) {
    return <Loading/>
  }
  

  return (
    <Page title='Nuestros Productos'>
      <ItemList products={products} />
    </Page>
  );
}

export default ItemListContainer;
