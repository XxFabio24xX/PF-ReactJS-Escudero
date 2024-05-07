import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { db } from "../../firebaseConfig"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"



export const createVenta = ({name, phone, email}) => {
    const ventaCollection = collection(db, "ventas")

    const { cart, total, clearCart} = useContext(CartContext)
  
    const venta = {
      items: cart,
      usuario: { name , phone , email},
      date: serverTimestamp(),
      total: total
    }
  
    const consulta = addDoc(ventaCollection, venta)
    consulta
      .then((resultado)=>{
        console.log(resultado)
        
        clearCart
      })
      .catch((error)=>{
        console.log(error)
      })
}

export const createSale = () => {
  
    const salesCollection = collection(db, "ventas")
  
    const venta = {
      items: [],
      usuario: { nombre: "Horacio", tel: "123456789", email: "test@test.com" },
      fechaDeCompra: serverTimestamp(),
      total: 0
    }
  
    const consulta = addDoc(salesCollection, venta)
    
    consulta
      .then((resultado)=>{
        console.log(resultado)
      })
      .catch((error)=>{
        console.log(error)
      })
  
  }
