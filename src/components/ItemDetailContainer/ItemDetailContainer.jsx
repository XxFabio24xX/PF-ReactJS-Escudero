import { useState, useEffect } from "react";
import { getProductById } from "../../AsynMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import Page from "../Page";

import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const {itemId} = useParams()

    useEffect(() => {
        getProductById(itemId)
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [itemId])

    return(
        <Page className="flex justify-center">
            <ItemDetail {...product} />
        </Page>
    )
}

export default ItemDetailContainer;