import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: [],
    totalQuantity: 0,
    total: 0,
    addItem: () => {},
    removeItem: () => {},
    clearCart: () => {},
  });

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [total, setTotal] = useState(0);
    
    console.log(cart)

    const addItem = (item, quantity) => {
        if(!isInCart(item.id)) {
            setCart(prev => [...prev, {...item, quantity}])
            setTotalQuantity(prev => prev + quantity);
            setTotal(prev => prev + item.price * quantity);
        } else {
            console.error('El producto ya fue agregado')
        }
    }

    const removeItem = (itemId) => {
        const cartUpdate = cart.filter((prod) => prod.id!== itemId);
        setCart(cartUpdate);
        setTotalQuantity(prev => prev - cart.find((prod) => prod.id === itemId).quantity);
        setTotal(prev => prev - cart.find((prod) => prod.id === itemId).price * cart.find((prod) => prod.id === itemId).quantity);
      };

    const clearCart = () => {
        setCart([]);
        setTotalQuantity(0);
        setTotal(0);
        console.log("se vacio el carrito");
    };

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    

    return(
        <CartContext.Provider value={ {cart, addItem, removeItem, clearCart, totalQuantity, total}}>
            {children}
        </CartContext.Provider>
    )
}

