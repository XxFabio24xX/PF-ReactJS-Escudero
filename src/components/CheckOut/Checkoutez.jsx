import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

import { db } from "../../firebaseConfig";
import { collection, documentId, query, where, writeBatch, getDocs, addDoc, serverTimestamp } from "firebase/firestore";

export const createOrder = ({name, phone, email}) => {

    const { cart, total, clearCart} = useContext(CartContext)

    const orderRef = collection(db, 'orders')
    const objOrder ={
        user: {
            name, phone, email
        },
        items: cart,
        total: total,
        date: serverTimestamp(),
    }

    const consulta = addDoc(orderRef, objOrder)
    consulta
        .then((resultado)=>{
            console.log(resultado)
        })
        .catch((error)=>{
            console.log(error)
        })

  return (
    <Page>
        <CheckoutForm onConfirm={createOrder}/>
    </Page>
  )
}

