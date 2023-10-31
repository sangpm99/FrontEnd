import React, {useEffect, useState, Suspense} from 'react';
import FrameDefault from "../Frame/FrameDefault";
import GetAllProduct from "../../Data/GetAllProduct";
import LazyVideo from "../../LazyVideo";

const Products = React.lazy(() => import('./components/Products'));
const Bread = React.lazy(() => import("../Frame/Breadcrumb"));
const SideBar = React.lazy(() => import("./components/SideBar"));

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
            <Suspense fallback={<LazyVideo />}>
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
            </Suspense>
        </div>
    );
}

export default Food;