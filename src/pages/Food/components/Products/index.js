import React, {useState} from 'react';
import {Col, Rate, Row, Select} from "antd";
import {DownOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import {BsFillGrid3X3GapFill} from "react-icons/bs";
import {FaThList} from "react-icons/fa";
import {AiOutlineHeart, AiOutlineSearch, AiOutlineShoppingCart} from "react-icons/ai";
import './Product.scss';

function Products({props}) {
    const items = [
        {
            value: 'default',
            label: 'Mặc định',
        },
        {
            value: 'lowToHigh',
            label: 'Giá từ thấp tới cao',
        },
        {
            value: 'HighToLow',
            label: 'Giá từ cao tới thấp',
        },
    ];

    const [grid, setGrid] = useState(true);
    const handeGrid = (type) => {
        type === "grid" ?
            setGrid(prevState => true)
            : setGrid(prevState => false)
    }
    return (
        <div className="products">
            <div className="filter w-full bg-sub-primary p-2">
                <div className="flex justify-between items-center">
                    <div className="w-2/12">
                        <Select
                            suffixIcon={<DownOutlined style={{color: "#fff"}}/>}
                            defaultValue="default"
                            className="btn-primary"
                            style={{
                                width: "100%",
                            }}
                            options={items}
                        />

                    </div>
                    <div className="w-2/12 flex justify-end">
                        <ul className="flex">
                            <li
                                className={grid ? "p-3 bg-primary text-white" : "p-3 bg-white"}>
                                <Link
                                    to=""
                                    onClick={() => handeGrid("grid")}
                                ><BsFillGrid3X3GapFill/></Link>
                            </li>
                            <li
                                className={grid ? "p-3 bg-white" : "p-3 bg-primary text-white"}>
                                <Link
                                    to=""
                                    onClick={() => handeGrid("list")}
                                ><FaThList/></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="w-full">
                <Row className="product-grid">
                    {
                        props &&
                        props.map((product, index) => (
                            <Col key={index} className="product-box" span={6}>
                                <div className="rounded-3xl overflow-hidden relative">
                                    <Link to={`/fooddetail/${product["productId"]}`}>
                                        <img
                                            src={require(`../../../../imgs/${product["avatarImageProduct"]}`)}
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

export default Products;