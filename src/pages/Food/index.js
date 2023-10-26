import React, {useEffect, useState} from 'react';
import FrameDefault from "../Frame/FrameDefault";
import SideBar from "./components/SideBar";
import Products from "./components/Products";
import GetAllProduct from "./Data/GetAllProduct";
import Bread from "../Frame/Breadcrumb";

function Food() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        GetAllProduct()
            .then(data => setProducts(data))
            .catch(error => {
                // Handle the error if needed
            });

    }, []);

    return (
        <div>
            <FrameDefault>
                <Bread>Thực Đơn</Bread>
                <div className="my-category flex justify-between p-body">
                    <div className="w-2/12">
                        <SideBar />
                    </div>
                    <div className="w-9/12">
                        <Products props={products}/>
                    </div>
                </div>
            </FrameDefault>
        </div>
    );
}

export default Food;