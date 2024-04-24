import { Button } from "antd"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const CartItem = ({ id, name, price, imageSrc, imageAlt, quantity }) => {
    const { removeItem } = useContext(CartContext)

    return(
        <div className="mt-3 rounded-lg bg-Baige">
            <div className="grid grid-cols-6 gap-4 items-center">
                <div className="">
                    <img src={imageSrc} alt={imageAlt} className="rounded-lg"/>
                </div>
                <div className="pt-4 ps-2 col-span-4 h-full">
                    <h3 className="text-Negro font-semibold">
                        {name}
                    </h3>
                    <p>Precio: ${price}</p>
                    <p>Cantidad: {quantity}</p>
                    <p className="font-semibold pt-16">SubTotal: ${price * quantity}</p>
                </div>
                <div className="justify-self-center">
                    <Button onClick={() => removeItem(id)} danger ghost>Eliminar</Button>
                </div>
            </div>
        </div>
    )
}

export default CartItem;