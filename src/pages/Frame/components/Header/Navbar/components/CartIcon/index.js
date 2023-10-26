import React, {useContext, useEffect, useState} from 'react';
import {BsHandbag} from "react-icons/bs";
import {Link} from "react-router-dom";
import { Badge } from 'antd';
import {Context} from "../../../../../../../CartContextProvider";

function CartIcon() {
    const {cart} = useContext(Context);
    const [count, setCount] = useState(0);

    useEffect(() => {
        let totalCount = 0;
        for (let i = 0; i < cart.length; i++) {
            totalCount += cart[i].quantity;
        }
        setCount(totalCount);
    }, [cart]);
    return (
        <Link className="flex items-center" to="/cart">
            <Badge color="green" count={count}>
                <BsHandbag className="text-2xl color-primary cursor-pointer"/>
            </Badge>
        </Link>
    );
}

export default CartIcon;
