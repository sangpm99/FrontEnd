import React, {useEffect, useState} from 'react';
import FrameHeader from "../Frame/FrameHeader";
import SideBar from "./components/SideBar";
import Products from "./components/Products";
import GetAllProduct from "./Data/GetAllProduct";

function Food() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        GetAllProduct().then((data) => {
            setProducts(data)
        })
    }, []);
    return (
        <div>
            <FrameHeader />
            <div className="my-category flex justify-between p-body">
                <div className="w-2/12">
                    <SideBar />
                </div>
                <div className="w-9/12">
                    <Products props={products}/>
                </div>
            </div>
        </div>
    );
}

export default Food;