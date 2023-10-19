import React from 'react';
import {BsHandbag} from "react-icons/bs";
import {Link} from "react-router-dom";

function Cart() {
    return (
        <Link to="#"><BsHandbag className="text-2xl color-primary"/></Link>
    );
}

export default Cart;