import { createContext,useState } from "react";

const CartContext=createContext();

// CartContext.Provider

const CartContextProvider= ()=>{       //Provider will provide the value and there will be a consumer as well that will take the value from provider.
    const [cart,setCart]=useState(0)
    const handleChange=(inc)=>{
        setCart(cart+inc)
    }
    return (
        <CartContext.Provider value={0}> /*value will store a value of any type but just one, to store multiple values take nested objects*/
            <App/>
        </CartContext.Provider>
    )
}     

export default CartContextProvider;