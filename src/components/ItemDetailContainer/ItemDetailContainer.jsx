import { useState, useEffect } from "react";
import { getProductById } from "../../AsynMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import Page from "../Page";

import { useParams } from "react-router-dom";
import Loading from "../Loading/Spinner";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] =  useState(false)


    const {itemId} = useParams()

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

export default ItemDetailContainer;