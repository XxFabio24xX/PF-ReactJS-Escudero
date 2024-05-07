import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import Page from "../Page";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Spinner";

import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebaseConfig";


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] =  useState(false)


    const {itemId} = useParams()

    //Uso Firebase
    useEffect(() => {
        setLoading(true)

        const docRef = doc(db, 'products', itemId)
        
        getDoc(docRef)
            .then(response => {
                const data = response.data()
                const product = { id: response.id, ...data }
                setProduct(product)
            })
            .catch(error => {
                console.error(error)
            })
            .finally(() => {
                setLoading(false);
            });
    }, [itemId])

    if (loading) {
        return <Loading/>
    }

    return(
        <Page>
            <ItemDetail {...product} />
        </Page>
    )
}

export default ItemDetailContainer;

//Codigo viejo
    /*
    useEffect(() => {
        setLoading(true)
        getProductById(itemId)
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.error(error)
            })
            .finally(() => {
                setLoading(false);
            });
    }, [itemId])

    if (loading) {
        return <Loading/>
    }

    return(
        <Page>
            <ItemDetail {...product} />
        </Page>
    )
}
*/