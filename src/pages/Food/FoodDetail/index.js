import React, {useContext, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import GetProductById from "../Data/GetProductById";
import './FoodDetail.scss';
import FrameDefault from "../../Frame/FrameDefault";
import {Button, Form, Rate, Tag, Image, notification} from "antd";
import ButtonGroup from "antd/es/button/button-group";
import {MinusOutlined, PlusOutlined} from "@ant-design/icons";
import GetAllProduct from "../Data/GetAllProduct";
import GetProductTypeByProductId from "../Data/GetProductTypeByProductId";
import RelatedProduct from "./components/RelatedProduct";
import Description from "./components/Description";
import {Context} from "../../../CartContextProvider";

function FoodDetail() {
    const {cart, setCart} = useContext(Context);
    const updatedCart = [...cart];

    const { id } = useParams();

    const [product, setProduct] = useState([]);

    const [count, setCount] = useState(1);

    const [products, setProducts] = useState([]);

    const [productType, setProductType] = useState("");

    const [api, contextHolder] = notification.useNotification();

    // Lấy thông tin sản phẩm
    useEffect(() => {
        GetProductById(id).then((data) => {
            setProduct(data);
        });

        const fetchDataProductType = async () => {
            try {
                const data = await GetProductTypeByProductId(id);
                setProductType(data);
            } catch (error) {
                console.error('Lỗi khi fetch dữ liệu Product Type: ', error);
            }
        };

        fetchDataProductType();
    }, [id]);

    // Tăng số lượng
    const increase = () => {setCount(count + 1)};

    // Giảm số lượng
    const decline = () => {
        let newCount = count - 1;
        if (newCount < 1) {
            newCount = 1;
        }
        setCount(newCount);
    };

    // Sản phẩm liên quan
    useEffect(() => {
        GetAllProduct()
            .then(data => setProducts(data))
            .catch(error => {
                // Handle the error if needed
            });
        window.scrollTo(0, 0);
    }, [id, count]);

    const onFinish = (values) => {
        api.open({
            message: <p className="text-lg">Thêm vào giỏ hàng thành công!</p>,
            description:
                <div className="flex">
                    <div className="w-1/3">
                        <img
                            className="w-full"
                            src={require(`../../../imgs/${product["avatarImageProduct"]}`)}
                            alt={product["title"]}
                        />
                    </div>

                    <div className="w-2/3 flex flex-col justify-between p-3">
                        <p className="capitalize font-bold">{product["nameProduct"]}</p>

                        <p>
                            {
                                product["discount"] !== 0 &&
                                <span>
                                    <span className="font-bold color-primary">
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
                                className = {
                                    product["discount"] !== 0 ? "sub-text line-through" : "font-bold color-primary text"}
                            >
                                {product["price"].toLocaleString()} VND
                            </span>
                        </p>

                        <p>Số lượng: {count}</p>

                        <p className="font-bold">
                            Tổng cộng:
                            {
                                product["discount"] !== 0 &&
                                <span className="ps-1">
                                    <span className="font-bold color-primary">
                                        {
                                            ((product["price"] - (product["discount"] * product["price"] / 100)) * count).toLocaleString()
                                        } VND
                                    </span>
                                </span>
                            }
                            <span
                                className = {
                                    product["discount"] !== 0 ? "hidden" : "font-bold color-primary text ps-1"}
                            >
                                {(product["price"] * count).toLocaleString()} VND
                            </span>
                        </p>
                    </div>
                </div>,
            className: 'custom-class',
            style: {
                width: 400,
                top: "15vh"
            },
        });

        // Update Cart
        let found = false;
        for (let i = 0; i < updatedCart.length; i++) {
            if (updatedCart[i].productId === product.productId) {
                updatedCart[i].quantity += count;
                updatedCart[i].nameProduct = product.nameProduct;
                updatedCart[i].price = product.price;
                updatedCart[i].avatarImageProduct = product.avatarImageProduct;
                updatedCart[i].discount = product.discount;
                found = true;
                break;
            }
        }
        if (!found) {
            updatedCart.push({
                productId: product.productId,
                quantity: count,
                nameProduct: product.nameProduct,
                price: product.price,
                avatarImageProduct: product.avatarImageProduct,
                discount: product.discount
            });
        }
        setCart(updatedCart); // Cập nhật giỏ hàng
        console.log(updatedCart);
    };
    const onFinishFailed = (errorInfo) => {console.log('Failed:', errorInfo)};

    return (
        <div>
            <FrameDefault>
            {contextHolder}
            {
                (product.length !== 0) &&
                <div className="food-detail p-body flex flex-wrap">
                    <div className="w-1/3">
                        <div className="rounded-3xl overflow-hidden flex">
                            <Image
                                className="w-full"
                                src={require(`../../../imgs/${product["avatarImageProduct"]}`)}
                                alt={product["title"]}
                            />
                        </div>
                    </div>

                    <div className="w-1/3 ms-10">
                        <p className="capitalize text-4xl">{product["nameProduct"]}</p>
                        <Rate className="py-5" disabled defaultValue={5} />
                        <Form
                            className="py-5"
                            name="basic"
                            labelCol={{
                                span: 6,
                            }}
                            wrapperCol={{
                                span: 16,
                            }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >
                            <Form.Item
                                label="Giá"
                                name="price"
                            >
                                <p>
                                    {
                                        product["discount"] !== 0 &&
                                        <span>
                                            <span className="font-bold color-primary text-lg">
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
                                        className = {
                                            product["discount"] !== 0 ? "sub-text line-through" : "font-bold color-primary text-lg"}
                                    >
                                            {product["price"].toLocaleString()} VND
                                        </span>
                                </p>
                            </Form.Item>

                            <Form.Item
                                label="Loại sản phẩm"
                                name="type"
                            >
                                <p>{productType}</p>
                            </Form.Item>

                            <Form.Item
                                label="Tình trạng"
                                name="status"
                            >
                                <p>{product["status"] === 0 ? <Tag color="error">Hết hàng</Tag> : <Tag color="success">Còn hàng</Tag>}</p>
                            </Form.Item>

                            <Form.Item
                                label="Số lượt xem"
                                name="views"
                            >
                                <p>{product["numberOfViews"]} lượt xem</p>
                            </Form.Item>

                            <Form.Item
                                label="Số lượng"
                                name="quantity"
                            >
                                <ButtonGroup className="flex items-center">
                                    <Button className="btn-primary rounded-none" onClick={decline} icon={<MinusOutlined />} />
                                    <p className="px-5">{count}</p>
                                    <Button className="btn-primary rounded-none" onClick={increase} icon={<PlusOutlined />} />
                                </ButtonGroup>
                            </Form.Item>

                            <Form.Item
                            >
                                <Button
                                    className="btn-primary ant-btn css-dev-only-do-not-override-3mqfnx ant-btn-default"
                                    htmlType="submit"
                                >
                                    Thêm vào giỏ hàng
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>

                    <div className="w-full mt-10">
                        <Description id={id}/>
                    </div>

                    <div className="w-full mt-10">
                        <p className="text-center text-4xl">Sản Phẩm Liên Quan</p>
                        <RelatedProduct props={products} />
                    </div>
                </div>
            }
            </FrameDefault>
        </div>
    );
}

export default FoodDetail;
