import { useState, useEffect } from "react";
import ItemList from "./ItemList/ItemList";
import Page from "./Page";
import { useParams } from "react-router-dom";
import Loading from "./Loading/Spinner";
import { db } from "../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

function ItemListContainer() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] =  useState(false)

  const { marca } = useParams()

  useEffect(() => {
    setLoading(true)
  
    //Uso Firebase
    const collectionRef = marca ? query(collection(db, 'products'), where('marca', '==', marca)) : collection(db, 'products')

    getDocs(collectionRef)
      .then(response => {
        const products = response.docs.map(doc => {
          const data = doc.data()
          return { id: doc.id, ...data }
        })
        setProducts(products)
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
  
  return(
    <Page title='Nuestros Productos'>
      <ItemList products={products} />
    </Page>
  ); 
}

export default ItemListContainer;