import { useContext, useState } from "react";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import Page from "../Page";
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebaseConfig";
import { collection, addDoc, serverTimestamp, writeBatch, getDoc, query, documentId, where, doc } from "firebase/firestore";
import CartItem from "../CartItem/CartItem";
import { Button } from "antd";
import { Link } from "react-router-dom";


function Checkout() {
    const [loading, setLoading] = useState(false)
    const [VentaId, setVentaId] = useState('')

    const { cart, total, clearCart} = useContext(CartContext)

    const createVenta = async ({name,phone,email}) => {
        setLoading(true)

        try {
            // Verificar cada objeto en el array cart
            cart.forEach(item => {
                if (!item.id || !item.name || !item.price || !item.quantity) {
                    throw new Error("Los objetos en el carrito deben tener los campos 'id', 'name', 'price' y 'quantity' definidos");
                }
            });
    
            const objVenta = {
                usuario: { name, phone, email },
                items: [] ,
                total: total,
                date: serverTimestamp(),
            };
    
            const ventaRef = collection(db, 'ventas');
            const ventaAdded = await addDoc(ventaRef, objVenta);
            setVentaId(ventaAdded.id);
            clearCart();
        } catch (error) {
            console.error("Error al crear la venta:", error);
        } finally {
            setLoading(false);
        }
        //console.log(usuario)
    }      

    if(loading){
        return(
            <Page>
                <h1 className="text-White font-bold text-4xl">Se esta generando su orden...</h1>
            </Page>
        )
    }

    if(VentaId){
        return(
            <Page>
                <h1 className="text-White font-bold text-4xl">El Id de su compra es: {VentaId}</h1>
                <div className="flex flex-col justify-center items-center mt-6">
                    <Button><Link to="/" className="text-White">Volver a la tienda</Link></Button>
                </div>
            </Page>
        )
    }

    return (
        <Page>
            <CheckoutForm onConfirm={createVenta}/>
        </Page>
    );
}

export default Checkout;