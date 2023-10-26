import React from 'react';
import {Col, Rate, Row} from "antd";
import {Link} from "react-router-dom";
import {AiOutlineHeart, AiOutlineSearch, AiOutlineShoppingCart} from "react-icons/ai";
import './RelatedProduct.scss';

function RelatedProduct({props}) {
    const products = props.splice(0, 4);

    return (
        <div className="related-product">
            <div className="w-full">
                <Row className="product-grid">
                    {
                        products &&
                        products.map((product, index) => (
                            <Col key={index} className="product-box" span={6}>
                                <div className="rounded-3xl overflow-hidden relative">
                                    <Link to={`/fooddetail/${product["productId"]}`}>
                                        <img
                                            src={require(`../../../../../imgs/${product["avatarImageProduct"]}`)}
                                            alt={product["title"]}
                                        />
                                    </Link>

                                    <div className="product-tag w-full absolute bottom-0">
                                        <div className="flex justify-center">
                                            <div
                                                className="bg-primary secondary-hover cursor-pointer p-2 text-white mx-2 rounded-full">
                                                <AiOutlineShoppingCart className="text-lg"/>
                                            </div>
                                            <div
                                                className="bg-primary secondary-hover cursor-pointer p-2 text-white mx-2 rounded-full">
                                                <AiOutlineSearch className="text-lg"/>
                                            </div>
                                            <div
                                                className="bg-primary secondary-hover cursor-pointer p-2 text-white mx-2 rounded-full">
                                                <AiOutlineHeart className="text-lg"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-info py-5">
                                    <p className="text-2xl capitalize">{product["nameProduct"]}</p>
                                    <p className="py-2">
                                        {
                                            product["discount"] !== 0 &&
                                            <span>
                                            <span className="font-bold">
                                                {
                                                    (product["price"] - (product["discount"] * product["price"] / 100)).toLocaleString()
                                                } VND
                                            </span>
                                            <span className="px-2">
                                                -
                                            </span>
                                            </span>
                                        }
                                        <span
                                            className={
                                                product["discount"] !== 0 ? "sub-text line-through" : "font-bold"}
                                        >
                                            {product["price"].toLocaleString()} VND
                                        </span>
                                    </p>
                                    <Rate disabled defaultValue={5}/>
                                </div>
                            </Col>
                        ))
                    }
                </Row>
            </div>
        </div>
    );
}

export default RelatedProduct;