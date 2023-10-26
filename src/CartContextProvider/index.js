import React, {createContext, useState} from 'react';

export const Context = createContext();

function CartContextProvider({children}) {
    const [cart, setCart] = useState([
        // {
        //     productId: 1,
        //     quantity: 1,
        //     nameProduct: "Cá Thu",
        //     price: 3400,
        //     avatarImageProduct: "abc.jpg",
        //     discount: 15
        // }
    ]);
    return (
        <div>
            <Context.Provider value={{cart, setCart}}>
                {children}
            </Context.Provider>
        </div>
    );
}

export default CartContextProvider;