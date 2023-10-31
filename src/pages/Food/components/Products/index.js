import React, {useState} from 'react';
import {Button, Col, Form, Rate, Row, Select, Tag} from "antd";
import {DownOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import {BsFillGrid3X3GapFill} from "react-icons/bs";
import {FaThList} from "react-icons/fa";
import {AiOutlineHeart, AiOutlineSearch, AiOutlineShoppingCart} from "react-icons/ai";
import './Product.scss';
import {Modal } from 'antd';
import GetProductDetailByProductId from "../../../../Data/GetProductDetailByProductId";

function Products({props}) {
    const [modal2Open, setModal2Open] = useState(false);

    const [id, setId] = useState(0);
    const [productImage, setProductImages] = useState("");
    const [productName, setProductName] = useState("");
    const [productOriginalPrice, setProductOriginalPrice] = useState();
    const [productActualPrice, setProductActualPrice] = useState();
    const [productStatus, setProductStatus] = useState(1);
    const [productViews, setProductViews] = useState(200);
    const [productDetail, setProductDetail] = useState([]);

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

    const handleInfo = (id,
                        productImage,
                        productName,
                        productOriginalPrice,
                        productActualPrice,
                        productStatus,
                        productViews) => {
        setId(id);
        setProductImages(productImage);
        setProductName(productName);
        setProductOriginalPrice(productOriginalPrice);
        setProductActualPrice(productActualPrice);
        setProductStatus(productStatus);
        setProductViews(productViews);

        GetProductDetailByProductId(id).then((data) => {
            setProductDetail(data);
        });

        const fetchDataProductDetail = async () => {
            try {
                const data = await GetProductDetailByProductId(id);
                setProductDetail(data);
            }
            catch (error) {
                console.error('Lỗi fetch dữ liệu Product Detail: ', error);
            }
        }

        fetchDataProductDetail();

        setModal2Open(true);
    }

    return (
        <div className="products">
            {   productImage.length !== 0 &&
                <Modal
                    width="50%"
                    centered
                    open={modal2Open}
                    onOk={() => setModal2Open(false)}
                    onCancel={() => setModal2Open(false)}
                    footer={null}
                >
                    <div className="flex">
                        <div className="w-1/2">
                            <img
                                src={require(`../../../../imgs/${productImage}`)}
                                alt={productName}
                            />
                        </div>

                        <div className="w-1/2 ms-10 flex flex-col justify-between">
                            <p className="capitalize text-2xl w-full">{productName}</p>

                            <Rate disabled defaultValue={5} />

                            <Form
                                name="basic"
                                labelCol={{
                                    span: 6,
                                }}
                                wrapperCol={{
                                    span: 16,
                                }}
                                autoComplete="off"
                            >
                                <Form.Item
                                    label="Giá"
                                    name="price"
                                >
                                    <p>
                                        {
                                            productActualPrice &&
                                            <span>
                                                <span className="font-bold color-primary text-lg">
                                                    {productActualPrice.toLocaleString()} VND
                                                </span>
                                                <span className="px-2">
                                                    -
                                                </span>
                                        </span>
                                        }
                                        <span
                                            className = {
                                                productActualPrice ? "sub-text line-through" : "font-bold color-primary text-lg"}
                                        >
                                        {productOriginalPrice.toLocaleString()} VND
                                    </span>
                                    </p>
                                </Form.Item>

                                <Form.Item
                                    label="Tình trạng"
                                    name="status"
                                >
                                    <p>{productStatus === 0 ? <Tag color="error">Hết hàng</Tag> : <Tag color="success">Còn hàng</Tag>}</p>
                                </Form.Item>

                                <Form.Item
                                    label="Số lượt xem"
                                    name="views"
                                >
                                    <p>{productViews} lượt xem</p>
                                </Form.Item>

                                <p className="text-justify pe-4">
                                    {
                                        productDetail[0] &&
                                        productDetail[0].length > 280
                                            ? <p>{productDetail[0].slice(0, 280)} <Link to={`/fooddetail/${id}`} className="color-primary">[xem thêm]</Link></p>
                                            : productDetail[0]
                                    }
                                </p>

                                <Button className="btn-primary mt-5" href={`/fooddetail/${id}`}>
                                    XEM NGAY
                                </Button>

                            </Form>
                        </div>
                    </div>
                </Modal>
            }
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
                                                <Link className="text-white-hover" to={`/fooddetail/${product["productId"]}`}>
                                                    <AiOutlineShoppingCart className="text-lg" />
                                                </Link>
                                            </div>
                                            <div
                                                className="bg-primary secondary-hover cursor-pointer p-2 text-white mx-2 rounded-full">
                                                <AiOutlineSearch
                                                    onClick={() => handleInfo(
                                                        product["productId"],
                                                        product["avatarImageProduct"],
                                                        product["nameProduct"],
                                                        product["price"],
                                                        (product["price"] - (product["discount"] * product["price"] / 100)),
                                                        product["status"],
                                                        product["numberOfViews"],
                                                    )}
                                                    className="text-lg"
                                                />
                                            </div>
                                            <div
                                                className="bg-primary secondary-hover cursor-pointer p-2 text-white mx-2 rounded-full">
                                                <Link className="text-white-hover" to={`/fooddetail/${product["productId"]}`}>
                                                    <AiOutlineHeart className="text-lg"/>
                                                </Link>
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