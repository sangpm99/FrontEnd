import React, {createContext, useState} from 'react';

export const CartContext = createContext();

function CartContextProvider({children}) {
    const [cart, setCart] = useState([]);
    return (
        <div>
            <CartContext.Provider value={{cart, setCart}}>
                {children}
            </CartContext.Provider>
        </div>
    );
}

export default CartContextProvider;