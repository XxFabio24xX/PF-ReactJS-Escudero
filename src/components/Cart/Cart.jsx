import { useContext } from "react"
import {Link} from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import CartItem from "../CartItem/CartItem"
import { Button } from "antd"
import Page from "../Page"


const Cart = () => {
    const { cart, clearCart, totalQuantity, total} = useContext(CartContext)

    if(totalQuantity === 0){
        return(
            <Page>
                <div className="flex flex-col justify-center items-center mt-6">
                    <h1 className="text-White font-semibold text-3xl">Tu carrito está vacío</h1>
                </div>
                <div className="flex flex-col justify-center items-center mt-6">
                <Button><Link to="/" className="text-White">Volver a la tienda</Link></Button>
                </div>
            </Page>
        )
    }

    return(
        <Page  title="Tu Carrito:">
            {cart.map(products => <CartItem key={products.id} {...products} className="group relative"/>)}
            <div className="m-4 flex justify-center">
                <h3 className="font-semibold text-White text-2xl">Total: ${total}</h3>
            </div>
            <div className="flex justify-between">
                <Button type="primary" danger onClick={() => clearCart()}>Vaciar carrito</Button>
            <Button><Link to='/checkout'>Checkout</Link></Button>
            </div>
        </Page>
    )
}

export default Cart;