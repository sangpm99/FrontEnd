import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import GetProductById from "../Data/GetProductById";
import './FoodDetail.scss';

function FoodDetail() {
    const { id } = useParams();

    const [product, setProduct] = useState([]);
    useEffect(() => {
        GetProductById(id).then((data) => {
            setProduct(data)
        })
    }, []);
    console.log(product);

    return (
        <div className="food-detail">
            <p>Product ID: {id}</p>
        </div>
    );
}

export default FoodDetail;